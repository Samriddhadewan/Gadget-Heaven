import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout/Mainlayout";
import Dashboard from "../Components/Dashboard/Dashboard";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children : [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
        }
    ]
    },
  ]);

  export default router