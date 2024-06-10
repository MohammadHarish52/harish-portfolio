import { useEffect } from "react";
import { videosrc } from "./constants/video";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Idoltime = () => {
  useEffect(() => {
    const element = document.querySelector(".findme");
    if (element) {
      gsap.to(".findme", {
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".findme",
          start: "top 80%", // When the top of the element is 80% from the top of the viewport
          end: "top 20%", // When the top of the element is 20% from the top of the viewport
          scrub: true, // Smooth scrubbing effect
          duration: 2,
        },
      });
    }
  }, [".findme"]);
  const handleMouseEnter = (event) => {
    event.target.play();
  };

  const handleMouseLeave = (event) => {
    event.target.pause();
    event.target.currentTime = 0; // Optionally reset to start
  };
  return (
    <div>
      <div className="pt-[180px] sm:pt-[290px] ">
        <div className="flex  flex-col justify-between items-start sm:flex-row gap-[10px]">
          <h1 className="text-[18px] font-[500] tracking[.-5px] ">
            (Idoltime)
          </h1>
          <p className="text-[31px] findme opacity-0 sm:text-[40px] font-[500] text-left sm:leading-[48px] leading-[39px] pb-[80px] sm:tracking-[-1.3px] tracking-[-.8px]">
            When I’m not at the computer You <br />
            can find me watching Messi ,binging <br /> one pieace and capturing
            Nature.
          </p>
          <div></div>
        </div>

        <div className="flex flex-wrap flex-col sm:flex-row items-center justify-start gap-4 w-full">
          {videosrc.map((video) => (
            <video
              key={video.id}
              className="w-full sm:w-auto  lg:w-[24%] mt-10 rounded-xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <source src={video.src} type="video/mp4" />
            </video>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Idoltime;
