import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Layout from "../Layout";
import Footer from "./Footer";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-me mx-auto">
        <h1 className="text-left text-4xl mb-8">Contact Me</h1>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/mohammad-harish52/"
            className="text-gray-500 flex items-center mb-2 social-link"
          >
            <FaLinkedin className="mr-2 text-black text-8xl social-icon" />
            Linkedin
          </a>
          <a
            href="https://twitter.com/Mohamma59305726"
            className="text-gray-500 flex items-center mb-2 social-link"
          >
            <FaTwitter className="mr-2 text-black text-8xl social-icon" />
            Twitter
          </a>
          <a
            href="https://github.com/MohammadHarish52"
            className="text-gray-500 flex items-center mb-2 social-link"
          >
            <FaGithub className="mr-2 text-black text-8xl social-icon" />
            Github
          </a>
          <a
            href="https://www.instagram.com/hd0haha_/"
            className="text-gray-500 flex items-center social-link"
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
