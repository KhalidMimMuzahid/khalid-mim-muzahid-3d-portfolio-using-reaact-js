import React, { useEffect, useRef } from "react";
import Contact from "../../components/Contact";
import { StarsCanvas } from "../../components/canvas";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Tech from "../../components/Tech";
import Works from "../../components/Works";
import Feedbacks from "../../components/Feedbacks";
import Hero from "../../components/Hero";
const Home = () => {
  return (
    <div className="">
      {/* <Fuck /> */}
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <Contact />
    </div>
  );
};

export default Home;
