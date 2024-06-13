// CustomCursor.js

import { useContext, useEffect, useState } from "react";
import { LightContext } from "./LightContext";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { light, setLight } = useContext(LightContext);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={` ${
        light ? "custom-cursor-dark" : "custom-cursor"
      } hidden lg:block`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default CustomCursor;
