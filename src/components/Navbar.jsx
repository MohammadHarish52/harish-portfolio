import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="px-16 py-2 flex flex-row justify-between items-center text-[18px] h-[100px]">
      <Logo />
      <div className="flex flex-row gap-2 ">
        <h1>Projects</h1>
        <h1>About</h1>
        <h1>Contacts</h1>
      </div>
    </div>
  );
};

export default Navbar;
