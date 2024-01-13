import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { UIContext } from "./contexts/UIProvider/UIProvider";

const App = () => {
  const { theme } = useContext(UIContext);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
