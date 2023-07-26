import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Parent from "../Layout/Parent/Parent";
import Error404 from "../Pages/Error404/Error404";
import Blogs from "../Pages/Blogs/Blogs";
import Projects from "../Pages/Projects/Projects";

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
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

export default router;
