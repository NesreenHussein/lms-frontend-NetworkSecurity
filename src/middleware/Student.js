import React from "react";
import { Outlet,Navigate } from "react-router-dom";
import { getAuthUser } from "../helper/Storage";

const Student = () => {
  const auth = getAuthUser();
  return <>
    { auth && auth.role === '3' ? <Outlet/> : <Navigate to = {"/"}/>}</>;
  
};
export default Student;