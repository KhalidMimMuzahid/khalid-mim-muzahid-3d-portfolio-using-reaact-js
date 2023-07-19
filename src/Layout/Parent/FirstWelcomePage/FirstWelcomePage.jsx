import React, { useRef, useState } from "react";
import { playMusic, playSound } from "../../../utils/playAudio";
import Lottie from "lottie-react";
import hiFi from "../../../assets/lottie/hi-fi.json";
import welcome from "../../../assets/lottie/welcome.json";

const FirstWelcomePage = ({ setJustCome, music, sound }) => {
  const lottieRef = useRef();
  lottieRef?.current?.setSpeed(2);
  const [lottieName, setLottieName] = useState("welcome");

  const welcomeLottie = (
    <Lottie
      lottieRef={lottieRef}
      style={{ height: "100vh" }}
      animationData={welcome}
      loop={false}
      speed={8}
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
        sound === "on" && playSound("welcomeDefault");

        music === "on" && playMusic("playDefault");
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
