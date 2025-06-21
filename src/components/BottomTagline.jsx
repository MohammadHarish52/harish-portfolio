import { useContext, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LightContext } from "./LightContext";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

const BottomTagline = (props) => {
  const { light } = useContext(LightContext);
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
        <p className="text-[22px] sm:text-[40px] font-[500] text-left sm:leading-[48px] leading-[25px] pb-[40px] sm:tracking-[-1.3px] tracking-[-.8px]">
          {props.paraone} <br />
          {props.paraoneone}
        </p>
        <p className="text-[22px] sm:text-[40px] font-[500] text-left sm:leading-[48px] leading-[25px] pb-[40px] sm:tracking-[-1.3px] tracking-[-.8px]">
          {props.paratwo} <br />
          {props.paratwotwo}
        </p>

        <a
          href="mailto:xharish52@gmail.com"
          className={`text-[18px] ${
            light ? "border-[#fff5e1]" : "border-[#000]"
          } border-[1px] px-[35px] rounded-full ${
            light ? "hover:text-[#000]" : "hover:text-[#fff5e1]"
          } ${light ? "hover:bg-[#fff5e1]" : "hover:bg-[#000]"} 
            font-semibold text-left leading-[48px] duration-1000`}
        >
          xharish52@gmail.com
        </a>
      </div>
    </div>
  );
};

export default BottomTagline;

BottomTagline.propTypes = {
  paraone: PropTypes.string.isRequired,
  paraoneone: PropTypes.string,
  paratwo: PropTypes.string.isRequired,
  paratwotwo: PropTypes.string,
};
