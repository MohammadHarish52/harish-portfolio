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
        <div className="flex flex-col items-start justify-start leading-0 sm:leading-[96px] pb-[70px] sm:pb-[120px]">
          <Tagline heading="IMAGINE" subheading="DESIGN AND CODE" />
          <p className="text-[22px] sm:text-[40px]  font-[500] text-left sm:leading-[48px] leading-[25px] pb-[40px] sm:tracking-[-1.3px] tracking-[-.8px]">
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
