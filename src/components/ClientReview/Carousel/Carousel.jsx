import React, { useState } from "react";
import EachCarouselSection from "./EachCarouselSection/EachCarouselSection";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Carousel({ data }) {
  const [index, setIndex] = useState(0);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      !stop && setIndex((prev) => (prev >= 3 ? 0 : prev + 1));
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
            className="w-[90dvw] overflow-hidden"
            onMouseEnter={() => setStop(true)}
            onMouseLeave={() => setStop(false)}
          >
            <motion.div
              animate={{ x: `-${index * 100}%` }}
              className="flex items-center"
            >
              {data.map((item, indexHere) => (
                <div id={item?.id} className="" key={indexHere}>
                  <EachCarouselSection item={item} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="my-5 flex gap-7 justify-center">
          {data.map((item, indexHere) => (
            <div
              className={`h-[10px] w-[10px] ${
                index === indexHere ? "bg-[#4BA25D]" : "bg-[#a0ffb3]"
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
