import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Logo = () => {
  useGSAP(() => {
    gsap.from(".circledown", {
      x: -20,
      y: 10,
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
  }, []);
  return (
    <div>
      <div className="flex">
        <div>
          <div className="circledown circle flex justify-center items-center"></div>

          <div className="circle circleup flex justify-center items-center"></div>
        </div>
        <div className="Details flex flex-col items-start">
          <h1 className="text-2xl leading-none tracking-wider font-bold">
            Mohammad Harish
          </h1>
          <h2 className="text-2xl font-thin ">Frontend Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Logo;
