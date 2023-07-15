import React, { useContext, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { UIContext } from "../contexts/UIProvider/UIProvider";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
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
        className="bg-gradient-to-r from-primary to-tertiary  rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={image}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">{name}</h3>
      </div>
    </motion.div>
  </Tilt>
);
const Works = () => {
  const { screenWidth } = useContext(UIContext);
  const [projectDetails, setProjectDetails] = useState({});
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`${index}`} index={index} {...project} />
        ))}
      </div>
      {/* Open the modal using ID.showModal() method */}
      <button
        className="btn"
        onClick={() => window.projectDetailsModal.showModal()}
      >
        open modal
      </button>
      <dialog
        id="projectDetailsModal"
        className="modal modal-bottom md:modal-middle border-8 border-red-700 md:p-10"
      >
        <form
          style={{
            width: screenWidth >= 768 && `${screenWidth - 100}px`,
            maxWidth: screenWidth >= 768 && "900px",
          }}
          method="dialog"
          className="modal-box border-4 border-gray-700 h-full md:max-h-[700px] "
        >
          <div className=" border-4 h-full ">
            {/* if there is a button in form, it will close the modal */}
            <div className="w-full border border-lack flex justify-end relative top-[-20px] left-[20px]">
              <button className="text-red-700 ">✖</button>
            </div>
            <div className="border-4 relative top-[-26px] h-full">
              {/* workplace */}
              conetext should be there
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default SectionWrapper(Works, "work");
