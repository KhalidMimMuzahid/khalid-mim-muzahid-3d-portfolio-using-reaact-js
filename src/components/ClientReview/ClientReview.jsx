import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import EachReview from "./EachReview/EachReview";

import gog from "../../assets/StudentReview/gog.png";
import city from "../../assets/StudentReview/city_university.png";
import pHero from "../../assets/StudentReview/programming-hero.png";
import swiggyLogo from "../../assets/StudentReview/swiggyLogo.png";

import habib from "../../assets/StudentReview/abdullah al habib.png";
import ajay from "../../assets/StudentReview/ajay_katana.png";
import rakib from "../../assets/StudentReview/rakib_uddin.png";
import person4 from "../../assets/StudentReview/person4.png";

import Carousel from "./Carousel/Carousel";
import { SectionWrapper } from "../../hoc";
import { styles } from "./../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
const data = [
  {
    id: 1,
    heading: "Done his best in the final year project",
    description: `Khalid's dedication, technical proficiency, and problem-solving abilities were instrumental in the project's success. He played a key role in developing user-friendly functionalities for medicine donation, reselling, and QR/barcode scanning.
    Moreover, Khalid's teamwork, communication, and professionalism were exemplary, making him an invaluable asset to any team or organization.`,
    name: "Md. Rakib Uddin",
    position: "Assistant Professor ",
    img: city,
    personImg: rakib,
  },
  {
    id: 2,
    heading: "Ready to Excel in Your Team",
    description: `Khalid's result-oriented approach, clear vision, and deep understanding of project requirements ensured seamless collaboration and on-time project delivery. He consistently developed robust web applications with cutting-edge UI/UX designs that exceeded client expectations.
      His leadership skills fostered a productive team environment, promoting open communication and innovative thinking. Khalid's technical expertise and mentorship empowered team members to excel and deliver outstanding results.`,
    name: "Katana Sri Ajay",
    position: "Analyst",
    img: gog,
    personImg: ajay,
  },
  {
    id: 3,
    heading: "Empowering Innovation and Collaboration",
    description: `I highly recommend Khalid Mim Muzahid for the Leadership Development Manager role. He demonstrated exceptional skills in web application development, effective planning, and efficient collaboration as part of the Job Junction - Group Project at Programming Hero. His proactive approach and technical expertise will undoubtedly be a valuable addition to your team.`,
    name: "Abdullah Al Habib",
    position: "ob Placement Executive",
    img: pHero,
    personImg: habib,
  },

  // {
  //   id: 4,
  //   heading: "Tier-3 college to 6 stars on CodeChef",
  //   description:
  //     "It has been a crazy ride from being a novice CS student to a 6 star Coder and ICPC Regionalist. I would like to thank Geeks of Gurukul for helping a Tier-3 college student explore such opportunities.",
  //   name: "Arpitha",
  //   position: "Data Science",
  //   img: swiggyLogo,
  //   personImg: person4,
  // },
];

function ClientReview() {
  const [active, setActive] = useState(0);
  const [shouldUpdate, setShouldUpdate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      shouldUpdate &&
        setActive((prev) => (prev >= data?.length - 1 ? 0 : prev + 1));
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
                  length={data?.length}
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
