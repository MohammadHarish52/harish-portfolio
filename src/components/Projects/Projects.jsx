import { projectsArray } from "./Arrayproject";
import ProjectSlider from "./ProjectSlider";
import Project from "/src/components/Projects/Project.jsx";

const Projects = () => {
  return (
    <div className="container mx-auto p-8">
      <ProjectSlider />
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      {projectsArray.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
