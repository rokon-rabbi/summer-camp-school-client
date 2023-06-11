import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import ErrorPage from "../pages/Errorpage";
import Loginpage from "../pages/Loginpage/Loginpage";
import Register from "../pages/Registerpage/Register";
import Home from "../pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClass from "../pages/Dashboard/Myclass/MyClass";
// import TotalEnrolled from "../pages/Dashboard/TotalEnrolledStudents/TotalEnrolled";
import Feedback from "../pages/Dashboard/Feedback/Feedback";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
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
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <UserHome></UserHome>,
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },

      {
        path: "myclass",
        element: <MyClass></MyClass>,
      },

      {
        path: "feedback",
        element: <Feedback></Feedback>,
      },
      {
        path: "payment",
        element: <MyEnrolledClass></MyEnrolledClass>,
      },
      // admin routes

      {
        path: "manageuser",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "manageclass",
        element: <ManageClass></ManageClass>,
      },
    ],
  },
]);
