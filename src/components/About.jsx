// About.js

import "/src/index.css"; // Import your Tailwind CSS file

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      {/* Container for Description */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">Mohammad Harish</h2>
        <p className="text-lg">
          Add your description here. You can talk about your background, skills,
          and anything else you want to highlight.
        </p>
      </div>

      {/* Container for Image */}
      <div className="md:w-1/2 p-4">
        <img
          className="mx-auto md:mx-0 max-w-full md:max-w-xs h-auto rounded-full"
          src="/src/assets/IMG_20230504_140121.jpg"
          alt="Your Name"
        />
      </div>
    </div>
  );
};

export default About;
