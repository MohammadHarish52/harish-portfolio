import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Modal from "./Modal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/projects", text: "Projects" },
    { to: "/about", text: "About" },
  ];

  return (
    <nav className="px-2 py-2 sm:px-16 sm:py-2 flex flex-row justify-between items-center text-[18px] h-[100px]">
      <a
        href="/"
        className="transition-transform duration-200 hover:scale-[1.05]"
      >
        <Logo />
      </a>
      {/* Mobile Menu */}
      <div className="flex items-center gap-4 sm:hidden">
        <a
          href="https://calendly.com/xharish52/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-[14px] font-semibold border-[#fff5e1] border px-4 py-2 rounded-full leading-none hover:text-[#000] hover:bg-[#fff5e1] duration-300"
        >
          Book a Call
        </a>
        <button
          onClick={() => setIsModalOpen(true)}
          className="p-2"
          aria-label="Open menu"
        >
          <RxHamburgerMenu className="text-[24px]" />
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex flex-row gap-8 items-center">
        {navLinks.map(({ to, text }) => (
          <Link key={to} to={to}>
            <span className="vibe-text hover:text-[#E6C2BF]">{text}</span>
          </Link>
        ))}
        <a
          href="https://calendly.com/xharish52/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-[16px] vibe-text font-semibold border-[#fff5e1] border px-5 py-2 rounded-full leading-none hover:text-[#000] hover:bg-[#fff5e1] duration-300"
        >
          Book a Call
        </a>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
