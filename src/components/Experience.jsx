import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { experienceData } from "./constants/Experince";
import { LightContext } from "./LightContext";

gsap.registerPlugin(ScrollTrigger);

const Experince = () => {
  const { light } = useContext(LightContext);
  const timelineRef = useRef(null);
  const itemsRef = useRef([]);
  const timelineCircleRef = useRef(null);
  const timelineContainerRef = useRef(null);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, experienceData.length);

    if (
      timelineRef.current &&
      timelineCircleRef.current &&
      timelineContainerRef.current
    ) {
      const timelineCircle = timelineCircleRef.current;
      const container = timelineContainerRef.current;
      const sections = itemsRef.current.filter(Boolean);

      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf(timelineCircle);

      // Ensure all sections have a valid offsetHeight before proceeding
      if (
        sections.length > 0 &&
        sections.every((s) => s && s.offsetHeight > 0)
      ) {
        const initialCircleTop = 12; // For visual alignment with text

        let finalCalculatedTop = initialCircleTop;
        if (sections.length > 1) {
          finalCalculatedTop =
            initialCircleTop +
            sections
              .slice(0, -1)
              .reduce((sum, section) => sum + section.offsetHeight, 0);
        }

        // Timeline circle movement animation
        gsap.to(timelineCircle, {
          top: finalCalculatedTop,
          ease: "none", // Linear ease for direct scroll tracking
          scrollTrigger: {
            trigger: container,
            start: "top 70%", // Start when container top is at 70% viewport height
            end: "bottom 70%", // End when container bottom is at 70% viewport height
            scrub: 1.0, // Balanced responsiveness and smoothness
            invalidateOnRefresh: true,
          },
        });

        // Timeline circle visibility: Appear when scrolling into view
        gsap.to(timelineCircle, {
          opacity: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "top 70%",
            scrub: 0.5,
            onEnter: () =>
              gsap.to(timelineCircle, { opacity: 1, duration: 0.2 }),
            onLeaveBack: () =>
              gsap.to(timelineCircle, { opacity: 0, duration: 0.2 }),
          },
        });

        // Timeline circle visibility: Disappear when scrolling past
        gsap.to(timelineCircle, {
          opacity: 0,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: container,
            start: "bottom 30%",
            end: "bottom top",
            scrub: 0.5,
            onLeave: () =>
              gsap.to(timelineCircle, { opacity: 0, duration: 0.2 }),
            onEnterBack: () =>
              gsap.to(timelineCircle, { opacity: 1, duration: 0.2 }),
          },
        });

        // Content animation for each section
        sections.forEach((section) => {
          gsap.fromTo(
            section.querySelector(".content"),
            {
              opacity: 0.4,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 50%",
                scrub: 1,
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        // Star animations
        const stars = timelineCircle.querySelectorAll(".star");
        stars.forEach((star, i) => {
          gsap.to(star, {
            rotation: "+=360",
            repeat: -1,
            duration: 6 + i * 2.5,
            ease: "none",
          });
          gsap.to(star, {
            scale: 1.25,
            repeat: -1,
            yoyo: true,
            duration: 2.5 + i,
            ease: "sine.inOut",
          });
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      if (timelineCircleRef.current) {
        gsap.killTweensOf(timelineCircleRef.current);
      }
    };
  }, [light, experienceData.length]);

  return (
    <div
      ref={timelineRef}
      className="flex justify-between items-start sm:pt-[220px] sm:pb-[290px] pt-[140px] pb-[160px] flex-wrap gap-[10px] w-[100%]"
    >
      <div>
        <h1 className="text-[22px] sm:text-[40px] font-[700] tracking-[-2px] masked-title">
          (Experience)
        </h1>
      </div>
      <div className="flex flex-col">
        <p className="text-[18px] xs:text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-[500] text-left leading-[22px] xs:leading-[24px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] xl:leading-[48px] pb-[40px] tracking-[-.6px] xs:tracking-[-.7px] sm:tracking-[-.9px] md:tracking-[-1.1px] lg:tracking-[-1.2px] xl:tracking-[-1.3px] vibe-text subheading-text">
          Founder of InfiniteStudioX, specializing in <br />
          Web Development, Web3, DeFi, and App <br />
          Development. Focused on creating MVPs <br />
          with exceptional design and functionality.
          <br />
        </p>

        <div ref={timelineContainerRef} className="flex flex-col relative">
          {/* Main timeline line */}
          <div
            className={`absolute left-5 top-0 w-[2px] h-full ${
              light
                ? "bg-gradient-to-b from-[#fff5e1] via-[#fff5e1] to-[#fff5e1]/70"
                : "bg-gradient-to-b from-[#000b07] via-[#000b07] to-[#000b07]/70"
            } z-0`}
          ></div>

          <div
            ref={timelineCircleRef}
            className="timeline-circle absolute left-5 -ml-[9px] z-20 will-change-transform opacity-0"
            style={{ top: 42 }} // Updated initial top position
          >
            <div
              className={`relative z-10 rounded-full w-[20px] h-[20px] flex items-center justify-center transform transition-colors duration-1000 ${
                light
                  ? "border-2 border-[#fff5e1] bg-[#000b07]"
                  : "border-2 border-[#000b07] bg-[#fff5e1]"
              } shadow-lg`}
            >
              <FaStar
                className={`star absolute -top-1 -right-1 text-[8px] transition-colors duration-1000 ${
                  light ? "text-[#fff5e1]" : "text-[#000b07]"
                }`}
              />
              <FaStar
                className={`star absolute -bottom-2 -left-1 text-[6px] transition-colors duration-1000 ${
                  light ? "text-[#fff5e1]" : "text-[#000b07]"
                }`}
              />
              <FaStar
                className={`star absolute -top-3 left-0 text-[5px] transition-colors duration-1000 ${
                  light ? "text-[#fff5e1]" : "text-[#000b07]"
                }`}
              />
            </div>
          </div>

          {experienceData.map((exp, index) => {
            return (
              <div
                key={exp.id}
                className="relative"
                ref={(el) => (itemsRef.current[index] = el)}
              >
                <div className="flex gap-6 mb-[80px]">
                  <div className="w-10 h-10 relative flex-shrink-0"></div>
                  <div className="flex flex-col gap-[25px] content will-change-transform">
                    <h2 className="text-[18px] font-[500] leading-[24px] text-left tracking-[-.5px] masked-title">
                      {exp.name}
                    </h2>
                    <p className="text-[#868788] text-[18px] font-[500] text-left w-full tracking-[-.5px] leading-[1.5em]">
                      {exp.lineone} <br />
                      {exp.linetwo} <br />
                      {exp.linethree} <br />
                      {exp.linefour}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Experince;
