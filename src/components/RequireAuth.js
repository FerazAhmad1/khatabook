import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedin);
  console.log(isLoggedIn);
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RequireAuth;
