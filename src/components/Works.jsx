import React, { useContext, useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { UIContext } from "../contexts/UIProvider/UIProvider";
import ModalForProjectDetails from "./ModalForProjectDetails";
import "./work.css";
const ProjectCard = ({ index, project, setProjectDetails, theme }) => {
  const { projectName, thumbNail, introduction } = project;
  let intro = introduction;
  if (introduction.length > 100) {
    intro = introduction.slice(0, 100) + "...";
  }

  return (
    <Tilt className="xs:w-[340px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full  p-[1px] rounded-[20px] shadow-card hover:cursor-grab"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-gradient-to-r from-tertiary-lite dark:from-primary to-secondary-lite  dark:to-tertiary overflow-hidden  rounded-[20px]  min-h-[280px]"
        >
          <div className="w-full ">
            <img className="w-full" src={thumbNail} alt="" srcSet="" />
          </div>
          <div className="p-4">
            <h3 className="text-white-100 text-[16px] font-bold ">
              {projectName}
            </h3>
            <p className="   text-secondary text-[14px] pl-1 tracking-wider">
              {intro}
            </p>
          </div>
          <div
            className="card-actions justify-end m-4"
            id={
              theme === "dark"
                ? "project-details"
                : "project-details-light-mode"
            }
          >
            {/* Open the modal using ID.showModal() method */}
            <button
              onClick={() => {
                window.projectDetailsModal.showModal();
                setProjectDetails(project);
              }}
              type="submit"
              className="bg-primary py-2 px-8 rounded-xl outline-none  w-fit text-white font-bold shadow-md shadow-primary"
            >
              details
            </button>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};
const Works = () => {
  const { screenWidth, theme } = useContext(UIContext);
  const [projectDetails, setProjectDetails] = useState({});
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://my-portfolio-snowy-zeta.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log("dataxxxxxxxxxxxxxxxxx:", data);
        setProjects(data);
      });
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-tertiary-lite dark:text-secondary text-[17px] leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {projects?.map((project, index) => (
          <ProjectCard
            key={`${index}`}
            index={index}
            project={project}
            setProjectDetails={setProjectDetails}
            theme={theme}
          />
        ))}
      </div>

      {/* modal for project */}
      <ModalForProjectDetails
        screenWidth={screenWidth}
        projectDetails={projectDetails}
        setProjectDetails={setProjectDetails}
        theme={theme}
      />
    </>
  );
};

export default SectionWrapper(Works, "work");
