// Skills.js

import "/src/index.css"; // Import your Tailwind CSS file

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import Layout from "./Layout";

const skillsData = [
  {
    name: "HTML",
    src: <FaHtml5 className="text-6xl" />,
    stars: 4, // Add the number of stars for each skill
  },
  {
    name: "CSS",
    src: <FaCss3Alt className="text-6xl" />,
    stars: 4,
  },
  {
    name: "JavaScript",
    src: <SiJavascript className="text-6xl" />,
    stars: 4,
  },
  {
    name: "React",
    src: <FaReact className="text-6xl" />,
    stars: 4,
  },
  {
    name: "Node.js",
    src: <FaNode className="text-6xl" />,
    stars: 3,
  },
  {
    name: "Tailwind CSS",
    src: <SiTailwindcss className="text-6xl" />,
    stars: 3,
  },
  {
    name: "TypeScript",
    src: <SiTypescript className="text-6xl" />,
    stars: 3,
  },
];

const Skills = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-16 min-h-screen bg-white">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="p-6 border rounded-md shadow-md hover:bg-slate-400 transition-transform duration-300 ease-in-out transform hover:scale-105"
            style={{
              backgroundColor: "white",
            }}
          >
            <div className="mb-4 text-[#232222]">{skill.src}</div>
            <h1 className="text-2xl font-thin mb-2 text-[#232222]">
              {skill.name}
            </h1>
            <div className="stars-model">
              {[...Array(skill.stars)].map((star, i) => (
                <span key={i} className="text-[#232222] text-2xl">
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Skills;
