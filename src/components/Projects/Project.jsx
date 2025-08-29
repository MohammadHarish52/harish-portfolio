import { projectsArray } from "./Arrayproject";
import { useContext } from "react";
import { LightContext } from "../../components/LightContext";

const Project = () => {
  const { light } = useContext(LightContext);

  return (
    <div className="w-[100%]">
      {projectsArray.map((project) => (
        <div
          className="flex pb-[70px] flex-col border-t border-[#d6d6d6] pt-[65px]"
          key={project.id}
        >
          <div className="image-container">
            <img
              src={light ? project.bgDarkImage : project.bgimage}
              alt=""
              className="project-image rounded-3xl border-[0.1px] border-black w-full"
            />
            <div className="zoom-circle flex text-white font-[500] justify-center items-center">
              <a href={project.LinkGit}>Live</a>
            </div>
          </div>
          <div className="flex justify-between itmes-center align-left font-[500] text-[18px] tracking-[.5px] py-4">
            <h1>{project.Name}</h1>
            <p className="hidden sm:block">{project.Description}</p>
            <a href={project.code}>View code</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
