import { useState } from "react";
import { projectsArray } from "./Arrayproject";

const ProjectSlider = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMouseEnter = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  return (
    <div className="project bg-[#fffefe] p-4">
      <h2 className="font-thin mt-[24px] tracking-widest">MY PROJECTS</h2>
      <h1 className="text-[#232322] text-[2.25rem] md:text-[3rem] mt-[24px] font-bold">
        Showcasing My Creative Journey
      </h1>
      <div className="myProject grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-[24px] ">
        {projectsArray.map((project) => (
          <div
            className="card bg-[#dbdbdb] p-4 rounded-md shadow-xl relative "
            key={project.id}
            onMouseEnter={() => handleMouseEnter(project)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={project.imageSrc}
                alt={project.Name}
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-2">{project.Name}</h3>
                <p className="text-gray-700 mb-4">{project.Description}</p>
                <div className="flex flex-wrap">
                  {project.Technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#232322] rounded-md px-2 py-1 text-sm font-Thin text-[#fffefe] mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={project.LinkGit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 rounded-md px-2 py-1 text-sm font-Thin text-[#fffefe] mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-110"
                  >
                    Live
                  </a>
                  <button
                    className="bg-blue-500 rounded-md px-2 py-1 text-sm font-Thin text-[#fffefe] mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-110"
                    onClick={() => handleMouseEnter(project)}
                  >
                    Show Details
                  </button>
                </div>
              </div>
            </div>
            {showModal && selectedProject === project && (
              <div className="absolute top-0 left-0 w-full h-full bg-gray-900  bg-opacity-50 flex justify-center items-center">
                <div className="bg-blur text-[#eeefee]  rounded-lg p-4 h-[100%] text-left flex flex-col justify-center items-start">
                  <h2 className="text-2xl font-semibold mb-2">
                    {project.Name}
                  </h2>
                  <p className="text-gray-700 mb-4">{project.Description}</p>
                  <div className="flex justify-center">
                    <a
                      href={project.LinkGit}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 rounded-md px-2 py-1 text-sm font-Thin text-[#fffefe] mr-2 mb-2"
                    >
                      Live
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 rounded-md px-2 py-1 text-sm font-Thin text-[#fffefe] mr-2 mb-2"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
