import { useEffect, useState } from "react";
import Layout from "./Layout";

const About = () => {
  const [color, setColor] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor((prevColor) => !prevColor);
    }, 2000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Layout>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-around">
          <div className="md:w-1/2 mb-8 md:mb-0 description text-left p-8 md:p-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              MOHAMMAD HARISH
            </h1>
            <h2 className="text-xl md:text-2xl mb-2">Frontend Developer</h2>
            <p className="text-gray-700 text-lg mb-4">
              Hello, I'm Harish—a web developer passionate about crafting
              websites. Currently, I'm delving into React and transitioning to
              TypeScript. A tech enthusiast at heart, I love learning daily. On
              a lighter note, I'm a devoted One Piece fan and intrigued by the
              wonders of GenAi. 🚀
            </p>
            <button className="bg-black text-white py-2 px-4 hover:bg-white hover:text-black transition duration-300">
              Resume
            </button>
          </div>
          <div className="md:w-1/2 image">
            <img
              className={`w-full h-auto md:w-full rounded-lg shadow-lg ${
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
