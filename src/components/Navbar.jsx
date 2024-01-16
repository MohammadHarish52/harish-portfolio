import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 text-black sticky">
      <div className="text-left pl-4">
        <h1 className="text-2xl font-bold tracking-wide">MOHAMMAD HARISH</h1>
        <p className="text-sm font-thin">Front-end Developer</p>
      </div>
      <div
        className={`hidden md:flex space-x-4 ${
          isMenuOpen ? "hidden" : "block"
        }`}
      >
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link to="/projects" className="hover:text-gray-300">
          Projects
        </Link>
        <Link to="/skills" className="hover:text-gray-300">
          Skills
        </Link>
        <Link to="/contacts" className="hover:text-gray-300">
          Contacts
        </Link>
      </div>

      {/* Menu Icon for Small Screens */}
      <div className="md:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* Responsive Menu */}
        {isMenuOpen && (
          <div className="mt-2 bg-gray-800 p-2">
            <Link
              to="/"
              className="block text-white mb-2 hover:text-gray-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white mb-2 hover:text-gray-300"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="block text-white mb-2 hover:text-gray-300"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className="block text-white mb-2 hover:text-gray-300"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              to="/contacts"
              className="block text-white hover:text-gray-300"
              onClick={toggleMenu}
            >
              Contacts
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
