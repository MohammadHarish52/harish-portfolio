// Navbar.js

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>
        <h1 className="text-2xl font-bold">Mohammad Harish</h1>
        <p className="text-sm">Front-end Developer</p>
      </div>
      <div className="flex space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/projects" className="hover:underline">
          Projects
        </Link>
        <Link to="/skills" className="hover:underline">
          Skills
        </Link>
        <Link to="/contacts" className="hover:underline">
          Contacts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
