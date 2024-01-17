import { useState, useEffect } from "react";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";

import { projectsArray } from "./Arrayproject";
import Project from "/src/components/Projects/Project.jsx";

const ProjectSlider = () => {
  const [currentProject, setCurrentProject] = useState(0);
  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      setCurrentProject((prevProject) =>
        prevProject === projectsArray.length - 1 ? 0 : prevProject + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevProject = () => {
    setCurrentProject((prevProject) =>
      prevProject === 0 ? projectsArray.length - 1 : prevProject - 1
    );
  };

  const handleNextProject = () => {
    setCurrentProject((prevProject) =>
      prevProject === projectsArray.length - 1 ? 0 : prevProject + 1
    );
  };

  const handleHover = () => {
    clearInterval(interval);
  };

  const handleLeave = () => {
    // Restart the interval when leaving hover
    interval = setInterval(() => {
      setCurrentProject((prevProject) =>
        prevProject === projectsArray.length - 1 ? 0 : prevProject + 1
      );
    }, 10000);
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl"
        onClick={handlePrevProject}
      >
        <FaCaretLeft className="text-8xl" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl"
        onClick={handleNextProject}
      >
        <FaCaretRight className="text-8xl" />
      </button>
      <div className="w-full h-full">
        <Project project={projectsArray[currentProject]} />
      </div>
    </div>
  );
};

export default ProjectSlider;
