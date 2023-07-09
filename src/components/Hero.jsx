import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[80px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1  h-28 xs:h-40  sm:h-80 bg-gradient-to-b from-[#915EFF] to-transparent" />
        </div>

        <div className=" w-full">
          <h1
            className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white`}
          >
            Hi, I'm <span className="text-[#915EFF]">Khalid</span>
          </h1>
          <div className="relative">
            <div className="text-[#ffffff] text-[18px] xs:text-[22px] sm:text-[30px] lg:text-[48px] my-2">
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
