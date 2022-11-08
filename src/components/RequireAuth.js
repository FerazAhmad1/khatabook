import React from "react";
import { useAuth } from "./Auth";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();
  console.log(location);

  if (!auth.isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RequireAuth;
