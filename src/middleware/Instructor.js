import React from "react";
import { Outlet,Navigate } from "react-router-dom";
import { getAuthUser } from "../helper/Storage";

const Instructor = () => {
  const auth = getAuthUser();
  return <>
    { auth && auth.role === '2' ? <Outlet/> : <Navigate to = {"/"}/>}</>;
  
};
export default Instructor;