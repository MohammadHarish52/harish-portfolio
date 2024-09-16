import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { LightContext } from "./LightContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const { light, setLight } = useContext(LightContext);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/projects", text: "Projects" },
    { to: "/about", text: "About" },
  ];

  return (
    <nav className="px-2 py-2 sm:px-16 sm:py-2 flex flex-row justify-between items-center text-[18px] h-[100px]">
      <Logo />
      <div className="flex flex-row gap-8 font-[500]">
        <button
          onClick={() => setLight(!light)}
          className="flex justify-center items-center shadow-sm p-2 rounded-lg"
          aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
        >
          {light ? (
            <MdLightMode className="cursor-pointer text-[18px]" />
          ) : (
            <MdDarkMode className="cursor-pointer text-[18px]" />
          )}
        </button>
        {navLinks.map(({ to, text }) => (
          <Link key={to} to={to}>
            <span
              className={` ${
                light ? "hover:text-[#E6C2BF]" : "hover:text-gray-500"
              }`}
            >
              {text}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
