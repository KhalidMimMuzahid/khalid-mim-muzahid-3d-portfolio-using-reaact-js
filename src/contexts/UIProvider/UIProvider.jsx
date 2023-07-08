import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const UIContext = createContext();

const UIProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const newTheme = localStorage.getItem("theme");
    if (newTheme) {
      setTheme(newTheme);
    }
  }, []);

  const info = { theme, setTheme };
  return <UIContext.Provider value={info}>{children}</UIContext.Provider>;
};

export default UIProvider;
