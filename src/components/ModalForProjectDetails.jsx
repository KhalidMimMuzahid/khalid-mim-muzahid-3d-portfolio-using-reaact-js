import React from "react";
import { playSound } from "../utils/playAudio";

const ModalForProjectDetails = ({
  screenWidth,
  projectDetails,
  setProjectDetails,
  theme,
  sound,
}) => {
  const {
    projectName,
    objectives,
    systemFeatures,
    introduction,
    toolsAndTechnologies,
    thumbNail,
    clientSide,
    serverSide,
    liveSite,
    _id,
  } = projectDetails;

  return (
    <dialog
      id="projectDetailsModal"
      className="modal modal-bottom md:modal-middle md:p-10"
    >
      <form
        style={{
          width: screenWidth >= 768 && `${screenWidth - 100}px`,
          maxWidth: screenWidth >= 768 && "1000px",
          height: "900px",
        }}
        method="dialog"
        className="modal-box h-full bg-primary-lite dark:bg-tertiary dark:md:bg-gradient-to-r dark:md:from-primary dark:md:to-tertiary  md:border-4 dark:md:border-black dark:md:shadow-card
        md:bg-gradient-to-r md:from-tertiary-lite md:to-secondary-lite md:border-white-100 md:shadow-card
        "
      >
        <div className="  h-full">
          {/* if there is a button in form, it will close the modal */}
          <div className="w-full  flex justify-end relative top-[-20px] left-[20px]">
            <button
              onClick={() => {
                sound === "on" && playSound("closingProject");
                setProjectDetails({});
              }}
              className="text-red-700 "
            >
              ✖
            </button>
          </div>
          <div className=" relative top-[-26px] h-full overflow-y-auto">
            {/* workplace */}
            {/* conetext should be there */}
            {!projectName ? (
              <div>
                <h1>is loading</h1>
              </div>
            ) : (
              <div className="card md:pr-4   mx-auto   shadow-xl px-2 md:px-0">
                <figure>
                  <img src={thumbNail} alt="Shoes" />
                </figure>
                <div className="card-body mx-0 px-0">
                  <h2 className="card-title text-tertiary-lite md:text-white-100 dark:text-white-100 font-extrabold">
                    {projectName}
                  </h2>
                  <p className=" text-justify text-secondary-lite md:text-secondary dark:text-secondary">
                    <span className="font-extrabold text-tertiary-lite md:text-white-100 dark:text-white-100 ">
                      Introduction:{" "}
                    </span>
                    {introduction}
                  </p>
                  <p>
                    <span className="font-extrabold text-tertiary-lite md:text-white-100 dark:text-white-100 ">
                      Objective:
                    </span>
                    <ul className="list-disc ml-8">
                      {objectives?.map((eachObjective) => (
                        <li
                          className=" text-justify text-secondary-lite md:text-secondary dark:text-secondary"
                          key={objectives.indexOf(eachObjective)}
                        >
                          {eachObjective}
                        </li>
                      ))}
                    </ul>
                  </p>
                  <p>
                    <span className="font-extrabold text-tertiary-lite md:text-white-100 dark:text-white-100 ">
                      System Features:
                    </span>
                    <ul className="list-disc ml-8">
                      {systemFeatures?.map((eachSystem) => (
                        <li
                          className="text-justify text-secondary-lite md:text-secondary dark:text-secondary"
                          key={systemFeatures.indexOf(eachSystem)}
                        >
                          {eachSystem}
                        </li>
                      ))}
                    </ul>
                  </p>
                  <p>
                    <span className="font-extrabold text-tertiary-lite md:text-white-100 dark:text-white-100 ">
                      Tools and Technology:
                    </span>{" "}
                    {toolsAndTechnologies?.map((eachTools) => (
                      <span
                        className="text-secondary-lite md:text-secondary dark:text-secondary"
                        key={toolsAndTechnologies.indexOf(eachTools)}
                      >
                        {eachTools},{" "}
                      </span>
                    ))}{" "}
                  </p>
                  <div
                    id={
                      theme === "dark"
                        ? "project-details-anchor"
                        : "project-details-anchor-light-mode"
                    }
                    className="card-actions justify-end m-4"
                  >
                    <a
                      target="_blank"
                      href={clientSide}
                      className="bg-primary py-2 px-8 rounded-xl outline-none  w-fit text-white font-bold shadow-md shadow-primary"
                    >
                      Client Side
                    </a>
                    <a
                      target="_blank"
                      href={serverSide}
                      className="bg-primary py-2 px-8 rounded-xl outline-none  w-fit text-white font-bold shadow-md shadow-primary"
                    >
                      Server Side
                    </a>
                    <a
                      target="_blank"
                      href={liveSite}
                      className="bg-primary py-2 px-8 rounded-xl outline-none  w-fit text-white font-bold shadow-md shadow-primary"
                    >
                      Live Site
                    </a>
                    {/* <div className="badge badge-outline">Products</div> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </dialog>
  );
};

export default ModalForProjectDetails;
