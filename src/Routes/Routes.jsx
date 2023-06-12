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
import PrivateRoute from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
// import PrivateRoute from "./PrivateRoutes";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserRoutes from "./UserRoutes";
import InstructorRoute from "./InstructorRoute";
// import InstructorRouts from "./InstructorRouts";

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
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <UserHome></UserHome>
          </PrivateRoute>
        ),
      },
      {
        path: "addclass",
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>,
      },
      {
        path: "payment",
        element: <UserRoutes> <Payment></Payment></UserRoutes>,
      },

      {
        path: "myclass",
        element:<InstructorRoute> <MyClass></MyClass></InstructorRoute>,
      },
      {
        path: "myselectedclass",
        element: <UserRoutes><MySelectedClass></MySelectedClass></UserRoutes>,
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
        element: (
          <AdminRoutes>
            <ManageUser></ManageUser>
          </AdminRoutes>
        ),
      },
      {
        path: "manageclass",
        element: <AdminRoutes> <ManageClass></ManageClass></AdminRoutes>,
      },
    ],
  },
]);
