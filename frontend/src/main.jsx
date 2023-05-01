import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import Drink from "./Pages/Drinks";
import Meal from "./Pages/Meal";
import Layout from "./Components/Layout";
import AppState from "./context/AppState";
import Extras from "./Pages/Extras";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/drinks",
        element: <Drink />,
      },
      {
        path: "/meal",
        element: <Meal />,
      },
      {
        path: "/extras",
        element: <Extras />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppState>
      <RouterProvider router={router} />
    </AppState>
  </React.StrictMode>
);
