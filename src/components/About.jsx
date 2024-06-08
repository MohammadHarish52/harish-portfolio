import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Layout from "./Layout";
import Tagline from "./Tagline";

const About = () => {
  useGSAP(() => {
    gsap.to(".name", {
      duration: 1,
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <Layout>
      <div className="flex flex-col px-2 py-2 sm:px-16 sm:py-2  items-start ">
        <div className="flex flex-col items-start justify-start leading-0 sm:leading-[96px] ">
          <Tagline heading="IMAGINE" subheading="DESIGN AND CODE" />
          <p className="text-[22px] sm:text-[40px]  font-[500] text-left leading-[48px] pb-[40px] tracking-[-1.3px]">
            Discover my approach, process, and
            <br />
            and services in frontend development. <br />
            Also, check out some of my <br />
            favourite anime recommendations
          </p>

          <a
            href="mailto:xharish52@gmail.com"
            className="text-[18px]absolute
            font-semibold text-left leading-[48px] border-black border-[1px] px-[35px] rounded-md hover:text-white hover:bg-black duration-1000"
          >
            xharish52@gmail.com
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default About;
