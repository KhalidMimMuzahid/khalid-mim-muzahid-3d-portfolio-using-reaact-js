import React from "react";
import { SectionWrapper } from "../hoc";

const BlogsHeader = () => {
  return (
    <div className="">
      <h1 className=" dark:text-secondary text-[36px] xs:text-[48px] sm:text-[56px] md:text-[72px] lg:text-[96px] font-[900]">
        Coming Soon...
      </h1>
    </div>
  );
};

export default SectionWrapper(BlogsHeader, "blogsheader");
