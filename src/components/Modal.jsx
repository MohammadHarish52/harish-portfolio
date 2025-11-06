import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LightContext } from "./LightContext";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose }) => {
  const { light } = useContext(LightContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 1000); // Match the duration with CSS transition
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        isOpen ? "opacity-100" : "opacity-0"
      } ${light ? "bg-[#000]/75" : "bg-[#fff]/75"} backdrop-blur-sm`}
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
          {[
            { to: "/", text: "Home" },
            { to: "/projects", text: "Projects" },
            { to: "/about", text: "About" },
          ].map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              onClick={onClose}
              className={`text-[42px] sm:text-[56px] font-[600] py-4 tracking-[-4px] masked-title`}
            >
              {text}
            </Link>
          ))}
          <a
            href="https://calendly.com/xharish52/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center text-[18px] vibe-text font-semibold bg-[#fff5e1] text-[#000] px-6 py-3 rounded-full leading-none hover:bg-transparent hover:text-[#fff5e1] hover:border-[#fff5e1] border border-[#fff5e1] duration-300 mt-8 w-fit`}
          >
            Book a Call
          </a>
        </nav>

        {/* Footer */}
        <div className="py-6">
          <p className="text-lg font-medium opacity-75">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
