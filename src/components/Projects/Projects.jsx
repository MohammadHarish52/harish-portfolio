import BottomTagline from "../BottomTagline.jsx";
import Layout from "../Layout.jsx";
import Tagline from "../Tagline.jsx";
import Project from "./Project.jsx";

const Projects = () => {
  return (
    <Layout>
      <div className="flex flex-col px-2 py-2 sm:px-16 sm:py-2  items-start ">
        <div className="pb-[60px] sm:pb-[120px]">
          <div className="flex flex-col items-start justify-start leading-0 sm:leading-[96px] ">
            <Tagline heading="PROJECTS WORK" subheading="(2023 — PRESENT)" />
          </div>
          <p className="text-[22px] sm:text-[40px]  font-[500] text-left sm:leading-[48px] leading-[25px] pb-[40px] sm:tracking-[-1.3px] tracking-[-.8px]">
            Have a look at some of the projects <br /> I’ve worked on. Clients
            vary from <br />
            lifestyle to tech and design companies.
          </p>
        </div>

        <Project />
        <BottomTagline
          paraone="Looking to grow your startup through
           "
          paraoneone=" the power of clear code  design?"
          paratwo="Reach out to get the conversation
           "
          paratwotwo="started about your digital design needs."
        />
      </div>
    </Layout>
  );
};

export default Projects;
