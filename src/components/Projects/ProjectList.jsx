import { useContext } from "react";
import { LightContext } from "../LightContext";

const ProjectList = ({ items }) => {
  const { light } = useContext(LightContext);

  if (!items || items.length === 0) {
    return (
      <div className="w-full py-10">
        <p className="vibe-text text-[16px] sm:text-[18px]">Coming soon.</p>
      </div>
    );
  }

  return (
    <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 gap-8">
      {items.map((project) => (
        <div className="flex flex-col" key={project.id}>
          <a href={project.LinkGit} className="image-container block">
            <img
              src={
                light ? project.bgDarkImage || project.bgimage : project.bgimage
              }
              alt={project.Name}
              className="project-image rounded-3xl border-[0.1px] border-black w-full"
            />
          </a>
          <div className="flex justify-between items-center font-[300] text-[18px] tracking-[.5px] py-4">
            <a href={project.LinkGit} className="flex flex-col text-left ">
              <h1 className="">{project.Name}</h1>
            </a>
            <a
              href={project.LinkGit}
              target="_blank"
              rel="noreferrer noopener"
              className="relative z-[1] pointer-events-auto"
            >
              Live
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
