import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="px-2 py-2 sm:px-16 sm:py-2 flex flex-row justify-between items-center text-[18px] h-[100px]">
      <Logo />
      <div className="flex flex-row gap-2  font-[500]">
        <Link to="/">Home</Link>
        <Link to="/projects">Project</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
