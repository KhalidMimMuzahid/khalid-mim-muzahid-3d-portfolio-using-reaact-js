import React, { useEffect, useRef } from "react";
import Contact from "../../components/Contact";
import { StarsCanvas } from "../../components/canvas";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Tech from "../../components/Tech";
import Works from "../../components/Works";
import Feedbacks from "../../components/Feedbacks";
import Hero from "../../components/Hero";
import { ClientReview } from "../../components";
import WelcomeMyRoom from "../../components/WelcomeMyRoom";
import ParticlesBackground from "../../Layout/Parent/particles/ParticlesBackground";
const Home = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <ClientReview />
      <Contact />
      {/* <ParticlesBackground /> */}
    </div>
  );
};

export default Home;
