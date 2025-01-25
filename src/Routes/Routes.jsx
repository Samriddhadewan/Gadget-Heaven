import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout/Mainlayout";
import Dashboard from "../Components/Dashboard/Dashboard";
import Home from "../Components/Home/Home";
import Statistics from "../Components/Statistics/Statistics";

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
        },
        {
            path: "/statistics",
            element: <Statistics />
        }
    ]
    },
  ]);

  export default router