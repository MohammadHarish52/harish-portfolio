import React from "react";
import { projectsArray } from "./Arrayproject";

const Dummy = () => {
  return (
    <div className="my-[64px]">
      <h2 className="font-thin mt-[24px] tracking-[5px]">MY PROJECTS</h2>
      <div className="project_look flex justify-around items-center">
        <span className="md:w-[300px] w-[150px] border-b-[#232222] border-b-[3px] "></span>
        <h1 className="text-[#232322] text-[2.25rem] md:text-[3rem]  font-bold">
          Have a Look at My Work
        </h1>
        <span className="md:w-[300px] w-[150px] border-b-[#232322] border-b-[3px] "></span>
      </div>
      <div className="pr flex items-center justify-center gap-10 flex-wrap bg-white mt-[100px]">
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
                <a target="_blank" href="https://hypedrop.netlify.app">
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
