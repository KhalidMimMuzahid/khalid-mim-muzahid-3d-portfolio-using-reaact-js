import React from "react";

const FirstWelcomePage = ({ setJustCome }) => {
  let audio = new Audio("/src/assets/audio/sounds/welcome.mp3");
  return (
    <div>
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
  );
};

export default FirstWelcomePage;
