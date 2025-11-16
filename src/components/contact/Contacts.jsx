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

        <div className="socials"></div>
      </div>
    </Layout>
  );
};

export default Contact;
