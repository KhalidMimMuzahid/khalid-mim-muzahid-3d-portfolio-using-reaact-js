import React, { useContext, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { UIContext } from "../../contexts/UIProvider/UIProvider";
import Navbar from "../../components/Navbar";
import { StarsCanvas } from "../../components/canvas";
const Parent = () => {
  const { theme } = useContext(UIContext);
  let isPlayedWelcomeSound = false;
  let audio = new Audio("welcome.mp3");
  const playAudio = () => {
    if (audio?.play && !isPlayedWelcomeSound) {
      audio?.play();

      isPlayedWelcomeSound = true;
      console.log("after");
    }
  };
  useEffect(() => {
    if (!isPlayedWelcomeSound) {
      console.log("isPlayedWelcomeSound: ", isPlayedWelcomeSound);
      document.addEventListener("click", playAudio);

      return () => {
        document.removeEventListener("click", playAudio);
      };
    }
  }, []);

  return (
    <div className={`${theme === "dark" && "dark"} relative z-0 bg-primary`}>
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <Outlet />
      </div>
      {/* <StarsCanvas /> */}
    </div>
  );
};

export default Parent;
