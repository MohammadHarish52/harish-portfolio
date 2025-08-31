// src/LightContext.js
import { createContext, useState } from "react";

export const LightContext = createContext();

export const LightProvider = ({ children }) => {
  // Lock dark mode: expose static dark values
  const light = true; // keep body classes in App consistent
  const setLight = () => {};

  return (
    <LightContext.Provider value={{ light, setLight }}>
      {children}
    </LightContext.Provider>
  );
};
