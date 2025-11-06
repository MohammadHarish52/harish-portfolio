import RotatingText from "./RotatingText";
import { FaExternalLinkAlt } from "react-icons/fa";

const HeadLine = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col items-start justify-start leading-0 sm:leading-[96px] w-full">
        <h1
          className="text-[39px] name rotating-text-fade-in sm:text-[71px] md:text-[102px] font-[700] text-left tracking-[-2px] sm:tracking-[-4px] leading-[.9em] masked-title"
          style={{ 
            opacity: 0,
            transform: "translateY(-100px)"
          }}
        >
          Mohammad Harish
        </h1>
        <RotatingText
          texts={["Full Stack Developer", "Content Creator"]}
          className="text-[39px] name sm:text-[71px] md:text-[102px] font-[700] mt-0 sm:mt[-48px] text-left pb-[30px] tracking-[-2px] sm:tracking-[-4px] leading-[.9em] masked-title"
        />
        <p className="text-[18px] xs:text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-[500] text-left leading-[22px] xs:leading-[24px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] xl:leading-[48px] pb-[8px] sm:pb-[10px] tracking-[-.6px] xs:tracking-[-.7px] sm:tracking-[-.9px] md:tracking-[-1.1px] lg:tracking-[-1.2px] xl:tracking-[-1.3px] vibe-text subheading-text">
          I build innovative digital solutions and teach
          <br />
          others to amplify their digital presence
          <br />
          through code, design, and content.
        </p>

        <a
          href="https://www.infinitestudiox.art/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mb-[20px] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-[400] text-[#fff5e1]/60 hover:text-[#fff5e1] transition-colors duration-300"
        >
          Founder @ InfiniteStudioX
          <FaExternalLinkAlt className="text-[10px] sm:text-[11px] md:text-[12px]" />
        </a>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <a
            id="contact"
            href="mailto:xharish52@gmail.com"
            aria-label="Email xharish52@gmail.com"
            className={`inline-flex masked-title items-center justify-center text-[16px] sm:text-[18px] vibe-text font-semibold border-[#fff5e1] border px-5 sm:px-7 py-2 sm:py-3 rounded-full leading-none hover:text-[#000] hover:bg-[#fff5e1] duration-300`}
          >
            xharish52@gmail.com
          </a>
          <a
            href="https://calendly.com/xharish52/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex masked-title items-center justify-center text-[16px] sm:text-[18px] vibe-text font-semibold bg-[#fff5e1] text-[#000] px-5 sm:px-7 py-2 sm:py-3 rounded-full leading-none hover:bg-transparent hover:text-[#fff5e1] hover:border-[#fff5e1] border border-[#fff5e1] duration-300`}
          >
            Book a Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeadLine;

