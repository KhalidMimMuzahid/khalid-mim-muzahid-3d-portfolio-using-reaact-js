import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logoDarkMode, logoLightMode, menu, close } from "../assets";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import "./navbar.css";
import { UIContext } from "../contexts/UIProvider/UIProvider";
import playSound from "../utils/playAudio";
const Navbar = () => {
  const { theme, setTheme, sound, setSound, music, setMusic } =
    useContext(UIContext);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` ${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled
          ? theme === "dark"
            ? "bg-primary"
            : "bg-[#F0F5F9]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-[1320px] mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={theme === "dark" ? logoDarkMode : logoLightMode}
            alt="logo"
            className="w-9 h-9 object-contain"
          />
          <p
            className="text-white text-[24px] font-bold cursor-pointer flex "
            id={
              theme === "dark"
                ? "brand-name-color-effect-dark-mode"
                : "brand-name-color-effect-light-mode"
            }
          >
            Khalid &nbsp;
            <span className="lg:block hidden "> Mim Muzahid</span>
          </p>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-4 ">
          {navLinks.map((nav) => (
            <div id="topnavbarfordesktop" key={nav.id}>
              <div
                className={`outer button border ${
                  active === nav.title
                    ? "text-white font-bold"
                    : "text-secondary font-medium"
                } hover:text-white hover:border-none   cursor-pointer`}
                onClick={() => {
                  setActive(nav.title);

                  playSound("contactMe");
                }}
              >
                <a
                  className="text-center flex items-center justify-center"
                  href={`#${nav.id}`}
                >
                  {nav.title}
                </a>

                <span></span>
                <span></span>
              </div>
            </div>
          ))}
        </ul>
        <div className=" flex   items-center">
          <div className="flex items-center gap-2">
            <div className="fixed flex gap-[15px] bottom-[15px] right-[15px]">
              <div id="sound-toggle-button">
                <input
                  type="checkbox"
                  name=""
                  id="checkbox-for-sound"
                  checked={sound === "on"}
                  onChange={() =>
                    setSound((prev) => {
                      if (prev === "on") {
                        localStorage.setItem("sound", "off");
                        return "off";
                      } else {
                        localStorage.setItem("sound", "on");
                        return "on";
                      }
                    })
                  }
                />
                <label className="button" htmlFor="checkbox-for-sound">
                  <span className="icon">
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d={
                          sound === "on"
                            ? "M361.299413,341.610667 L328.014293,314.98176 C402.206933,233.906133 402.206933,109.96608 328.013013,28.8906667 L361.298133,2.26304 C447.910187,98.97536 447.908907,244.898347 361.299413,341.610667 Z M276.912853,69.77216 L243.588693,96.4309333 C283.38432,138.998613 283.38304,204.87488 243.589973,247.44256 L276.914133,274.101333 C329.118507,215.880107 329.118507,127.992107 276.912853,69.77216 Z M191.749973,1.42108547e-14 L80.8957867,87.2292267 L7.10542736e-15,87.2292267 L7.10542736e-15,257.895893 L81.0208,257.895893 L191.749973,343.35424 L191.749973,1.42108547e-14 L191.749973,1.42108547e-14 Z"
                            : "M47.0849493,-1.42108547e-14 L298.668,251.583611 L304.101001,257.015597 L304.101,257.016 L353.573532,306.488791 C353.573732,306.488458 353.573933,306.488124 353.574133,306.48779 L384.435257,337.348961 L384.434,337.349 L409.751616,362.666662 L379.581717,392.836561 L191.749,205.003 L191.749973,369.105851 L81.0208,283.647505 L7.10542736e-15,283.647505 L7.10542736e-15,112.980838 L80.8957867,112.980838 L91.433,104.688 L16.9150553,30.169894 L47.0849493,-1.42108547e-14 Z M361.298133,28.0146513 C429.037729,103.653701 443.797162,209.394226 405.578884,298.151284 L372.628394,265.201173 C396.498256,194.197542 381.626623,113.228555 328.013013,54.642278 L361.298133,28.0146513 Z M276.912853,95.5237713 C305.539387,127.448193 318.4688,168.293162 315.701304,208.275874 L266.464558,159.040303 C261.641821,146.125608 254.316511,133.919279 244.488548,123.156461 L243.588693,122.182545 L276.912853,95.5237713 Z M191.749973,25.7516113 L191.749,84.3256113 L158.969,51.5456113 L191.749973,25.7516113 Z"
                        }
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
              <div id="music-toggle-button">
                <input
                  type="checkbox"
                  name=""
                  id="checkbox-for-music"
                  checked={music === "on"}
                  onChange={() =>
                    setMusic((prev) => {
                      if (prev === "on") {
                        localStorage.setItem("music", "off");
                        return "off";
                      } else {
                        localStorage.setItem("music", "on");
                        return "on";
                      }
                    })
                  }
                />
                <label className="button" htmlFor="checkbox-for-music">
                  <span className="icon">
                    <svg
                      viewBox={
                        music === "on"
                          ? "0 0 104.23 122.88"
                          : "0 0 122.88 121.06"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d={
                          music === "on"
                            ? "M87.9,78.04c2.74-0.48,5.33-0.4,7.6,0.13V24.82L39.05,41.03v61.95c0.03,0.34,0.05,0.69,0.05,1.03 c0,0,0,0.01,0,0.01c0,8.34-8.75,16.62-19.55,18.49C8.76,124.37,0,119.12,0,110.77c0-8.34,8.76-16.62,19.55-18.48 c4.06-0.7,7.84-0.39,10.97,0.71l0-76.26h0.47L104.04,0v85.92c0.13,0.63,0.2,1.27,0.2,1.91c0,0,0,0,0,0.01 c0,6.97-7.32,13.89-16.33,15.44c-9.02,1.56-16.33-2.83-16.33-9.8C71.57,86.51,78.88,79.59,87.9,78.04L87.9,78.04L87.9,78.04z"
                            : "M7.6,22.7c-2.91-2.12-3.56-6.2-1.44-9.12s6.2-3.56,9.11-1.44L120.2,88.64c2.91,2.12,3.55,6.2,1.43,9.12 c-2.12,2.91-6.2,3.56-9.11,1.44L7.6,22.7L7.6,22.7z M88.85,51.97V23.09l-28.42,8.16l-24.01-17.5L96.79,0v57.76L88.85,51.97 L88.85,51.97z M36.33,57.46v45.08c0.03,0.32,0.05,0.64,0.05,0.96v0.01c0,7.76-8.14,15.46-18.19,17.2C8.15,122.44,0,117.55,0,109.79 c0-7.76,8.15-15.46,18.19-17.19c3.78-0.65,7.29-0.36,10.21,0.66V51.68L36.33,57.46L36.33,57.46z M92.87,98.69 c-2.77,2.77-6.71,4.88-11.09,5.63c-8.39,1.45-15.19-2.63-15.19-9.12c-0.01-4.03,2.62-8.04,6.62-10.84L92.87,98.69L92.87,98.69z"
                        }
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
            </div>

            <div className=" h-[0px]" id="toggle-for-dark-mood">
              <input
                checked={theme === "dark"}
                type="checkbox"
                id="darkmode-toggle"
                onChange={() =>
                  setTheme((prev) => {
                    if (prev === "light") {
                      localStorage.setItem("theme", "dark");
                      return "dark";
                    } else {
                      localStorage.setItem("theme", "light");
                      return "light";
                    }
                  })
                }
              />
              <label for="darkmode-toggle">
                <svg
                  fill="#000000"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 496 496"
                  xml:space="preserve"
                  className="sun "
                >
                  <g>
                    <g>
                      <g>
                        <rect
                          x="152.994"
                          y="58.921"
                          transform="matrix(0.3827 0.9239 -0.9239 0.3827 168.6176 -118.5145)"
                          width="40.001"
                          height="16"
                        />
                        <rect
                          x="46.9"
                          y="164.979"
                          transform="matrix(0.9239 0.3827 -0.3827 0.9239 71.29 -12.4346)"
                          width="40.001"
                          height="16"
                        />
                        <rect
                          x="46.947"
                          y="315.048"
                          transform="matrix(0.9239 -0.3827 0.3827 0.9239 -118.531 50.2116)"
                          width="40.001"
                          height="16"
                        />

                        <rect
                          x="164.966"
                          y="409.112"
                          transform="matrix(-0.9238 -0.3828 0.3828 -0.9238 168.4872 891.7491)"
                          width="16"
                          height="39.999"
                        />

                        <rect
                          x="303.031"
                          y="421.036"
                          transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 50.2758 891.6655)"
                          width="40.001"
                          height="16"
                        />

                        <rect
                          x="409.088"
                          y="315.018"
                          transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 701.898 785.6559)"
                          width="40.001"
                          height="16"
                        />

                        <rect
                          x="409.054"
                          y="165.011"
                          transform="matrix(-0.9239 0.3827 -0.3827 -0.9239 891.6585 168.6574)"
                          width="40.001"
                          height="16"
                        />
                        <rect
                          x="315.001"
                          y="46.895"
                          transform="matrix(0.9238 0.3828 -0.3828 0.9238 50.212 -118.5529)"
                          width="16"
                          height="39.999"
                        />
                        <path
                          d="M248,88c-88.224,0-160,71.776-160,160s71.776,160,160,160s160-71.776,160-160S336.224,88,248,88z M248,392
				c-79.4,0-144-64.6-144-144s64.6-144,144-144s144,64.6,144,144S327.4,392,248,392z"
                        />
                        <rect x="240" width="16" height="72" />
                        <rect
                          x="62.097"
                          y="90.096"
                          transform="matrix(0.7071 0.7071 -0.7071 0.7071 98.0963 -40.6334)"
                          width="71.999"
                          height="16"
                        />
                        <rect y="240" width="72" height="16" />

                        <rect
                          x="90.091"
                          y="361.915"
                          transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -113.9157 748.643)"
                          width="16"
                          height="71.999"
                        />
                        <rect x="240" y="424" width="16" height="72" />

                        <rect
                          x="361.881"
                          y="389.915"
                          transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 397.8562 960.6281)"
                          width="71.999"
                          height="16"
                        />
                        <rect x="424" y="240" width="72" height="16" />
                        <rect
                          x="389.911"
                          y="62.091"
                          transform="matrix(0.7071 0.7071 -0.7071 0.7071 185.9067 -252.6357)"
                          width="16"
                          height="71.999"
                        />
                      </g>
                    </g>
                  </g>
                </svg>

                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="moon"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.39703 11.6315C3.39703 16.602 7.42647 20.6315 12.397 20.6315C15.6858 20.6315 18.5656 18.8664 20.1358 16.23C16.7285 17.3289 12.6922 16.7548 9.98282 14.0455C7.25201 11.3146 6.72603 7.28415 7.86703 3.89293C5.20697 5.47927 3.39703 8.38932 3.39703 11.6315ZM21.187 13.5851C22.0125 13.1021 23.255 13.6488 23 14.5706C21.7144 19.2187 17.4543 22.6315 12.397 22.6315C6.3219 22.6315 1.39703 17.7066 1.39703 11.6315C1.39703 6.58874 4.93533 2.25845 9.61528 0.999986C10.5393 0.751502 11.0645 1.99378 10.5641 2.80935C8.70026 5.84656 8.83194 10.0661 11.397 12.6312C13.9319 15.1662 18.1365 15.3702 21.187 13.5851Z"
                  />
                </svg>
              </label>
            </div>
          </div>

          <div className="md:hidden ">
            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.8}
              distance={"lg"}
              toggle={setToggle}
              // color={darkMode ? "#000000" : "#ffffff"}
              color={"#ffffff"}
            />
            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ x: 100 }}
                  animate={{ x: 0, transition: { type: "spring" } }}
                  exit={{ x: 200, transition: { type: "spring" } }}
                  className={
                    " py-2 px-2 md:p-0 z-[20] fixed top-[110px] mt-2 rounded-lg shadow-lg right-[00px] block "
                  }
                  // darkMode
                  // ? "bg-white py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
                  // : "bg-black py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
                >
                  <div id="sidenavbarformobile">
                    <ul className="">
                      {navLinks.map((nav, i) => (
                        <li
                          style={{ zIndex: 10 - i }}
                          key={nav.id}
                          className={`${
                            active === nav.title
                              ? "text-white"
                              : "text-secondary"
                          } z-[${i}] z-[4]`}
                          onClick={() => {
                            setToggle(!toggle);
                            setActive(nav.title);
                          }}
                        >
                          <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                      ))}
                      {/* {dashboard} */}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
