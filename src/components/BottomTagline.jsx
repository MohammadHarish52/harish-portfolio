import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";
import { useEffect } from "react";

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
        <p className="text-[18px] xs:text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-[500] text-left leading-[22px] xs:leading-[24px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] xl:leading-[48px] pb-[15px] sm:pb-[20px] tracking-[-.6px] xs:tracking-[-.7px] sm:tracking-[-.9px] md:tracking-[-1.1px] lg:tracking-[-1.2px] xl:tracking-[-1.3px] vibe-text subheading-text">
          {props.paraone} <br />
          {props.paraoneone}
        </p>
        <p className="text-[18px] xs:text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-[500] text-left leading-[22px] xs:leading-[24px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] xl:leading-[48px] pb-[15px] sm:pb-[20px] tracking-[-.6px] xs:tracking-[-.7px] sm:tracking-[-.9px] md:tracking-[-1.1px] lg:tracking-[-1.2px] xl:tracking-[-1.3px] vibe-text subheading-text">
          {props.paratwo} <br />
          {props.paratwotwo}
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4"></div>
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
