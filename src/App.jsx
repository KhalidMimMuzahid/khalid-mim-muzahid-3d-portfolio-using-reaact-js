import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import ParticlesBackground from "./Layout/Parent/particles/ParticlesBackground";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ParticlesBackground />
    </>
  );
};

export default App;
