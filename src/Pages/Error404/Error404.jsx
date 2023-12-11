import React from "react";
import Lottie from "lottie-react";
import error404 from "../../assets/lottie/error404.json";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div
      // style={{ height: "100vh", overflow: "hidden" }}
      className="bg-white"
    >
      <Lottie
        style={{ height: "80vh" }}
        animationData={error404}
        loop={true}
        speed={8}
        onComplete={() => {
          setLottieName("hi-fi");
        }}
      />
      <div className="w-full flex justify-center">
        <Link
          to="/"
          className=" px-4 inline bg-[#2f2f2f] hover:bg-[#000000] text-white font-semibold text-lg rounded-2xl hover:cursor-pointer text-center py-2 border-2 border-black "
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Error404;
