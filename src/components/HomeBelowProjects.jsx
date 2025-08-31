import { useContext } from "react";
import { projectsArray } from "./Projects/Arrayproject";
import { LightContext } from "./LightContext";

const HomeBelowProjetcs = () => {
  const { light } = useContext(LightContext);
  return (
    <div className="">
      {projectsArray.map((project, index) => {
        if (index == 0 || index == 2)
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
                  className="text-[18px] cursor-pointer"
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
