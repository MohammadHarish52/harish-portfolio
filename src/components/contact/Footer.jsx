import { GoArrowUp } from "react-icons/go";
import Tagline from "../Tagline";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col px-2 py-2 sm:px-16 sm:py-2   ">
      <div className="flex flex-col items-center sm:items-start justify-start leading-0 sm:leading-[96px] ">
        <Tagline heading="Mohammad Harish" subheading="Full Stack Developer" />
      </div>
      <div className="flex flex-col lg:flex-row gap-[10px] sm:gap-0 justify-between items-center text-[18px] font-[500] pb-[70px]">
        <div className="contacts flex gap-8 text-[18px] font-light ">
          <a href="https://calendly.com/xharish52/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
          <a href="https://x.com/Harish_521">Twitter</a>
          <a href="https://www.linkedin.com/in/mdharish84/">Linkedin</a>
          <a href="https://github.com/MohammadHarish521">Github</a>
          <a href="https://topmate.io/mohd_harish10" className="hidden sm:inline">Topmate</a>
        </div>
        <div
          className="back_to_top flex justify-center items-center cursor-pointer font-light"
          onClick={scrollToTop}
        >
          <h1>Back To Top</h1>
          <GoArrowUp />
        </div>
        <div className="copyright">
          <h1 className="font-light">Copyright &copy; Mohammad Harish</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
