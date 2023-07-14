import React from "react";
import style from "./eachReview.module.css";

function EachReview({ item, index, active, setActive, setShouldUpdate }) {
  const handleMouseEnter = () => {
    if (index !== active) {
      setShouldUpdate(false);
      setActive(index);
    }
  };

  return (
    <div
      className={`${style.triangle_gradient} relative grow pt-5 px-5 ${
        index === active ? "w-[400px] xl:w-[500px]" : "w-[240px] xl:w-[400px]"
      } h-[500px]  duration-300 overflow-hidden bg-gradient-to-r from-primary to-tertiary border-2 shadow-card  border-primary dark:border-black hover:cursor-grab`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setShouldUpdate(true)}
    >
      <h1
        className={`${
          index === active
            ? "  text-white font-bold text-[24px]"
            : "text-xl text-secondary"
        } font-semibold text-[#4BA25D] leading-relaxed text-center`}
      >
        {item?.heading}
      </h1>
      {index === active && (
        <>
          <p className="font-medium text-secondary text-[14px] text-justify mt-2">
            {item?.description}
          </p>{" "}
          <div className="mt-10">
            <p className="text-[#915EFF] font-semibold text-lg">{item?.name}</p>
            <p className="text-[#915EFF] font-medium my-3">{item?.position}</p>
            {item?.img && <img src={item.img} alt={item?.heading} />}
          </div>
        </>
      )}

      {item?.img && (
        <img
          src={item.personImg}
          alt={item?.heading}
          className="absolute bottom-0 right-0 h-[200px]"
        />
      )}
    </div>
  );
}

export default EachReview;
