// import { useContext } from "react";
// import { UIContext } from "../contexts/UIProvider/UIProvider";
import aboutMe from "./../assets/audio/_about me .mp3";
import contactMe from "./../assets/audio/_contact me .mp3";
import messageSent from "./../assets/audio/_message sent succes.mp3";
import musicOff from "./../assets/audio/_music off .mp3";
import musicOn from "./../assets/audio/_music on .mp3";
import soundOff from "./../assets/audio/_sound off  (1).mp3";
import soundOn from "./../assets/audio/_sound on  (1).mp3";

import myWork from "./../assets/audio/_my work .mp3";
import welcome from "./../assets/audio/_sound on  (1).mp3";
import darkThemeActivated from "./../assets/audio/dark theme activated.mp3";
import darkThemeDeactivated from "./../assets/audio/dark theme deactivat.mp3";
import resumeDownloaded from "./../assets/audio/resume downloaded.mp3";

const audios = {
  aboutMe,
  contactMe,
  messageSent,
  musicOff,
  musicOn,
  soundOff,
  soundOn,
  myWork,
  welcome,
  darkThemeActivated,
  darkThemeDeactivated,
  resumeDownloaded,
};
let audio;
// .pause()
// audio?.play();
// const { sound, music } = useContext(UIContext);
const playSound = (audioName) => {
  console.log("audio?.pause:", audio?.pause, "\n audio?.play: ", audio?.play);
  //   if (sound === "on") {

  if (audio?.pause) {
    audio?.pause();
  }
  audio = new Audio(audios[audioName]);
  if (audio?.play) {
    audio?.play();
  }
  //   } else {
  // ------------
  //   }
};
export default playSound;
