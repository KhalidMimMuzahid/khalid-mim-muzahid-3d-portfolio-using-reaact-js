import React from "react";
import { MyRoomCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const WelcomeMyRoom = () => {
  return (
    <div>
      <MyRoomCanvas />
    </div>
  );
};

export default SectionWrapper(WelcomeMyRoom, "myroom");
