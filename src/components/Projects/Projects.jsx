import { useRef } from "react";
import BottomTagline from "../BottomTagline.jsx";
import Layout from "../Layout.jsx";
import ProjectCard from "../common/ProjectCard.jsx";
import { projectsData } from "../../data/projects.js";
import Tagline from "../Tagline.jsx";
import useScrollAnimation from "../../hooks/useScrollAnimation.js";

const Projects = () => {
  const h1Ref = useRef(null);

  useScrollAnimation(
    h1Ref,
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1, duration: 5, ease: "bounce.inOut" },
    {
      trigger: h1Ref.current,
      start: "top 30%",
      end: "top 5%",
      scrub: true,
    }
  );

  return (
    <Layout>
      <div className="flex flex-col w-[100%] items-start">
        <div className="pb-[60px] sm:pb-[120px]">
          <div className="flex flex-col items-start justify-start leading-0 sm:leading-[96px] w-full">
            <Tagline heading="Projects Work" subheading="(2023 — Present)" />
          </div>
          <p className="text-[18px] xs:text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-[500] text-left leading-[22px] xs:leading-[24px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] xl:leading-[48px] pb-[15px] sm:pb-[20px] tracking-[-.6px] xs:tracking-[-.7px] sm:tracking-[-.9px] md:tracking-[-1.1px] lg:tracking-[-1.2px] xl:tracking-[-1.3px] vibe-text subheading-text">
            Have a look at some of the projects <br /> I&apos;ve worked on.
            Clients vary from <br />
            lifestyle to tech and design companies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-[100%] pb-[35px] sm:pb-[73px]">
          <h1
            ref={h1Ref}
            className="text-[39px]  sm:text-[71px] md:text-[102px] font-[700] text-left masked-title"
          >
            Projects
          </h1>
          <a
            href="mailto:xharish52@gmail.com"
            aria-label="Email xharish52@gmail.com"
            className="inline-flex items-center justify-center text-[16px] sm:text-[18px] vibe-text font-semibold border-[#fff5e1] border px-5 sm:px-7 py-2 sm:py-3 rounded-full leading-none hover:text-[#000] hover:bg-[#fff5e1] duration-300"
          >
            xharish52@gmail.com
          </a>
        </div>
        {/* UI-UX Projects */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-[100%] pb-[35px] sm:pb-[40px] mt-[40px]">
          <h2 className="text-[32px] sm:text-[56px] font-[700] text-left tracking-[-3px] masked-title">
            UI-UX Projects
          </h2>
        </div>
        <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projectsData.filter(project => project.category === 'uiux').map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Full-Stack Projects */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-[100%] pb-[35px] sm:pb-[40px] mt-[60px]">
          <h2 className="text-[32px] sm:text-[56px] font-[700] text-left tracking-[-3px] masked-title">
            Full-Stack Projects
          </h2>
        </div>
        <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projectsData.filter(project => project.category === 'fullstack').map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-[100%] pb-[35px] sm:pb-[73px] mt-[100px]">
          <h2 className="text-[32px] sm:text-[56px] font-[700] text-left tracking-[-3px] masked-title">
            Freelance Projects
          </h2>
        </div>
        <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projectsData.filter(project => project.category === 'freelance').map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

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
