import { useContext } from "react";
import { Link } from "react-router-dom";
import { LightContext } from "./LightContext";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose }) => {
  const { light } = useContext(LightContext);

  if (!isOpen) return null;

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/projects", text: "Projects" },
    { to: "/about", text: "About" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 ${
        light ? "bg-[#000]/75" : "bg-[#fff]/75"
      } backdrop-blur-sm transition-all duration-500`}
    >
      <div className="h-full flex flex-col p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-thin tracking-[4px]">MENU</h1>
          <button
            onClick={onClose}
            className="text-3xl p-2"
            aria-label="Close menu"
          >
            <IoClose />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col justify-center">
          {navLinks.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              onClick={onClose}
              className={`text-[42px] sm:text-[56px] font-[600] py-4 tracking-[-4px] ${
                light
                  ? "hover:text-[#E6C2BF] hover:translate-x-4"
                  : "hover:text-gray-500 hover:translate-x-4"
              } transition-all duration-300`}
            >
              {text}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="py-6">
          <p className="text-lg font-medium opacity-75">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
