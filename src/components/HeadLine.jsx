import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Tagline from "./Tagline";
import { useContext } from "react";
import { LightContext } from "./LightContext";

const HeadLine = () => {
  const { light, setLight } = useContext(LightContext);

  useGSAP(() => {
    gsap.to(".name", {
      duration: 1,
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <div className="flex flex-col   items-start ">
      <div className="flex flex-col items-start justify-start leading-0 sm:leading-[96px] ">
        <Tagline heading="MOHAMMAD HARISH" subheading="FRONTEND DEVELOPER" />
        <p className="text-[22px] sm:text-[40px]  font-[500] text-left sm:leading-[48px] leading-[25px] pb-[40px] sm:tracking-[-1.3px] tracking-[-.8px]">
          As a front-end developer,
          <br /> I create dynamic and responsive web interfaces <br />
          that help businesses around the world grow.
        </p>

        <a
          href="mailto:xharish52@gmail.com"
          className={`text-[18px]absolute
            font-semibold text-left leading-[48px] ${
              light ? "border-[#fff5e1]" : "border-[#000]"
            } border-[1px] px-[35px] rounded-full ${
            light ? "hover:text-[#000]" : "hover:text-[#fff5e1]"
          } ${light ? "hover:bg-[#fff5e1]" : "hover:bg-[#000]"} duration-1000`}
        >
          xharish52@gmail.com
        </a>
      </div>
    </div>
  );
};

export default HeadLine;
