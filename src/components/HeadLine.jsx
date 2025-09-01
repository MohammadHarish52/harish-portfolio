import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Tagline from "./Tagline";
import { FaExternalLinkAlt } from "react-icons/fa";
import RightSideMorph from "./RightSideMorph";

const HeadLine = () => {
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
      <div className="flex flex-col items-start justify-start leading-0 sm:leading-[96px] w-full">
        <div className="w-full flex items-start justify-between">
          <Tagline
            heading="Mohammad Harish"
            subheading="Full Stack Developer"
          />
          <RightSideMorph />
        </div>
        <p className="text-[18px] xs:text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-[500] text-left leading-[22px] xs:leading-[24px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] xl:leading-[48px] pb-[15px] sm:pb-[20px] tracking-[-.6px] xs:tracking-[-.7px] sm:tracking-[-.9px] md:tracking-[-1.1px] lg:tracking-[-1.2px] xl:tracking-[-1.3px] vibe-text subheading-text">
          As a full-Stack developer,
          <br />
          I create innovative digital solutions
          <br />
          that help businesses around the world grow.
        </p>

        <p className="text-[14px] xs:text-[15px] sm:text-[16px] font-[500] text-left leading-[20px] xs:leading-[22px] sm:leading-[24px] mt-[10px] sm:mt-[16px] mb-[28px] flex items-center gap-2 vibe-text tracking-[0.02em]">
          Founder{" "}
          <a
            href="https://www.infinitestudiox.art/"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-semibold underline underline-offset-4 decoration-1 text-[#e9e9e9] flex items-center gap-1`}
          >
            InfiniteStudioX{" "}
            <FaExternalLinkAlt className="text-[10px] sm:text-[12px]" />
          </a>
        </p>

        <a
          id="contact"
          href="mailto:xharish52@gmail.com"
          aria-label="Email xharish52@gmail.com"
          className={`inline-flex masked-title items-center justify-center text-[16px] sm:text-[18px] vibe-text font-semibold border-[#fff5e1] border px-5 sm:px-7 py-2 sm:py-3 rounded-full leading-none hover:text-[#000] hover:bg-[#fff5e1] duration-300`}
        >
          xharish52@gmail.com
        </a>
      </div>
    </div>
  );
};

export default HeadLine;
