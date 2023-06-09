import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import ErrorPage from "../pages/Errorpage";
import Loginpage from "../pages/Loginpage/Loginpage";
import Register from "../pages/Registerpage/Register";
import Home from "../pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/login",
        element: <Loginpage></Loginpage>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>, 
    children: [
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },
      // {
      //   path: 'mycart', 
      //   element: <MyCart></MyCart>
      // },
      // {
      //   path:'payment',
      //   element: <Payment></Payment>
      // },
      // // admin routes
      // {
      //   path: 'adminhome',
      //   element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      // },
      // {
      //   path: 'allusers', 
      //   element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      // },
      // {
      //   path: 'addItem',
      //   element: <AdminRoute><AddItem></AddItem></AdminRoute>
      // },
      // {
      //   path: 'manageitems',
      //   element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      // }
    ]
  }
]);
