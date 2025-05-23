import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext } from "react";
import { LightContext } from "./LightContext";
import Tagline from "./Tagline";
import { FaExternalLinkAlt } from "react-icons/fa";

const HeadLine = () => {
  const { light } = useContext(LightContext);

  useGSAP(() => {
    gsap.to(".name", {
      duration: 1,
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col items-start justify-start leading-0 sm:leading-[96px]">
        <Tagline heading="MOHAMMAD HARISH" subheading="FULLSTACK DEVELOPER" />
        <p className="text-[22px] sm:text-[40px] font-[500] text-left sm:leading-[48px] leading-[25px] pb-[20px] sm:tracking-[-1.3px] tracking-[-.8px]">
          As a full-Stack developer,
          <br />
          I create innovative digital solutions
          <br />
          that help businesses around the world grow.
        </p>

        <p className="text-[18px] sm:text-[20px] font-[500] text-left leading-[28px] mb-[40px] flex items-center gap-2">
          Founder{" "}
          <a
            href="https://www.infinitestudiox.art/"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-bold hover:underline ${
              light ? "text-[#fff5e1]" : "text-[#000]"
            } flex items-center gap-1`}
          >
            InfiniteStudioX <FaExternalLinkAlt className="text-xs" />
          </a>
        </p>

        <a
          href="mailto:xharish52@gmail.com"
          className={`text-[18px]
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
