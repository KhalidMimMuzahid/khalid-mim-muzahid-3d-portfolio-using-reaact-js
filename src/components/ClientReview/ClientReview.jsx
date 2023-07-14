import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import EachReview from "./EachReview/EachReview";
import hpLogo from "../../assets/StudentReview/hpLogo.png";
import ibmLogo from "../../assets/StudentReview/ibmLogo.png";
import tcsLogo from "../../assets/StudentReview/tcsLogo.png";
import swiggyLogo from "../../assets/StudentReview/swiggyLogo.png";
import person1 from "../../assets/StudentReview/person1.png";
import person2 from "../../assets/StudentReview/person2.png";
import person3 from "../../assets/StudentReview/person3.png";
import person4 from "../../assets/StudentReview/person4.png";
import Carousel from "./Carousel/Carousel";
import { SectionWrapper } from "../../hoc";
import { styles } from "./../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
const data = [
  {
    id: 1,
    heading: "Non CS Student to Top Company",
    description:
      "My experience with Geeks of Gurukul was wonderful. The courses strengthened my concepts and helped me in my interviews. The faculty was amazing. I would definitely recommend Geeks of Gurukul.",
    name: "Kavitha Sharma",
    position: "Full Stack development",
    img: hpLogo,
    personImg: person1,
  },
  {
    id: 2,
    heading: "Non Engineer to Investment Bank",
    description:
      "Geeks of Gurukul is one of the best learning platforms. I enrolled into C++ Foundation with Data Structures. The course content was very informative and well structured. The way Ankush Sir and Nidhi Ma'am explain a topic is commendable. My approach towards solving a problem completely changed.",
    name: "Abishek kumar",
    position: "Analyst",
    img: ibmLogo,
    personImg: person2,
  },
  {
    id: 3,
    heading: "College dropout to a package of 10 LPA",
    description:
      "The experience and knowledge I learned at Geeks of Gurukul greatly sharpened my skills and allowed me to pass the HackerRank and technical interview rounds. The placement team coordinated everything perfectly and it was unbelievable to get an offer letter of 10 LPA. Grateful to Geeks of Gurukul.",
    name: "Ishani Sharma",
    position: "Developer",
    img: tcsLogo,
    personImg: person3,
  },
  {
    id: 4,
    heading: "Tier-3 college to 6 stars on CodeChef",
    description:
      "It has been a crazy ride from being a novice CS student to a 6 star Coder and ICPC Regionalist. I would like to thank Geeks of Gurukul for helping a Tier-3 college student explore such opportunities.",
    name: "Arpitha",
    position: "Data Science",
    img: swiggyLogo,
    personImg: person4,
  },
];

function ClientReview() {
  const [active, setActive] = useState(0);
  const [shouldUpdate, setShouldUpdate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      shouldUpdate && setActive((prev) => (prev >= 3 ? 0 : prev + 1));
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
              {data.map((item, index) => (
                <EachReview
                  item={item}
                  key={index}
                  index={index}
                  active={active}
                  setActive={setActive}
                  setShouldUpdate={setShouldUpdate}
                />
              ))}
            </div>
          </div>
          <div className="lg:hidden block">
            <Carousel data={data} />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SectionWrapper(ClientReview, "testimonials");
