import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Parent from "../Layout/Parent/Parent";
import Error404 from "../Pages/Error404/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
