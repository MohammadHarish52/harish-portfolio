import Tagline from "../Tagline";
import { GoArrowUp } from "react-icons/go";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col px-2 py-2 sm:px-16 sm:py-2   ">
      <div className="flex flex-col items-center sm:items-start justify-start leading-0 sm:leading-[96px] ">
        <Tagline heading="MOHAMMAD HARISH" subheading="FRONTEND DEVELOPER" />
      </div>
      <div className="flex flex-col lg:flex-row gap-[10px] sm:gap-0 justify-between items-center text-[18px] font-[500] pb-[70px]">
        <div className="contacts flex gap-8 text-[18px] font-[500] ">
          <a
            href="https://www.instagram.com/hd0haha_/"
            className="hidden sm:block"
          >
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/mohammad-harish52/">Linkedin</a>
          <a href="https://github.com/MohammadHarish52">Github</a>
          <a href="https://x.com/Mohamma59305726">Twitter</a>
        </div>
        <div
          className="back_to_top flex justify-center items-center cursor-pointer"
          onClick={scrollToTop}
        >
          <h1>Back To Top</h1>
          <GoArrowUp />
        </div>
        <div className="copyright">
          <h1>Copyright &copy; Mohammad Harish</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
