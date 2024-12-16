import { freelanceArray } from "./ArrayFreelance";
import { useContext } from "react";
import { LightContext } from "../../components/LightContext";

const FreelanceProject = () => {
  const { light } = useContext(LightContext);

  return (
    <div className="w-[100%]">
      {freelanceArray.map((project) => (
        <div
          className="flex justify-between items-center py-[65px] border-t border-[#d6d6d6] gap-6 w-[100%] h-auto"
          key={project.id}
        >
          <div className="text-left min-w-[150px] sm:min-w-[200px]">
            <h1 className="font-500 text-[24px] sm:text-[28px] tracking-[-1.3px]">
              {project.Name}
            </h1>
          </div>
          <div className="w-[250px] sm:w-[300px] hidden sm:block">
            <img
              src={light ? project.bgDarkImage : project.bgimage}
              alt={project.Name}
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-4 min-w-[100px]">
            <a
              href={project.LinkGit}
              className="text-[18px] font-[500] hover:underline"
            >
              Live Demo
            </a>
            <a
              href={project.code}
              className="text-[18px] font-[500] hover:underline"
            >
              View Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FreelanceProject;
