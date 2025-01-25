import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout/Mainlayout";
import Dashboard from "../Components/Dashboard/Dashboard";
import Home from "../Components/Home/Home";
import Statistics from "../Components/Statistics/Statistics";
import GadgetCards from "../Components/GadgetCards/GadgetCards";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children : [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch('../categories.json'),
            children: [
              {
                path: "/",
                element: <GadgetCards></GadgetCards>,
                loader: ()=> fetch('../gadgets.json')
              },
              {
                path: "/category/:category",
                element: <GadgetCards></GadgetCards>,
                loader: ()=> fetch('../gadgets.json')
              },
            ]
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