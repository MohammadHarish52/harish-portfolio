import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Logo = () => {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -20,
      y: 10,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div>
      <div className="flex">
        <div className="circle flex justify-center items-center"></div>
        <div className="Details flex flex-col items-start">
          <h1 className="text-2xl leading-none font-bold">Harish</h1>
          <h2 className="text-[12px] font-light tracking-wide">
            Frontend Developer
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Logo;
