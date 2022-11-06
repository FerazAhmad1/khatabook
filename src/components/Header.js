import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
const Header = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const logoutbutton = () => {
    auth.login(null);
    localStorage.clear();
    navigate("/");
  };
  if (!auth.isLoggedIn) return;
  return <button onClick={logoutbutton}>LogOut</button>;
};

export default Header;
