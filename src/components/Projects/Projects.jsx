import Layout from "../Layout.jsx";
import Tagline from "../Tagline.jsx";
import { projectsArray } from "./Arrayproject.js";

const Projects = () => {
  return (
    <Layout>
      <div className="flex flex-col px-2 py-2 sm:px-16 sm:py-2  items-start ">
        <div className="pb-[60px] sm:pb-[120px]">
          <div className="flex flex-col items-center sm:items-start justify-start leading-0 sm:leading-[96px] ">
            <Tagline heading="PROJECTS WORK" subheading="(2023 — PRESENT)" />
          </div>
          <p className="text-[22px] sm:text-[40px]  font-[500] text-left leading-[48px] pb-[40px] tracking-[-1.3px]">
            Have a look at some of the projects <br /> I’ve worked on. Clients
            vary from <br />
            lifestyle to tech and design companies.
          </p>
        </div>

        {projectsArray.map((project) => {
          return (
            <div className="flex pb-[70px] flex-col " key={project.id}>
              <div className="image-container">
                <img
                  src={project.bgimage}
                  alt=""
                  className="project-image rounded-3xl border-[1px] border-black"
                />
                <div className="zoom-circle flex text-white font-[500] text-[18px] justify-center items-center">
                  <a href={project.code}>View Code</a>
                </div>
              </div>
              <div className="flex justify-between itmes-center align-left font-[500] text-[18px] tracking-[.5px] py-4">
                <h1>{project.Name}</h1>
                <p className="hidden sm:block">{project.Description}</p>
                <a href={project.LinkGit}>Live</a>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Projects;
