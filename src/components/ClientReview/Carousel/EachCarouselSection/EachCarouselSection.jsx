import React, { useContext } from "react";
import style from "./eachCarouselSection.module.css";
import { UIContext } from "../../../../contexts/UIProvider/UIProvider";

function EachCarouselSection({ item }) {
  const { screenWidth } = useContext(UIContext);

  return (
    <div
      style={{
        width:
          screenWidth < 640
            ? `${screenWidth - 72}px`
            : `${screenWidth - 152}px`,
      }}
      className={`rounded-xl  p-8  overflow-hidden bg-gradient-to-r from-[#040712] to-tertiary border-4   border-primary dark:border-black `}
    >
      <div className={`${style.triangle_gradient} relative`}>
        <div>
          <h1 className="font-semibold text-xl text-white text-center">
            {item?.heading}
          </h1>
          <p className="text-sm text-secondary text-justify my-5 md:w-[60%] w-full">
            {item?.description}
          </p>
          <p className="text-[#2242fa] text-lg font-medium">{item?.name}</p>
          <p className="text-sm text-[#2243fa] my-2 h-12 md:h-auto">
            {item?.position}
          </p>
          <img src={item?.img} className="" />
        </div>
        <img
          src={item?.personImg}
          className="absolute bottom-0 right-0 h-[40%] sm:h-[50%]"
        />
      </div>
    </div>
  );
}

export default EachCarouselSection;
