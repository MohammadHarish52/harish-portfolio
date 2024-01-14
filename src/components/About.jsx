import { useEffect, useState } from "react";
import Layout from "./Layout";
import "/src/index.css";

const About = () => {
  const [color, setColor] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setColor((e) => !e);
    }, 2000);
  }, []);
  return (
    <Layout>
      <section className="py-16 bg-gray-100 box-border">
        <div
          className="container  flex flex-col md:flex-row items-start md:items-center justify-around
        mx-8"
        >
          <div className="md:w-1/2 mb-8 md:mb-0 description text-left p-8 md:p-16 box-border">
            {/* Apply box-sizing to prevent overflow */}
            <h1 className="text-4xl font-bold mb-2">Mohammad Harish</h1>
            <h2 className="text-2xl mb-2">Frontend Developer</h2>
            <p className="text-gray-700 text-lg mb-4">
              Hello, I'm Harish—a web developer passionate about crafting
              websites. Currently, I'm delving into React and transitioning to
              TypeScript. A tech enthusiast at heart, I love learning daily. On
              a lighter note, I'm a devoted One Piece fan and intrigued by the
              wonders of GenAi. 🚀
            </p>
            <button className="bg-black text-white py-2 px-4  hover:bg-white hover:text-black  transition duration-300">
              Resume
            </button>
            {/* Add more sections or details as needed */}
          </div>
          <div className="md:w-1/2 image">
            {/* Replace the following line with your image component */}
            <img
              className={`w-full h-auto md:w-3/4 rounded-lg shadow-lg ${
                color ? "colorful" : "bw"
              }`}
              src="public/assets/IMG_20230504_140121.jpg"
              alt="Profile"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
