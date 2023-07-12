import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const UIContext = createContext();

const UIProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [sound, setSound] = useState("on");
  const [music, setMusic] = useState("on");
  useEffect(() => {
    const newTheme = localStorage.getItem("theme");
    if (newTheme) {
      setTheme(newTheme);
    }
  }, []);
  useEffect(() => {
    const newSound = localStorage.getItem("sound");
    if (newSound) {
      setSound(newSound);
    }
  }, []);
  useEffect(() => {
    const newMusic = localStorage.getItem("music");
    if (newMusic) {
      setMusic(newMusic);
    }
  }, []);

  const info = { theme, setTheme, sound, setSound, music, setMusic };
  return <UIContext.Provider value={info}>{children}</UIContext.Provider>;
};

export default UIProvider;
