import React from "react";
import StarWrapper from "../hoc/SectionWrapper";
import { logoDarkMode } from "../assets";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-tertiary shadow-card border-2 border-black  rounded-[20px] p-8">
      <div className="border-4 flex justify-between">
        <div className="border-4 border-red-600 grow  flex items-center justify-start gap-4">
          <div className=" ">
            <img className="w-[50px] rounded-full" src={logoDarkMode} alt="" />
          </div>
          <div>
            <h1 className="text-white">Khalid Mim Muzahid</h1>
            <h1 className="text-white">full stack developer</h1>
          </div>
        </div>
        <div className="border-4 border-red-600 grow">
          <h1 className="text-white">ge t in touch</h1>
        </div>
        <div className="border-4 border-red-600 grow">
          <h1 className="text-white">contact us section</h1>
        </div>
      </div>
    </div>
  );
};

export default StarWrapper(Footer, "footer");
