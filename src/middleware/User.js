import React from "react";
import { Outlet,Navigate } from "react-router-dom";
import { getAuthUser } from "../helper/Storage";

const User = () => {
  const auth = getAuthUser();
  return <>
    { !auth? <Outlet/> : <Navigate to = {"/"}/>}</>;
  
};
export default User;