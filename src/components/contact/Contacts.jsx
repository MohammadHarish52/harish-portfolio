import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Layout from "../Layout";
import Tagline from "../Tagline";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-me px-2 py-2 sm:px-16 sm:py-2 ">
        <div className="flex flex-col items-start justify-start leading-0 sm:leading-[96px] ">
          <Tagline heading="CONNECT" subheading="SHARE AND GROW" />
        </div>

        <div className="socials">
          <a
            href="https://calendly.com/xharish52/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 flex items-center mb-2 social-link text-4xl text-center"
          >
            <div className="mr-2 text-black text-8xl social-icon flex items-center justify-center">
              📅
            </div>
            Book a Call
          </a>
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
            href="https://x.com/Harish_521"
            className="text-gray-700 flex items-center mb-2 social-link text-4xl text-center"
          >
            <FaXTwitter className="mr-2 text-black text-8xl social-icon" />
            Twitter
          </a>
          <a
            href="https://github.com/MohammadHarish521"
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
    </Layout>
  );
};

export default Contact;
