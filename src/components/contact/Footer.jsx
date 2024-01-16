import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-700 mt-16 mx-16">
      <div className="containerfooter mx-auto flex justify-around">
        <div className="individuals text-left">
          <h1 className="text-2xl font-light mb-4">Contact Information</h1>
          <p className="text-gray-500 mb-2">
            Feel free to reach me through my email
            <br />
            and phone number
          </p>
          <h2 className="text-gray-500">
            {" "}
            <FaMailBulk />
            Email: xharish52@gmail.com
          </h2>
          <h2 className="text-gray-500">
            <FaPhone />
            Phone: +91 6386148537
          </h2>
        </div>
        <div className="individuals">
          <h1 className="text-2xl font-light mb-4">Portfolio Menu</h1>
          <ul className="flex flex-col text-left text-gray-500">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Expertise</Link>
            <Link to="/about">About me</Link>
            <Link to="/contacts">Contact</Link>
          </ul>
        </div>
        <div className="individuals">
          <h1 className="text-2xl font-light mb-4">Catch Me Up On</h1>
          <a
            href="https://www.linkedin.com/in/mohammad-harish52/"
            className="text-gray-500 flex items-center mb-2"
          >
            <FaLinkedin className="mr-2 text-gray-700" /> Linkedin
          </a>
          <a
            href="https://twitter.com/Mohamma59305726"
            className="text-gray-500 flex items-center mb-2"
          >
            <FaTwitter className="mr-2  text-gray-700" /> Twitter
          </a>
          <a
            href="https://github.com/MohammadHarish52"
            className="text-gray-500 flex items-center mb-2"
          >
            <FaGithub className="mr-2 text-gray-700" /> Github
          </a>
          <a
            href="https://www.instagram.com/hd0haha_/"
            className="text-gray-500 flex items-center"
          >
            <FaInstagramSquare className="mr-2 text-gray-700" /> Instagram
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 mb-8 py-8">
        <p className="text-gray-400">
          Copyright &copy; 2024{" "}
          <b className="text-gray-500 font-light"> | Mohammad Harish | </b>
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
