import React, { useContext, useState } from "react";
import EachCarouselSection from "./EachCarouselSection/EachCarouselSection";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Carousel({ data }) {
  const [index, setIndex] = useState(0);
  const [stop, setStop] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      !stop && setIndex((prev) => (prev >= data.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [stop]);

  return (
    <>
      <div className="w-full mt-5">
        <div className="mx-auto flex flex-col justify-center">
          <div
            // overflow-hidden
            className="w-full overflow-hidden"
            onMouseEnter={() => setStop(true)}
            onMouseLeave={() => setStop(false)}
          >
            <motion.div
              animate={{ x: `-${index * 100}%` }}
              className="flex items-center gap-2"
            >
              {data.map((item, indexHere) => (
                <div id={item?.id} className=" w-full" key={indexHere}>
                  <EachCarouselSection item={item} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="my-5 flex gap-7 justify-center">
          {data.map((item, indexHere) => (
            <div
              className={`h-[20px] hover:cursor-pointer w-[20px] ${
                index === indexHere
                  ? "bg-black dark:bg-[#2243fa]"
                  : "bg-[#00000066] dark:bg-[#2242fa66]"
              } rounded-full`}
              key={indexHere}
              onClick={() => setIndex(indexHere)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
