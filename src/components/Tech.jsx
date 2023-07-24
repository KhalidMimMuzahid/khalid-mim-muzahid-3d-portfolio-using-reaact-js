import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <motion.div className="flex flex-wrap mt-8  justify-center gap-[12px] md:gap-4 ">
      {technologies?.map((technology, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}
          className="  py-2 px-4 bg-gradient-to-r from-tertiary-lite dark:from-primary to-secondary-lite  dark:to-tertiary border-2 border-white dark:border-black shadow-card  mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
        >
          <img
            alt=""
            title={technology.name}
            src={technology?.icon}
            className="w-12"
          />
          <h4 className="text-md ml-4 text-white-100">{technology.name}</h4>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");
