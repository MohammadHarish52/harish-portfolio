import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { LightContext } from "./LightContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const { light, setLight } = useContext(LightContext);

  return (
    <div className="px-2 py-2 sm:px-16 sm:py-2 flex flex-row justify-between items-center text-[18px] h-[100px]">
      <Logo />
      <div className="flex flex-row gap-8  font-[500]">
        <span className="flex justify-center items-center shadow-sm p-2 rounded-lg">
          {light ? (
            <>
              <MdLightMode
                onClick={() => setLight(!light)}
                className="cursor-pointer text-[18px]"
              />
            </>
          ) : (
            <>
              {" "}
              <MdDarkMode
                onClick={() => setLight(!light)}
                className="cursor-pointer text-[18px]"
              />
            </>
          )}
        </span>
        <Link to="/">Home</Link>
        <Link to="/projects">Project</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
