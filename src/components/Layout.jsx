import Navbar from "./Navbar";
import Footer from "./contact/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <div className="container m-auto relative ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
