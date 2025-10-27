import { useContext } from "react";
import { LightContext } from "./LightContext";
import { projectsArray } from "./Projects/Arrayproject";

const HomeBelowProjetcs = () => {
  const { light } = useContext(LightContext);
  return (
    <div className="w-full">
      {projectsArray.map((project, index) => {
        if (index == 0 || index == 2)
          return (
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
          );
      })}
    </div>
  );
};

export default HomeBelowProjetcs;
