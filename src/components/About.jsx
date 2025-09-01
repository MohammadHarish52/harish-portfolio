import gsap from "gsap";
import Layout from "./Layout";
import Tagline from "./Tagline";
import Skills from "./Skills";
import BottomTagline from "./BottomTagline";
import Education from "./Education";
import { useEffect } from "react";
import Idoltime from "./Idoltime";
import Experince from "./Experience";

const About = () => {
  useEffect(() => {
    gsap.to(".name", {
      duration: 1,
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });
  }, []);

  return (
    <Layout>
      <div className="flex flex-col   items-start ">
        <div className="flex flex-col items-start justify-start leading-0 sm:leading-[96px] pb-[70px] sm:pb-[120px] w-full">
          <Tagline heading="Imagine" subheading="Design and Code" />
          <p className="text-[18px] xs:text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-[500] text-left leading-[22px] xs:leading-[24px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] xl:leading-[48px] pb-[40px] tracking-[-.6px] xs:tracking-[-.7px] sm:tracking-[-.9px] md:tracking-[-1.1px] lg:tracking-[-1.2px] xl:tracking-[-1.3px] vibe-text subheading-text">
            Discover my approach, process, and
            <br />
            services in frontend development. <br />
            Also, check out some of my <br />
            favourite anime recommendations
          </p>
        </div>
        <img
          className="hover-image rounded-3xl "
          src="/assets/harish.jpg"
          alt="meheh"
        />
        <Experince />
        <Skills />
        <Education />
        <Idoltime />

        <BottomTagline
          paraone="Looking to grow your startup through
           "
          paraoneone=" the power of clear code  design?"
          paratwo="Reach out to get the conversation
           "
          paratwotwo="started about your digital design needs."
        />
      </div>
    </Layout>
  );
};

export default About;
