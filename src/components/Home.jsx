import { useEffect, useState } from "react";
import Layout from "./Layout";
import CalltoAction from "./Calltoaction/CalltoAction";
import Footer from "./contact/Footer";
import Dummy from "./Projects/Dummy";
import Skills from "./Skills";
import HeadLine from "./HeadLine";

const Home = () => {
  const [color, setColor] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setColor((e) => !e);
    }, 2000);
  }, []);

  return (
    <Layout>
      <HeadLine />
      <Dummy />
      <Skills />
      <CalltoAction />
      <Footer />
    </Layout>
  );
};

export default Home;
