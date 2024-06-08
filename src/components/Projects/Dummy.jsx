import { projectsArray } from "./Arrayproject";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Dummy = () => {
  useGSAP(() => {
    gsap.from(".line ", {
      duration: 3,
      x: -400,
      repeat: -1,
      ease: "power1.inOut",
      yoyo: true,
    });
  }, []);
  return (
    <div className=" ">
      <h2 className="font-bold mt-[24px]  text-[2.25rem] tracking-[-1.3px] text-left px-16">
        MY PROJECTS
      </h2>
      <div className="project_look flex justify-between px-16 items-center">
        <h1 className="text-[#232322] text-left   text-[2.25rem] tracking-[-1.3px]   font-thin">
          Have a Look at My Work
        </h1>
        <span className=" w-[450px] line bg-black  border-black border-[2px] "></span>
      </div>
      <div className="pr flex items-center justify-center gap-10 flex-wrap bg-white py-0 sm:py-4">
        {projectsArray.map((project) => (
          <div
            key={project.id}
            className="relative z-20 group p-[10px] rounded-lg shadow-lg hover:shadow-2xl z-1 bg-[#fffefe]"
          >
            <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
              <img
                src={project.bgimage}
                alt=""
                className="top-0 left-0 absolute z-10 hover:opacity-0 opacity-1 transition-all duration-1000 "
              />
              <img
                src={project.imageSrc}
                alt=""
                className="top-0 left-0 absolute z-9 hover:z-10  opacity-1 transition-all duration-[1.2s]"
              />
            </div>
            <div className="pt-[10px] rounded-b-lg">
              <div className="text-[10px] text-[#9a9a9b] text-left">
                {project.Description}
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <div className="text-1xl font-medium text-[#232222]">
                  {project.Name}
                </div>
                <a target="_blank" href={project.LinkGit}>
                  <div className="cursor-pointer hover:text-[#fffefe] text-[#fffefe] duration-200 flex flex-row items-center gap-2 bg-[#232222] group-hover:bg-[#1e97dd] text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                    <div>Link</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dummy;
