import { useEffect, useRef } from "react";

// Right-side decorative morphing geometry - DEBUG VERSION
const RightSideMorph = () => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log("❌ Canvas not found");
      return;
    }

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) {
      console.log("❌ Canvas context not available");
      return;
    }

    console.log("✅ Canvas initialized");

    // Set fixed size for debugging
    canvas.width = 200;
    canvas.height = 200;
    canvas.style.width = "200px";
    canvas.style.height = "200px";

    // Draw a simple visible test shape
    const drawTest = () => {
      ctx.clearRect(0, 0, 200, 200);

      // Draw a bright red circle for testing
      ctx.beginPath();
      ctx.arc(100, 100, 80, 0, Math.PI * 2);
      ctx.fillStyle = "#ff0000";
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Add text for debugging
      ctx.fillStyle = "#ffffff";
      ctx.font = "16px Arial";
      ctx.textAlign = "center";
      ctx.fillText("MORPH", 100, 105);
    };

    drawTest();
    console.log("✅ Test shape drawn");

    return () => {
      console.log("🔄 Component cleanup");
    };
  }, []);

  console.log("🔄 RightSideMorph rendering");

  return (
    <div
      ref={wrapperRef}
      className="relative ml-3 md:ml-6 hidden md:block shrink-0 self-start"
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "rgba(255,0,0,0.1)", // Debug background
        border: "2px solid red", // Debug border
        zIndex: 9999,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          border: "1px solid blue", // Debug canvas border
        }}
      />
      <div style={{ color: "white", fontSize: "12px" }}>DEBUG MORPH</div>
    </div>
  );
};

export default RightSideMorph;
