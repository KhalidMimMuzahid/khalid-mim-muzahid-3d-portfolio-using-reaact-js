import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const UIContext = createContext();

const UIProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [sound, setSound] = useState("on");
  const [music, setMusic] = useState("on");

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    // console.log("screen size: ", screenSize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
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

  const info = {
    theme,
    setTheme,
    sound,
    setSound,
    music,
    setMusic,
    screenWidth,
  };
  return <UIContext.Provider value={info}>{children}</UIContext.Provider>;
};

export default UIProvider;
