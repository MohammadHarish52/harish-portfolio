import Layout from "./Layout";
import HeadLine from "./HeadLine";
import BottomTagline from "./BottomTagline";

const Home = () => {
  return (
    <Layout>
      <HeadLine />
      <div className="flex flex-col px-2 py-2 sm:px-16 sm:py-2  items-start ">
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
