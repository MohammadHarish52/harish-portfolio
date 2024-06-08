import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Logo = () => {
  useGSAP(() => {
    gsap.from(".circledown", {
      x: -20,
      y: 0,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      borderRadius: 10,
      duration: 1,
      ease: "power1.inOut",
    });
    gsap.from(".circleup", {
      x: -20,
      y: -30,
      borderRadius: 0,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 1,
      ease: "power1.inOut",
    });
    gsap.to(".name", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <div>
      <div className="flex ">
        <div className="">
          <div className="circledown circle flex justify-center items-center"></div>

          <div className="circle circleup flex justify-center items-center"></div>
        </div>
        <div className="Details hidden flex-col items-start sm:flex">
          <h1 className="text-2xl leading-none tracking-[-1.3px]   font-bold">
            Mohammad Harish
          </h1>
          <h2 className="text-2xl font-thin ">Frontend Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Logo;
