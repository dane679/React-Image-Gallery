import "./index.css";
import Home from "./Components/Home.jsx";
import PhotoDetail from "./Components/PhotoDetail.jsx";
import About from "./Components/About.jsx";
import NotFound from "./Components/NotFound.jsx";
import StandardLayout from "./Layouts/StandardLayout.jsx";
// import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <StandardLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "Photos/:imageid",
          element: <PhotoDetail />,
        },
        {
          path: "About",
          element: <About />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]

);

export default function App() {
  return <RouterProvider router={router} />;
}
