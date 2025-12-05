import { useContext } from "react";
import { GoArrowDown } from "react-icons/go";
import { projectsData } from "../data/projects.js";
import { LightContext } from "./LightContext";

const HomeProjects = () => {
  const { light } = useContext(LightContext);
  return (
    <div className="pt-[180px] w-full">
      <div className="font-semibold text-[18px] tracking-[-.5px] flex justify-between py-4">
        <h1 className="">(Selected work)</h1>
        <div className="flex items-center gap-2">
          <h1 className="">Discover</h1>
          <GoArrowDown />
        </div>
      </div>
      {projectsData
        .filter((project) => project.id === 1)
        .map((project) => (
          <div className="flex pb-[70px] flex-col w-full" key={project.id}>
            <div className="image-container -mr-2 sm:-mr-16">
              <img
                src={light ? project.bgDarkImage : project.bgimage}
                alt=""
                className="project-image w-full rounded-3xl border-[0.1px] border-black"
              />
            </div>
            <div className="flex justify-between itmes-center align-left font-[500] text-[18px] tracking-[.5px] py-4">
              <h1 className="">{project.Name}</h1>
              <a
                href={project.LinkGit}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[18px] cursor-pointer relative z-[1] pointer-events-auto"
              >
                Live
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default HomeProjects;
