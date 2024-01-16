import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Layout from "../Layout";
import Footer from "./Footer";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-me mx-16 mt-16">
        <h1 className="text-left text-4xl md:text-8xl font-thin mb-8 border-b-2 pb-2 border-black">
          Contact Me
        </h1>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/mohammad-harish52/"
            className="text-gray-700 flex items-center mb-2 social-link text-4xl text-center"
          >
            <FaLinkedin className="mr-2 text-black text-8xl social-icon" />
            <h1 className="flex justify-center align-middle">
              Linked
              <FaLinkedin className="text-black" />
            </h1>
          </a>
          <a
            href="https://twitter.com/Mohamma59305726"
            className="text-gray-700 flex items-center mb-2 social-link text-4xl text-center"
          >
            <FaXTwitter className="mr-2 text-black text-8xl social-icon" />
            Twitter
          </a>
          <a
            href="https://github.com/MohammadHarish52"
            className="text-gray-700 flex items-center mb-2 social-link text-4xl text-center"
          >
            <FaGithub className="mr-2 text-black text-8xl social-icon" />
            Github
          </a>
          <a
            href="https://www.instagram.com/hd0haha_/"
            className="text-gray-700 flex items-center social-link text-4xl  text-center"
          >
            <FaInstagramSquare className="mr-2 text-black text-8xl social-icon" />
            Instagram
          </a>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Contact;
