import React, { useContext, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { UIContext } from "../../contexts/UIProvider/UIProvider";
import Navbar from "../../components/Navbar";
const Parent = () => {
  const { theme } = useContext(UIContext);
  let isPlayedWelcomeSound = false;
  let audio = new Audio("welcome.mp3");
  const playAudio = () => {
    if (audio?.play && !isPlayedWelcomeSound) {
      // audio?.play();
      // Welcome! I'm       Khaaleed Meem Moozaheed,,an experienced full-stack developer and Leadership Development Manager. It's a pleasure to have you here. Thank you!
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
    <div className={theme}>
      <div className={`relative z-0 `}>
        <Navbar />
        <div className="max-w-[1440px] mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Parent;
