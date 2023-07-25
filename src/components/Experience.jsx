import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { UIContext } from "../contexts/UIProvider/UIProvider";

const ExperienceCard = ({ experience, theme }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        // background: theme === "dark" ? "#1d1836" : "#00909E",

        background:
          theme === "dark"
            ? "linear-gradient( 90deg ,#050816,#151030)"
            : "linear-gradient( 90deg ,#27496D, #00909E)",
        color: theme === "dark" ? "#fff" : "#1E2022",
        boxShadow: "0px 35px 120px -15px #211e35",
        border: theme === "dark" ? "2px solid black" : "2px solid white",
      }}
      contentArrowStyle={{
        borderRight: `10px solid  ${theme === "dark" ? "#000" : "#fff"}`,
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, color: "#000" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      iconClassName={""}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { theme } = useContext(UIContext);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline
        // lineColor={theme === "dark" ? "#fff" : "#000"}
        >
          {experiences?.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              theme={theme}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
