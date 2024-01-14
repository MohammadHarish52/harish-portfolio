// Skills.js

import "/src/index.css"; // Import your Tailwind CSS file

import htmlImage from "/public/assets/html.png";
import cssImage from "/public/assets/css.png";
import javascriptImage from "/public/assets/javascript.png";
import reactImage from "/public/assets/react.png";
import nodeImage from "/public/assets/node.png";
import tailwindImage from "/public/assets/tailwind.png";
import typescriptImage from "/public/assets/ts.png";
import Layout from "./Layout";

const skillsData = [
  {
    name: "HTML",
    src: htmlImage,
  },
  {
    name: "CSS",
    src: cssImage,
  },
  {
    name: "JavaScript",
    src: javascriptImage,
  },
  {
    name: "React",
    src: reactImage,
  },
  {
    name: "Node.js",
    src: nodeImage,
  },
  {
    name: "Tailwind CSS",
    src: tailwindImage,
  },
  {
    name: "TypeScript",
    src: typescriptImage,
  },
];

const Skills = () => {
  return (
    <Layout>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-16 min-h-screen"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="p-6 border rounded-md shadow-md"
            style={{
              backgroundColor: "var(--color-background)",
              color: "var(--color-primary)",
            }}
          >
            <img
              className="mx-auto w-16 h-16 mb-4"
              src={skill.src}
              alt={skill.name}
            />
            <p className="text-lg font-semibold mb-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Skills;
