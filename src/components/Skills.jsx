// Skills.js

import "/src/index.css"; // Import your Tailwind CSS file

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { useRef } from "react";
import Rating from "./Rating";
import useScrollAnimation from "../hooks/useScrollAnimation.js";
// import { LightContext } from "./LightContext";

const skillsData = [
  {
    id: 1,
    name: "HTML",
    src: <FaHtml5 className="text-6xl" />,
    stars: 5, // Add the number of stars for each skill
  },
  { id: 2, name: "CSS", src: <FaCss3Alt className="text-6xl" />, stars: 5 },
  {
    id: 3,
    name: "JavaScript",
    src: <SiJavascript className="text-6xl" />,
    stars: 4,
  },
  {
    id: 4,
    name: "React",
    src: <FaReact className="text-6xl" />,
    stars: 4,
  },
  { id: 5, name: "Node.js", src: <FaNode className="text-6xl" />, stars: 3 },
  {
    id: 6,
    name: "Tailwind CSS",
    src: <SiTailwindcss className="text-6xl" />,
    stars: 5,
  },
  {
    id: 7,
    name: "TypeScript",
    src: <SiTypescript className="text-6xl" />,
    stars: 3,
  },
  {
    id: 8,
    name: "GraphQL",
    src: <SiGraphql className="text-6xl" />,
    stars: 2,
  },
  {
    id: 9,
    name: "MongoDB",
    src: <SiMongodb className="text-6xl" />,
    stars: 4,
  },
  {
    id: 10,
    name: "NextJs",
    src: <SiNextdotjs className="text-6xl" />,
    stars: 4,
  },
];

const Skills = () => {
  // const { light } = useContext(LightContext);

  const h1Ref = useRef(null);

  useScrollAnimation(
    h1Ref,
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1, duration: 2, ease: "power1.inOut" },
    {
      trigger: h1Ref.current,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      duration: 1,
    }
  );

  return (
    <div className="flex flex-col items-start w-[100%] ">
      <div className="flex flex-col sm:flex-row justify-between items-center w-[100%] pb-[35px] sm:pb-[73px] ">
        <h1
          ref={h1Ref}
          className="text-[32px] sm:text-[56px] font-[700] text-left tracking-[-3px] masked-title"
        >
          SKILLS
        </h1>
        <a
          href="mailto:xharish52@gmail.com"
          aria-label="Email xharish52@gmail.com"
          className={`inline-flex items-center justify-center text-[16px] sm:text-[18px] vibe-text font-semibold border-[#fff5e1] border px-5 sm:px-7 py-2 sm:py-3 rounded-full leading-none hover:text-[#000] hover:bg-[#fff5e1] duration-300`}
        >
          xharish52@gmail.com
        </a>
      </div>
      {skillsData.map((skill) => (
        <div
          className="flex justify-between sm:justify-between  items-start  py-[65px]  border-t border-[#d6d6d6]  gap-0  sm:gap-[100px] w-[100%] h-auto "
          key={skill.name}
        >
          <div className="text-left hidden sm:block">
            <h1 className="text-[18px] font-[500] tracking[.-5px] ">
              (00{skill.id})
            </h1>
          </div>
          <div className="text-left">
            <h1 className="font-500 text-[31px] grow sm:text-[35px] tracking-[-1.3px]">
              {skill.src}
            </h1>
          </div>
          <div className="text-left">
            <h1>
              <Rating rating={skill.stars} />
            </h1>
          </div>
          <div className="hidden sm:block"></div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
