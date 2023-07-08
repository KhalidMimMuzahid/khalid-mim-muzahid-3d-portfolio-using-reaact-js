import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Parent from "../Layout/Parent/Parent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent />,
    errorElement: <h1>this is 404 page</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
