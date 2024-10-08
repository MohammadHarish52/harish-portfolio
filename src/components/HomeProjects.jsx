import { GoArrowDown } from "react-icons/go";
import { projectsArray } from "./Projects/Arrayproject";
import { useContext } from "react";
import { LightContext } from "./LightContext";

const HomeProjects = () => {
  const { light } = useContext(LightContext);
  return (
    <div className="pt-[180px]">
      <div className="font-semibold text-[18px] tracking-[-.5px] flex justify-between py-4">
        <h1>(Selected work)</h1>
        <div className="flex items-center gap-2">
          <h1>Discover</h1>
          <GoArrowDown />
        </div>
      </div>
      {projectsArray.map((project, index) => {
        if (index == 2)
          return (
            <div className="flex pb-[70px] flex-col " key={project.id}>
              <div className="image-container">
                <img
                  src={light ? project.bgDarkImage : project.bgimage}
                  alt=""
                  className="project-image rounded-3xl border-[0.1px] border-black"
                />
                <div className="zoom-circle flex text-white font-[500]  justify-center items-center">
                  <a href={project.LinkGit}>Live</a>
                </div>
              </div>
              <div className="flex justify-between itmes-center align-left font-[500] text-[18px] tracking-[.5px] py-4">
                <h1>{project.Name}</h1>
                <p className="hidden sm:block">{project.Description}</p>
                <a href={project.code}>View code</a>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default HomeProjects;
