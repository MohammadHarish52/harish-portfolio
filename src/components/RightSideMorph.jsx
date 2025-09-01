import { useEffect, useRef } from "react";

// Right-side decorative morphing geometry rendered on Canvas
// - Fixed to the right side on md+ screens
// - Smoothly morphs between circle, triangle, square, pentagon
// - Pointer-events disabled so it never interferes with UI
const RightSideMorph = () => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpi = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    let frameId;
    let resizeObserver;
    let start = performance.now();

    const SAMPLES = 160; // smoothness of curves
    const DURATION = 6; // seconds per morph

    // Utility: easing and lerp
    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const lerp = (a, b, t) => a + (b - a) * t;

    // Generate normalized shape point arrays ([-1,1] range)
    const sampleCircle = () => {
      const pts = [];
      for (let i = 0; i < SAMPLES; i++) {
        const a = (i / SAMPLES) * Math.PI * 2;
        pts.push({ x: Math.cos(a), y: Math.sin(a) });
      }
      return pts;
    };

    const sampleRegularPolygonPerimeter = (sides) => {
      // Sample along the perimeter so all shapes have equal-length point arrays
      const verts = [];
      const angleStep = (Math.PI * 2) / sides;
      for (let i = 0; i < sides; i++) {
        const a = -Math.PI / 2 + i * angleStep;
        verts.push({ x: Math.cos(a), y: Math.sin(a) });
      }
      // Create edges
      const edges = [];
      for (let i = 0; i < sides; i++) {
        const a = verts[i];
        const b = verts[(i + 1) % sides];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const len = Math.hypot(dx, dy);
        edges.push({ a, b, len });
      }
      const perimeter = edges.reduce((acc, e) => acc + e.len, 0);
      const step = perimeter / SAMPLES;
      const pts = [];
      let accLen = 0;
      let currentEdge = 0;
      let edgePos = 0;
      for (let i = 0; i < SAMPLES; i++) {
        const target = i * step;
        while (accLen + (edges[currentEdge]?.len || 0) < target) {
          accLen += edges[currentEdge].len;
          currentEdge = (currentEdge + 1) % sides;
          edgePos = 0;
        }
        const e = edges[currentEdge];
        const remaining = target - accLen;
        const t = e.len === 0 ? 0 : remaining / e.len;
        pts.push({ x: lerp(e.a.x, e.b.x, t), y: lerp(e.a.y, e.b.y, t) });
      }
      return pts;
    };

    const SHAPES = [
      sampleCircle(), // circle
      sampleRegularPolygonPerimeter(3), // triangle
      sampleRegularPolygonPerimeter(4), // square
      sampleRegularPolygonPerimeter(5), // pentagon
    ];

    const mixShapes = (a, b, t) =>
      a.map((p, i) => ({ x: lerp(p.x, b[i].x, t), y: lerp(p.y, b[i].y, t) }));

    const resize = () => {
      const wrap = wrapperRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      // Base strictly on available width for consistent aspect ratio
      const targetWidth = rect.width || 220;
      const size = Math.max(160, Math.min(260, targetWidth));
      canvas.width = Math.floor(size * dpi);
      canvas.height = Math.floor(size * dpi);
      canvas.style.width = `${Math.floor(size)}px`;
      canvas.style.height = `${Math.floor(size)}px`;
      ctx.setTransform(dpi, 0, 0, dpi, 0, 0);
    };

    const draw = (pts) => {
      const { width, height } = canvas;
      const w = width / dpi;
      const h = height / dpi;
      ctx.clearRect(0, 0, w, h);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      const radius = Math.min(w, h) * 0.44;

      // Background subtle radial tint
      const bg = ctx.createRadialGradient(
        0,
        -radius * 0.2,
        radius * 0.2,
        0,
        0,
        radius * 1.1
      );
      bg.addColorStop(0, "rgba(255,255,255,0.03)");
      bg.addColorStop(0.5, "rgba(0,150,255,0.05)");
      bg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = bg;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 1.1, 0, Math.PI * 2);
      ctx.fill();

      // Build path
      ctx.beginPath();
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const x = p.x * radius;
        const y = p.y * radius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();

      // Fill solid black
      ctx.fillStyle = "#000000";
      ctx.fill();

      // Thin, crisp stroke
      ctx.strokeStyle = "rgba(255,255,255,0.65)";
      ctx.lineWidth = 0.7;
      ctx.shadowColor = "rgba(0,0,0,0)";
      ctx.shadowBlur = 0;
      ctx.stroke();

      ctx.restore();
    };

    const animate = (now) => {
      const elapsed = (now - start) / 1000;
      const total = SHAPES.length;
      const phase = Math.floor(elapsed / DURATION) % total;
      const next = (phase + 1) % total;
      const t = easeInOutCubic((elapsed % DURATION) / DURATION);
      const pts = mixShapes(SHAPES[phase], SHAPES[next], t);
      draw(pts);
      frameId = requestAnimationFrame(animate);
    };

    resize();
    frameId = requestAnimationFrame(animate);

    // Observe container resize for responsiveness
    resizeObserver = new ResizeObserver(resize);
    if (wrapperRef.current) resizeObserver.observe(wrapperRef.current);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative pointer-events-none select-none md:ml-6 hidden md:block shrink-0 self-start"
      aria-hidden="true"
      style={{ width: "clamp(160px, 12vw, 240px)" }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default RightSideMorph;
