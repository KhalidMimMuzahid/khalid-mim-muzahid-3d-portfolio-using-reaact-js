import React from "react";
import { About, Hero, Works } from "../../components";
import { SectionWrapper } from "../../hoc";
import BlogsHeader from "../../components/BlogsHeader";

const Blogs = () => {
  return (
    <div className="min-h-[100vh] flex items-center justify-center">
      <BlogsHeader />
    </div>
  );
};

export default Blogs;
