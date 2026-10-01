import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Gallery from "../Gallery/Gallery";
import AboutUs from "../Pages/Home/AboutUs/AboutUs";
import Footer from "../Pages/Home/Shared/Footer/Footer";
import Panels from "../Pages/Panels/Panels";
import Admin from "../Admin/Admin";
import GcLinkCollection from "../Pages/Register/GcLinkCollection";
import Informativa from "../Pages/Home/Event/Informativa";

import ITCAdmin from "../Pages/ITCAdmin/ITCAdmin";

 export const router = createBrowserRouter([
    {
      path: 'register',
      element: <Register></Register>
    },
    {
      path: 'itcadmin',
      element: <ITCAdmin></ITCAdmin>
    },
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'gallery',
          element: <Gallery></Gallery>
        },
        {
          path:'about',
          element:<AboutUs></AboutUs>
        },
        {
          path:'footer',
          element: <Footer></Footer>
        },
        {
          path:'panels',
          element:<Panels></Panels>
        },
        {
          path:'gcLink',
          element:<GcLinkCollection></GcLinkCollection>
        },
        {
          path:'admin',
          element:<Admin></Admin>
        },
        {
          path: 'informativa',
          element:<Informativa></Informativa>
        },
       
      ]
    },
  ]);
