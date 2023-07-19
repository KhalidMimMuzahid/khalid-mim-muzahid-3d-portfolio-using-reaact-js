import aboutMe from "./../assets/audio/sounds/_about me .mp3";
import contactMe from "./../assets/audio/sounds/_contact me .mp3";
import messageSent from "./../assets/audio/sounds/Message sent success.mp3";
import somethingWrong from "./../assets/audio/sounds/something went wrong.mp3";
import musicOff from "./../assets/audio/sounds/_music off .mp3";
import musicOn from "./../assets/audio/sounds/_music on .mp3";
import soundOff from "./../assets/audio/sounds/_sound off  (1).mp3";
import soundOn from "./../assets/audio/sounds/_sound on  (1).mp3";
import myWork from "./../assets/audio/sounds/_my work .mp3";
import welcome from "./../assets/audio/sounds/_welcome .mp3";
import darkThemeActivated from "./../assets/audio/sounds/dark theme activated.mp3";
import darkThemeDeactivated from "./../assets/audio/sounds/dark theme deactivat.mp3";
import resumeDownloaded from "./../assets/audio/sounds/resume downloaded.mp3";

import dropTheTapes from "./../assets/audio/bgm/Drop the Tapes - TrackTribe.mp3";
import goGOGO from "./../assets/audio/bgm/Go Go Go - Kwon.mp3";
import gullyDreams from "./../assets/audio/bgm/Gully Dreams - Hanu Dixit.mp3";
import modernTime from "./../assets/audio/bgm//Modern Time - An Jone.mp3";
import ragHams from "./../assets/audio/bgm/Raag Hamsadhwani - Sandeep Das, Mayank Raina, Bivakar Chaudhuri.mp3";
import ragaLegacy from "./../assets/audio/bgm/Raga Legacy - Hanu Dixit.mp3";
import streetsOfPunjab from "./../assets/audio/bgm/Streets Of Punjab - Hanu Dixit.mp3";
import theMumbaiBeat from "./../assets/audio/bgm/The Mumbai Beat - Hanu Dixit.mp3";
import youShould from "./../assets/audio/bgm/You Should - Patrick Patrikios.mp3";

const audios = {
  aboutMe,
  contactMe,
  messageSent,
  somethingWrong,
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
const musics = [
  {
    musicNo: 1,
    music: goGOGO,
  },
  {
    musicNo: 2,
    music: dropTheTapes,
  },
  {
    musicNo: 3,
    music: youShould,
  },
  {
    musicNo: 4,
    music: gullyDreams,
  },
  {
    musicNo: 5,
    music: modernTime,
  },
  {
    musicNo: 6,
    music: ragHams,
  },
  {
    musicNo: 7,

    music: ragaLegacy,
  },
  {
    musicNo: 8,
    music: streetsOfPunjab,
  },
  {
    musicNo: 9,
    music: theMumbaiBeat,
  },
];
let audio;

let musicNo = Number(localStorage.getItem("musicNo")) || 1;
// console.log("musicNo: ", musicNo);
let musicObj = musics.find((each) => musicNo === each.musicNo);
// console.log("musicObj: ", musicObj);
let music;
let isPlaying = false;
music = new Audio(musicObj?.music);
music.loop = true; // Set loop property to true
music.volume = 0.1; // Set the volume (between 0.0 and 1.0)
const playSound = (audioName) => {
  if (audio?.pause) {
    audio?.pause();
  }
  audio = new Audio(audios[audioName]);
  audio.volume = 0.6; // Set the volume (between 0.0 and 1.0)
  if (audio?.play) {
    audio?.play();
  }
};
const playMusic = (actionType) => {
  if (actionType === "playDefault") {
    // console.log("musicNo: ", musicNo);
    // const musicObjTmp = musics.find((each) => musicNo === each.musicNo);

    // console.log("music?.play): ", music?.play);
    if (music?.play && !isPlaying) {
      music.currentTime = 0;
      music?.play();

      isPlaying = true;
    }
  } else if (actionType === "play") {
    // console.log("musicNo: ", musicNo);
    // console.log("music?.pause: ", music?.pause);
    if (music?.pause && isPlaying) {
      music?.pause();
      isPlaying = false;
      // music = null;
    }
    music = null;
    musicNo = musicNo === musics?.length ? 1 : musicNo + 1;
    localStorage.setItem("musicNo", musicNo);
    const musicObjTmp = musics.find((each) => musicNo === each?.musicNo);
    music = new Audio(musicObjTmp?.music);
    // console.log("musicNo:", musicNo);
    // console.log("musicObjTmp: ", musicObjTmp);
    music.loop = true; // Set loop property to true
    music.volume = 0.1; // Set the volume (between 0.0 and 1.0)
    if (music?.play && !isPlaying) {
      music.currentTime = 0;
      music?.play();
      isPlaying = true;
      // console.log(musicObjTmp?.music);
    }
    // console.log("musicNo after: ", musicNo);
  } else if (actionType === "pause") {
    // console.log("xxxxxxxxxxxxxxxxxxxx");
    // console.log("music?.pause: ", music?.pause);
    if (music?.pause && isPlaying) {
      music?.pause();
      isPlaying = false;
      music = null;
    }
  }
};
export { playSound, playMusic };
