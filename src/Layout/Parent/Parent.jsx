import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { UIContext } from "../../contexts/UIProvider/UIProvider";
import Navbar from "../../components/Navbar";
import ParticlesBackground from "./particles/ParticlesBackground";
import ParticlesBackgroundLight from "./particles/ParticlesBackgroundLight";

import FirstWelcomePage from "./FirstWelcomePage/FirstWelcomePage";
import Footer from "../../components/Footer";
const Parent = () => {
  const { theme, music } = useContext(UIContext);
  const [justCome, setJustCome] = useState(true);

  return (
    <div className={`${theme} overflow-hidden `}>
      <div
        className="max-w-[1440px] mx-auto "
        style={{ display: justCome ? "none" : "block" }}
      >
        <div className={`relative z-0  `}>
          <Navbar />
          <div className="">
            <Outlet />
          </div>
          <Footer />
        </div>
        {theme === "dark" && <ParticlesBackground />}
        {theme === "light" && <ParticlesBackgroundLight />}
      </div>

      <div style={{ display: justCome ? "block" : "none" }}>
        <FirstWelcomePage setJustCome={setJustCome} music={music} />
      </div>
    </div>
  );
};

export default Parent;
