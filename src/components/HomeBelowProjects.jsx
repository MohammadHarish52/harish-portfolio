import { projectsArray } from "./Projects/Arrayproject";

const HomeBelowProjetcs = () => {
  return (
    <div className="">
      {projectsArray.map((project, index) => {
        if (index == 1 || index == 3)
          return (
            <div className="flex pb-[70px] flex-col " key={project.id}>
              <div className="image-container">
                <img
                  src={project.bgimage}
                  alt=""
                  className="project-image rounded-3xl border-[0.1px] border-black"
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
  );
};

export default HomeBelowProjetcs;
