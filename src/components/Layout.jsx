import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container m-auto relative ">{children}</div>
    </div>
  );
};

export default Layout;
