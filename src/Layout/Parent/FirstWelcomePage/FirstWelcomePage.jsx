import React, { useState } from "react";
import { playMusic } from "../../../utils/playAudio";
import Lottie from "lottie-react";
import hiFi from "../../../assets/lottie/hi-fi.json";
import welcome from "../../../assets/lottie/welcome.json";

const FirstWelcomePage = ({ setJustCome, music }) => {
  let audio = new Audio("/src/assets/audio/sounds/welcome.mp3");
  console.log("cxxxxxxxxxxxxxxxxxxxx: ", music);

  const play = () => {
    console.log("gusti chudi");
    if (music === "on") {
      music === "on" && playMusic("playDefault");
    }
  };
  const [activeLottie, setActiveLottie] = useState(
    <Lottie
      style={{ height: "100vh" }}
      animationData={welcome}
      loop={false}
      onComplete={() => {
        setActiveLottie(
          <div
            className="h-screen hover:cursor-grab"
            onClick={() => {
              setJustCome(false);

              audio?.play();
              music === "on" && play();
            }}
          >
            <Lottie
              style={{ height: "85%" }}
              animationData={hiFi}
              loop={true}
            />
            <h1 className="text-center relative top-[25px] text-xl text-[#000000b7]">
              Click anywhere to start !
            </h1>
          </div>
        );
      }}
    />
  );
  return <div className="">{activeLottie}</div>;
};

export default FirstWelcomePage;
