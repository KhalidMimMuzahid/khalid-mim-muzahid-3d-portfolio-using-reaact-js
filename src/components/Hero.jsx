import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import "./hero.css";
import { useContext } from "react";
import { UIContext } from "../contexts/UIProvider/UIProvider";
import { playSound } from "../utils/playAudio";
const Hero = () => {
  const { theme, sound } = useContext(UIContext);
  const downloadResume = () => {
    const googleDriveLink =
      "https://drive.google.com/file/d/1kzy_mYXAwu0neBwzVf4i-eeJYCoRF0PL/view?usp=sharing";

    // Replace "YOUR_GOOGLE_DRIVE_LINK_HERE" with the actual link to your PDF file on Google Drive.

    // Construct the direct link to the file using the Google Drive API.
    const fileId = googleDriveLink.match(/\/([\w-]{33,})\//);
    if (!fileId || !fileId[1]) {
      console.error("Invalid Google Drive link");
      return;
    }

    const directDownloadLink = `https://drive.google.com/uc?export=download&id=${fileId[1]}`;

    // Start the download by creating a temporary anchor element.
    const anchor = document.createElement("a");
    anchor.href = directDownloadLink;
    anchor.target = "_blank";
    anchor.download = "file.pdf"; // Change the filename as desired.
    anchor.click();
    sound === "on" && playSound("resumeDownloaded");
    // Clean up the temporary anchor element.
    document.body.removeChild(anchor);
  };
  return (
    <section className={`relative w-full h-screen mx-auto hover:cursor-grab `}>
      <div
        className={`absolute inset-0 top-[80px]  mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#1E2022] dark:bg-[#2243fa]" />
          <div className="w-1  h-28 xs:h-40  sm:h-80 bg-gradient-to-b from-[#1E2022] dark:from-[#2243fa] to-transparent" />
        </div>

        <div className=" w-full">
          <h1
            className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-[#d88e26] dark:text-white`}
          >
            Hi, I'm{" "}
            <span className="text-[#1E2022] dark:text-[#2243fa]  hover:cursor-pointer">
              Khalid
            </span>
          </h1>
          <div className="relative">
            <div className="text-[#d88e26] dark:text-[#ffffff]  text-[18px] xs:text-[22px] sm:text-[30px] lg:text-[48px] my-2">
              <div className="absolute inset-0 mt-0">
                <Typewriter
                  options={{
                    strings: [
                      "Experienced Full Stack Developer",
                      "Leadership Development  Manager",
                      "Expert in Node JS and React JS ",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              {/* This element is only to give predefined height for type-writer */}
              <p className="invisible">This is my introduction</p>
            </div>
          </div>

          <button
            className={`  ${
              theme === "dark"
                ? "neon-button-dark-mode"
                : "black-button-light-mode"
            }  `}
            onClick={downloadResume}
          >
            Resume
          </button>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
