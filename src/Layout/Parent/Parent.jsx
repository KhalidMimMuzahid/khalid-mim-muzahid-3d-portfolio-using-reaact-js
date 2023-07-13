import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { UIContext } from "../../contexts/UIProvider/UIProvider";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "./particles/ParticlesBackground";
import ParticlesBackgroundLight from "./particles/ParticlesBackgroundLight";
import { playMusic } from "../../utils/playAudio";
const Parent = () => {
  const { theme, music } = useContext(UIContext);
  const [justCome, setJustCome] = useState(true);
  // let isPlayedWelcomeSound = false;
  let audio = new Audio("/src/assets/audio/sounds/welcome.mp3");
  // const playAudio = () => {
  //   if (audio?.play && !isPlayedWelcomeSound) {
  //     // audio?.play();
  //     // Welcome! I'm       Khaaleed Meem Moozaheed,,an experienced full-stack developer and Leadership Development Manager. It's a pleasure to have you here. Thank you!
  //     isPlayedWelcomeSound = true;
  //     console.log("after");
  //   }
  // };
  // useEffect(() => {
  //   if (!isPlayedWelcomeSound) {
  //     console.log("isPlayedWelcomeSound: ", isPlayedWelcomeSound);
  //     document.addEventListener("click", playAudio);

  //     return () => {
  //       document.removeEventListener("click", playAudio);
  //     };
  //   }
  // }, []);

  return (
    <div className={theme}>
      {/* {!justCome ? ( */}
      <div style={{ display: justCome ? "none" : "block" }}>
        <div className={`relative z-0 `}>
          <Navbar />
          <div className="max-w-[1440px] mx-auto">
            <Outlet />
          </div>
        </div>
        {theme === "dark" && <ParticlesBackground />}
        {theme === "light" && <ParticlesBackgroundLight />}
      </div>
      {/* // ) : ( */}
      <div style={{ display: justCome ? "block" : "none" }}>
        <h1>welcome</h1>
        <button
          onClick={() => {
            setJustCome(false);

            audio?.play();
            music === "on" && playMusic("playDefault");
          }}
        >
          start
        </button>
      </div>
      {/* // )} */}
    </div>
  );
};

export default Parent;
