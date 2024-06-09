import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const BottomTagline = (props) => {
  useEffect(() => {
    gsap.to(".bottom", {
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".bottom",
        start: "top 80%", // When the top of the element is 80% from the top of the viewport
        end: "top 20%", // When the top of the element is 20% from the top of the viewport
        scrub: true, // Smooth scrubbing effect
      },
    });
  }, []);

  return (
    <div className="flex items-start py-[220px]">
      <div className="flex flex-col items-start justify-start leading-0 sm:leading-[96px] bottom opacity-0">
        <p className="text-[31px] sm:text-[40px] font-[500] text-left sm:leading-[48px] leading-[39px] pb-[40px] sm:tracking-[-1.3px] tracking-[-.8px]">
          {props.paraone} <br />
          {props.paraoneone}
        </p>
        <p className="text-[31px] sm:text-[40px] font-[500] text-left sm:leading-[48px] leading-[39px] pb-[40px] sm:tracking-[-1.3px] tracking-[-.8px]">
          {props.paratwo} <br />
          {props.paratwotwo}
        </p>

        <a
          href="mailto:xharish52@gmail.com"
          className="text-[18px]
            font-semibold text-left leading-[48px] border-black border-[1px] px-[35px] rounded-full hover:text-white hover:bg-black duration-1000"
        >
          xharish52@gmail.com
        </a>
      </div>
    </div>
  );
};

export default BottomTagline;
