import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
// import ParticlesBackground from "./Layout/Parent/particles/ParticlesBackground";
// import ParticlesBackgroundLight from "./Layout/Parent/particles/ParticlesBackgroundLight";
import { UIContext } from "./contexts/UIProvider/UIProvider";

const App = () => {
  const { theme } = useContext(UIContext);
  return (
    <>
      <RouterProvider router={router} />
      {/* {theme === "dark" && <ParticlesBackground />}
      {theme === "light" && <ParticlesBackgroundLight />} */}
    </>
  );
};

export default App;
