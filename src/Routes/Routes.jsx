import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import ErrorPage from "../pages/Errorpage";
import Loginpage from "../pages/Loginpage/Loginpage";
import Register from "../pages/Registerpage/Register";
import Home from "../pages/Registerpage/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Loginpage></Loginpage>
        },
           {
            path: '/register',
            element: <Register></Register>
           }
           
       
      ]
    }

     
    
  ]);