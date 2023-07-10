import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import "./navbar.css";
const Navbar = () => {
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
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p
            className="text-white text-[24px] font-bold cursor-pointer flex "
            id="brand-name-color-effect"
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
                onClick={() => setActive(nav.title)}
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
          <div className=" h-[0px]" id="toggle-for-dark-mood">
            <input type="checkbox" id="darkmode-toggle" />
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
