import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full hover:cursor-grab ">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full  p-[1px] rounded-[20px]  shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-gradient-to-r from-tertiary-lite dark:from-primary to-secondary-lite  dark:to-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 flex flex-col gap-4 text-quaternary-lite dark:text-secondary  text-[17px]  leading-[25px] e w-full text-justify"
      >
       <p>Greetings, I'm <b className="">Khalid Mim Muzahid</b>, a highly motivated Full Stack Web
        Developer with a strong background in <b>Computer Science and Engineering</b>.
        I hold expertise in a wide range of web development technologies,
        including React, Node.js, MongoDB, and more. </p>
        <p>I've had the privilege of working at both <b>Geeks of Gurukul</b> and <b>Accolite</b>,
        where I've honed my skills and taken on leadership roles. At Accolite, I
        specialized in front-end and back-end technologies, with experience in
        AWS services. </p>
  
  
        <p>My commitment to professional growth is evident through my active
        engagement in the tech community. I'm currently seeking opportunities to
        leverage my skills and expertise in web development for a
        forward-thinking organization.</p>
        <p>If you're looking for a dedicated and adaptable developer with a proven
        track record of technical excellence, I'm eager to connect and discuss
        how we can achieve outstanding results together.</p>
      
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
