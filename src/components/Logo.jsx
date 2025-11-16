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
    <div className="flex items-center">
      <img
        src="/assets/logo.png"
        alt="Site logo"
        className="h-16 w-auto sm:h-20 ml-[-4px]"
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

export default Logo;
