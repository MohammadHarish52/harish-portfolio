import { useContext } from "react";
import PropTypes from "prop-types";
import { LightContext } from "../LightContext";

const ProjectCard = ({ project }) => {
  const { light } = useContext(LightContext);

  return (
    <div className="flex flex-col">
      <a href={project.LinkGit} className="image-container block">
        <img
          src={light ? project.bgDarkImage || project.bgimage : project.bgimage}
          alt={project.Name}
          className="project-image rounded-3xl border-[0.1px] border-black w-full"
        />
      </a>
      <div className="flex justify-between items-center font-[300] text-[18px] tracking-[.5px] py-4">
        <a href={project.LinkGit} className="flex flex-col text-left">
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
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    bgimage: PropTypes.string.isRequired,
    bgDarkImage: PropTypes.string,
    LinkGit: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
