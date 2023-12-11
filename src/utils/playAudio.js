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
import welcomeDefault from "./../assets/audio/sounds/welcome.mp3";
import darkThemeActivated from "./../assets/audio/sounds/dark theme activated.mp3";
import darkThemeDeactivated from "./../assets/audio/sounds/dark theme deactivat.mp3";
import downloadingResume from "./../assets/audio/sounds/downloading resume.mp3";
import closingProject from "./../assets/audio/sounds/closing project deta.mp3";
import openingProject from "./../assets/audio/sounds/opening project deta.mp3";
import myBlogs from "./../assets/audio/sounds/my blogs.mp3";
import allProjects from "./../assets/audio/sounds/all projects.mp3";


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
  welcomeDefault,
  darkThemeActivated,
  darkThemeDeactivated,
  downloadingResume,
  closingProject,
  openingProject,
  myBlogs,
  allProjects,
};

let audio;
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

// automatically music changing system off
// {
//   let musicNo = Number(localStorage.getItem("musicNo")) || 1;
//   // console.log("musicNo: ", musicNo);
//   let musicObj = musics.find((each) => musicNo === each.musicNo);
//   // console.log("musicObj: ", musicObj);
//   let music;
//   let isPlaying = false;
//   music = new Audio(musicObj?.music);
//   music.loop = true; // Set loop property to true
//   music.volume = 0.1; // Set the volume (between 0.0 and 1.0)

//   const playMusic = (actionType) => {
//     if (actionType === "playDefault") {
//       // console.log("musicNo: ", musicNo);
//       // const musicObjTmp = musics.find((each) => musicNo === each.musicNo);

//       // console.log("music?.play): ", music?.play);
//       if (music?.play && !isPlaying) {
//         music.currentTime = 0;
//         music?.play();

//         isPlaying = true;
//       }
//     } else if (actionType === "play") {
//       // console.log("musicNo: ", musicNo);
//       // console.log("music?.pause: ", music?.pause);
//       if (music?.pause && isPlaying) {
//         music?.pause();
//         isPlaying = false;
//         // music = null;
//       }
//       music = null;
//       musicNo = musicNo === musics?.length ? 1 : musicNo + 1;
//       localStorage.setItem("musicNo", musicNo);
//       const musicObjTmp = musics.find((each) => musicNo === each?.musicNo);
//       music = new Audio(musicObjTmp?.music);
//       // console.log("musicNo:", musicNo);
//       // console.log("musicObjTmp: ", musicObjTmp);
//       music.loop = true; // Set loop property to true
//       music.volume = 0.1; // Set the volume (between 0.0 and 1.0)
//       if (music?.play && !isPlaying) {
//         music.currentTime = 0;
//         music?.play();
//         isPlaying = true;
//         // console.log(musicObjTmp?.music);
//       }
//       // console.log("musicNo after: ", musicNo);
//     } else if (actionType === "pause") {
//       // console.log("xxxxxxxxxxxxxxxxxxxx");
//       // console.log("music?.pause: ", music?.pause);
//       if (music?.pause && isPlaying) {
//         music?.pause();
//         isPlaying = false;
//         music = null;
//       }
//     }
//   };
// }

let music;
let isPlaying = false;
music = new Audio(youShould);
music.loop = true; // Set loop property to true
music.volume = 0.1; // Set the volume -> (between 0.0 and 1.0)

const playMusic = (actionType) => {
  if (actionType === "playDefault") {
    if (music?.play && !isPlaying) {
      music.currentTime = 0;
      music?.play();

      isPlaying = true;
    }
  } else if (actionType === "play") {
    if (music?.play && !isPlaying) {
      music.currentTime = 0;
      music?.play();
      isPlaying = true;
    }
  } else if (actionType === "pause") {
    if (music?.pause && isPlaying) {
      music?.pause();
      isPlaying = false;
    }
  }
};

//
export { playSound, playMusic };
