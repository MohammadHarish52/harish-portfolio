import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Layout from "./Layout";
import Tagline from "./Tagline";
import Skills from "./Skills";
import BottomTagline from "./BottomTagline";
import { videosrc } from "./constants/video";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.to(".name", {
      duration: 1,
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });
    gsap.to(".findme", {
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".findme",
        start: "top 80%", // When the top of the element is 80% from the top of the viewport
        end: "top 20%", // When the top of the element is 20% from the top of the viewport
        scrub: true, // Smooth scrubbing effect
      },
    });
  }, []);

  const handleMouseEnter = (event) => {
    event.target.play();
  };

  const handleMouseLeave = (event) => {
    event.target.pause();
    event.target.currentTime = 0; // Optionally reset to start
  };

  return (
    <Layout>
      <div className="flex flex-col px-2 py-2 sm:px-16 sm:py-2  items-start ">
        <div className="flex flex-col items-start justify-start leading-0 sm:leading-[96px] pb-[70px] sm:pb-[120px]">
          <Tagline heading="IMAGINE" subheading="DESIGN AND CODE" />
          <p className="text-[22px] sm:text-[40px]  font-[500] text-left sm:leading-[48px] leading-[25px] pb-[40px] sm:tracking-[-1.3px] tracking-[-.8px]">
            Discover my approach, process, and
            <br />
            and services in frontend development. <br />
            Also, check out some of my <br />
            favourite anime recommendations
          </p>
        </div>
        <img
          className="hover-image rounded-3xl"
          src="/assets/harish.jpg"
          alt="meheh"
        />
        <Skills />
        <p className="text-[31px] findme opacity-0 sm:text-[40px] font-[500] text-left sm:leading-[48px] leading-[39px] pb-[40px] sm:tracking-[-1.3px] tracking-[-.8px]">
          When I’m not at the computer You <br />
          can find me watching Messi ,binging <br /> one pieace and capturing
          Nature.
        </p>
        <div className="flex flex-wrap flex-col sm:flex-row items-center justify-start gap-4 w-full">
          {videosrc.map((video) => (
            <video
              key={video.id}
              className="w-full sm:w-auto md:w-1/2 lg:w-[24%] mt-10 rounded-xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <source src={video.src} type="video/mp4" />
            </video>
          ))}
        </div>
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
