import BottomTagline from "./BottomTagline";
import Devline from "./Devline";
import HeadLine from "./HeadLine";
import HomeBelowProjetcs from "./HomeBelowProjects";
import HomeProjects from "./HomeProjects";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <HeadLine />
      <div className="flex flex-col w-full  items-start ">
        <HomeProjects />
        <Devline />
        <HomeBelowProjetcs />
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

export default Home;
