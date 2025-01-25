import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout/Mainlayout";
import Dashboard from "../Components/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children : [
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
        }
    ]
    },
  ]);

  export default router