import React, { useState } from "react";
import { playMusic } from "../../../utils/playAudio";
import Lottie from "lottie-react";
import hiFi from "../../../assets/lottie/hi-fi.json";
import welcome from "../../../assets/lottie/welcome.json";

const FirstWelcomePage = ({ setJustCome, music }) => {
  let audio = new Audio("/src/assets/audio/sounds/welcome.mp3");

  const [lottieName, setLottieName] = useState("welcome");
  const welcomeLottie = (
    <Lottie
      style={{ height: "100vh" }}
      animationData={welcome}
      loop={false}
      onComplete={() => {
        setLottieName("hi-fi");
      }}
    />
  );
  const hiFiveLottie = (
    <div
      className="h-screen hover:cursor-grab"
      onClick={() => {
        setJustCome(false);
        // audio?.play();

        // music === "on" && playMusic("playDefault");
      }}
    >
      <Lottie style={{ height: "85%" }} animationData={hiFi} loop={true} />
      <h1 className="text-center relative top-[25px] text-xl text-[#000000b7]">
        Click anywhere to start !
      </h1>
    </div>
  );

  return (
    <div className="">
      {lottieName === "welcome" ? welcomeLottie : hiFiveLottie}
    </div>
  );
};

export default FirstWelcomePage;
