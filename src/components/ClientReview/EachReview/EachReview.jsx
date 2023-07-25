import React from "react";
import style from "./eachReview.module.css";

function EachReview({
  item,
  index,
  active,
  setActive,
  setShouldUpdate,
  length,
}) {
  const handleMouseEnter = () => {
    if (index !== active) {
      setShouldUpdate(false);
      setActive(index);
    }
  };

  return (
    <div
      style={{
        // border-top-left-radius: 80px 80px;
        borderTopLeftRadius: index === 0 && "20px 20px",
        borderBottomLeftRadius: index === 0 && "20px 20px",
        borderTopRightRadius: index === length - 1 && "20px 20px",
        borderBottomRightRadius: index === length - 1 && "20px 20px",
      }}
      className={`${style.triangle_gradient} relative grow pt-5 px-5 ${
        index === active ? "w-[400px] xl:w-[500px]" : "w-[240px] xl:w-[400px]"
      } h-[500px]  duration-300 overflow-hidden  border-2 shadow-card  border-white dark:border-black hover:cursor-grab
      bg-gradient-to-r from-tertiary-lite dark:from-primary to-secondary-lite  dark:to-tertiary 
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setShouldUpdate(true)}
    >
      <div>
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
            </p>
            <div className="mt-10">
              <p className="text-black dark:text-[#2242fa] font-semibold text-lg">
                {item?.name}
              </p>
              <p className="text-black dark:text-[#2242fa] font-medium my-3">
                {item?.position}
              </p>
              {item?.img && (
                <img className="h-[50px]" src={item.img} alt={item?.heading} />
              )}
            </div>
          </>
        )}

        {item?.img && (
          <img
            src={item.personImg}
            alt={item?.heading}
            className="absolute bottom-0 right-0 h-[200px] z-[2]"
          />
        )}
        <div
          className={`${style.triangle_gradient} absolute z-[1] bottom-0 right-0 h-[500px] w-full`}
        ></div>
      </div>
    </div>
  );
}

export default EachReview;
