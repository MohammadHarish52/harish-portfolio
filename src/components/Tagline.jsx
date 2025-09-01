import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Tagline = (props) => {
  useGSAP(() => {
    gsap.to(".name", {
      duration: 1,
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <div className="">
      <h1
        className="text-[39px] name opacity-0 sm:text-[71px] md:text-[102px] font-[700] text-left tracking-[-2px] sm:tracking-[-4px] leading-[.9em] masked-title"
        style={{ transform: "translateY(-100px)" }}
      >
        {props.heading}
      </h1>
      <h1
        className="text-[39px] name opacity-0 sm:text-[71px] md:text-[102px] font-[700] mt-0 sm:mt[-48px] text-left pb-[30px] tracking-[-2px] sm:tracking-[-4px] leading-[.9em] masked-title"
        style={{ transform: "translateY(-100px)" }}
      >
        {props.subheading}
      </h1>
    </div>
  );
};

export default Tagline;
