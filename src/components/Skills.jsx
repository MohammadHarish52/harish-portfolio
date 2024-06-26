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
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useContext } from "react";
import { ScrollTrigger } from "gsap/all";
import Rating from "./Rating";
import { LightContext } from "./LightContext";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    id: 1,
    name: "HTML",
    src: <FaHtml5 className="text-6xl" />,
    stars: 4, // Add the number of stars for each skill
  },
  { id: 2, name: "CSS", src: <FaCss3Alt className="text-6xl" />, stars: 4 },
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
    stars: 3,
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
    stars: 3,
  },
  {
    id: 10,
    name: "NextJs",
    src: <SiNextdotjs className="text-6xl" />,
    stars: 2,
  },
];

const Skills = () => {
  const { light, setLight } = useContext(LightContext);

  const h1Ref = useRef(null);

  useEffect(() => {
    if (h1Ref.current) {
      gsap.fromTo(
        h1Ref.current,
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: h1Ref.current,
            start: "top 80%", // when the top of the h1 hits 80% from the top of the viewport
            end: "top 20%", // end when the top of the h1 hits 20% from the top of the viewport
            scrub: true, // scrubbing makes the animation smooth
            duration: 1,
          },
          ease: "power1.inOut",
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-start w-[100%] ">
      <div className="flex flex-col sm:flex-row justify-between items-center w-[100%] pb-[35px] sm:pb-[73px] ">
        <h1
          ref={h1Ref}
          className="text-[39px] name opacity-0 sm:text-[71px] md:text-[102px] font-[700] text-left tracking-[-4px] "
        >
          SKILLS
        </h1>
        <a
          href="mailto:xharish52@gmail.com"
          className={`text-[18px] ${
            light ? "border-[#fff5e1]" : "border-[#000]"
          } border-[1px] px-[35px] rounded-full ${
            light ? "hover:text-[#000]" : "hover:text-[#fff5e1]"
          } ${light ? "hover:bg-[#fff5e1]" : "hover:bg-[#000]"} 
            font-semibold text-left leading-[48px] duration-1000`}
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
