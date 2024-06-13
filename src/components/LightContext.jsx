// src/LightContext.js
import { createContext, useState } from "react";

export const LightContext = createContext();

export const LightProvider = ({ children }) => {
  const [light, setLight] = useState(false);

  return (
    <LightContext.Provider value={{ light, setLight }}>
      {children}
    </LightContext.Provider>
  );
};
