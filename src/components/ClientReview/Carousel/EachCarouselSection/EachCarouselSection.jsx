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
            ? `${screenWidth - 53}px`
            : `${screenWidth - 134}px`,
      }}
      className={`rounded-xl  p-4 md:p-8   overflow-hidden    border-4   border-white dark:border-black 
      bg-gradient-to-r from-tertiary-lite dark:from-[#040712] to-secondary-lite  dark:to-tertiary 
       hover:cursor-grab`}
    >
      <div className={`${style.triangle_gradient} relative`}>
        <div>
          <h1 className="font-semibold text-xl text-white text-center">
            {item?.heading}
          </h1>
          <p className="text-sm text-secondary text-justify my-5 md:w-[60%] w-full">
            {item?.description}
          </p>
          <p className="text-black dark:text-[#2242fa]  text-lg font-medium">
            {item?.name}
          </p>
          <p className="text-sm text-black dark:text-[#2242fa] my-2 h-12 sm:h-auto">
            {item?.position}
          </p>
          <img src={item?.img} className="h-[40px]" />
        </div>
        <img
          src={item?.personImg}
          className="absolute bottom-0 right-0 h-[120px] xs:h-[150px] md:h-[200px]"
        />
      </div>
    </div>
  );
}

export default EachCarouselSection;
