import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import EachReview from "./EachReview/EachReview";


import Carousel from "./Carousel/Carousel";
import { SectionWrapper } from "../../hoc";
import { styles } from "./../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { testimonials } from "../../constants";

function ClientReview() {
  const [active, setActive] = useState(0);
  const [shouldUpdate, setShouldUpdate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      shouldUpdate &&
        setActive((prev) => (prev >= testimonials?.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [shouldUpdate]);

  return (
    <>
      <motion.div className="flex justify-center py-[30px] md:py-[65px] mx-auto ">
        <div className="text-[#101010] dark:text-white  w-full">
          <motion.div variants={textVariant()} className="mb-[50px]">
            <p className={`${styles.sectionSubText} `}>Testimonials</p>
            <h2 className={`${styles.sectionHeadText}`}>Reviews.</h2>
          </motion.div>
          <div className=" hidden lg:block ">
            <div className="flex  justify-between ">
              {testimonials?.map((item, index) => (
                <EachReview
                  item={item}
                  key={index}
                  index={index}
                  active={active}
                  setActive={setActive}
                  length={testimonials?.length}
                  setShouldUpdate={setShouldUpdate}
                />
              ))}
            </div>
          </div>
          <div className="lg:hidden block">
            <Carousel data={testimonials} />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SectionWrapper(ClientReview, "testimonials");
