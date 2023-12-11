import React, { useEffect, useRef, useState } from "react";
import { playMusic, playSound } from "../../../utils/playAudio";
import Lottie from "lottie-react";
import hiFi from "../../../assets/lottie/hi-fi.json";
import welcome from "../../../assets/lottie/welcome.json";

const FirstWelcomePage = ({ setJustCome, music, sound }) => {
  const lottieRef = useRef();
  const [lottieName, setLottieName] = useState("welcome");
  useEffect(() => {
    if (lottieRef?.current) {
      lottieRef.current.setSpeed(4);
    }
  }, []);
  const welcomeLottie = (
    <Lottie
      lottieRef={lottieRef}
      style={{ height: "100vh" }}
      animationData={welcome}
      loop={false}
      playSpeed={6}
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
      <h1 className="text-center relative font-bold top-[0px] md:top-[25px] text-2xl text-[#000000b7]">
        {/* Click anywhere to start ! */}
        Click anywhere to <span className="bg-[#3f9dbc] hover:bg-[#e3b131] px-2 py-1 rounded-xl">start</span>
      </h1>
    </div>
  );

  return (
    <div className="bg-white">
      {lottieName === "welcome" ? welcomeLottie : hiFiveLottie}
    </div>
  );
};

export default FirstWelcomePage;
