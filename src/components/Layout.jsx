import Navbar from "./Navbar";
import Footer from "./contact/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className=" px-2 py-2 sm:px-16 sm:py-2 relative z-10 ">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
