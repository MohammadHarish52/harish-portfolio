import BottomTagline from "../BottomTagline.jsx";
import Layout from "../Layout.jsx";
import Project from "./Project.jsx";
import Tagline from "../Tagline.jsx";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const h1Ref = useRef(null);

  useEffect(() => {
    if (h1Ref.current) {
      gsap.fromTo(
        h1Ref.current,
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: h1Ref.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            duration: 1,
          },
          ease: "power1.inOut",
        }
      );
    }
  }, []);

  return (
    <Layout>
      <div className="flex flex-col w-[100%] items-start">
        <div className="pb-[60px] sm:pb-[120px]">
          <div className="flex flex-col items-start justify-start leading-0 sm:leading-[96px]">
            <Tagline heading="PROJECTS WORK" subheading="(2023 — PRESENT)" />
          </div>
          <p className="text-[22px] sm:text-[40px] font-[500] text-left sm:leading-[48px] leading-[25px] pb-[40px] sm:tracking-[-1.3px] tracking-[-.8px]">
            Have a look at some of the projects <br /> I've worked on. Clients
            vary from <br />
            lifestyle to tech and design companies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-[100%] pb-[35px] sm:pb-[73px]">
          <h1
            ref={h1Ref}
            className="text-[39px] name opacity-0 sm:text-[71px] md:text-[102px] font-[700] text-left tracking-[-4px]"
          >
            PROJECTS
          </h1>
          <a
            href="mailto:xharish52@gmail.com"
            className="text-[18px] border-[1px] px-[35px] rounded-full hover:text-[#fff5e1] hover:bg-[#000] font-semibold text-left leading-[48px] duration-1000"
          >
            xharish52@gmail.com
          </a>
        </div>
        <Project />
        <BottomTagline
          paraone="Looking to grow your startup through "
          paraoneone="the power of clear code design?"
          paratwo="Reach out to get the conversation "
          paratwotwo="started about your digital design needs."
        />
      </div>
    </Layout>
  );
};

export default Projects;
