import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      content: "Home",
    },
    {
      id: 2,
      path: "/about",
      content: "About",
    },
    {
      id: 3,
      path: "/projects",
      content: "Projects",
    },
    {
      id: 4,
      path: "/skills",
      content: "Skills",
    },
    {
      id: 5,
      path: "/contacts",
      content: "Contact",
    },
  ];
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`flex justify-between items-center p-4 mx-16 relative ${
        isMenuOpen ? "bg-blur" : ""
      }`}
    >
      <div className="text-left mx-16">
        <h1 className="text-2xl font-bold tracking-wide">MOHAMMAD HARISH</h1>
        <p className="text-sm font-thin">Front-end Developer</p>
      </div>
      <div className="">
        <button className="text-black focus:outline-none" onClick={toggleMenu}>
          <GiHamburgerMenu className="text-4xl" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-full bg-opacity-80 bg-black p-4">
          <div className="flex justify-end">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col space-y-4 text-white z-10">
            {links.map((e) => (
              <Link
                key={e.id}
                to={e.path}
                className="text-xl hover:text-gray-300"
                onClick={toggleMenu}
              >
                {e.content}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
