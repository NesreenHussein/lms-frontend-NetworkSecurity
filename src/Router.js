import { Navigate, createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import Login from "./Auth/login";
//import Register from "./pages/auth/Register";
import ShowCourse from "./courses/ShowCourse";
import RegisterForm from "./courses/RegisterForm";
import Home from "./home/Home";
import EnrolledStudents from "./Instructor/EnrolledStudent";
//import AssignGrades from "./AssignGrade";
//import InstructorHome from "./Instructor/InstructorHome";
import AssignGrades from "./Instructor/AssignGrade";
import User from "./middleware/User";
import Instructor from "./middleware/Instructor";
import Student from "./middleware/Student";
import Signup from "./Auth/Signup";
import ShowCourses from "./Admin/ShowCourseAdmin";
import UpdateC from "./Admin/Update_Course";
import ShowInstructors from "./Admin/Add_Inst";
import UpdateI from "./Admin/Update_Inst";
import DeleteI from "./Admin/Del_Inst";
import DeleteC from "./Admin/Del_Course";
import Assign from "./Admin/Assign_I_To_C";
import Admin from "./middleware/Admin";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <Admin />,
        children: [
          {
            path: "/manageCourse",
            element: <ShowCourses />,
          },
          {
            path: "/Add_Instructor",
            element: <ShowInstructors />,
          },
          {
            path: "/Update_Course",
            element: <UpdateC />,
          },
          {
            path: "/Update_Instructor",
            element: <UpdateI />,
          },
          {
            path: "/Delete_Instructor",
            element: <DeleteI />,
          },
          {
            path: "/Delete_Course",
            element: <DeleteC />,
          },
          {
            path: "/AssigIns",
            element: <Assign />,
          },
        ],
      },
      {
        element: <User />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/signup",
            element: <Signup />,
          },
        ],
      },
      {
        element: <Instructor />,
        children: [
          {
            path: "/assign",
            element: <AssignGrades />,
          },
          {
            path: "/enrolled",
            element: <EnrolledStudents />,
          },
        ],
      },
      {
        element: <Student />,
        children: [
          {
            path: "/courses",
            element: <ShowCourse />,
          },
          {
            path: "/register",
            element: <RegisterForm />,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
    ],
  },
]);
