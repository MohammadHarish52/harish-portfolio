import { GoArrowDown } from "react-icons/go";
import { projectsArray } from "./Projects/Arrayproject";
import { useContext } from "react";
import { LightContext } from "./LightContext";

const HomeProjects = () => {
  const { light } = useContext(LightContext);
  return (
    <div className="pt-[180px]">
      <div className="font-semibold text-[18px] tracking-[-.5px] flex justify-between py-4">
        <h1 className="">(Selected work)</h1>
        <div className="flex items-center gap-2">
          <h1 className="">Discover</h1>
          <GoArrowDown />
        </div>
      </div>
      {projectsArray.map((project, index) => {
        if (index == 1)
          return (
            <div className="flex pb-[70px] flex-col " key={project.id}>
              <div className="image-container">
                <img
                  src={light ? project.bgDarkImage : project.bgimage}
                  alt=""
                  className="project-image rounded-3xl border-[0.1px] border-black"
                />
              </div>
              <div className="flex justify-between itmes-center align-left font-[500] text-[18px] tracking-[.5px] py-4">
                <h1 className="masked-title">{project.Name}</h1>
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
          );
      })}
    </div>
  );
};

export default HomeProjects;
