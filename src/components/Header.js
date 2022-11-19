import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginMethod } from "../features/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  console.log(state);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedin);
  console.log(isLoggedIn, "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
  useEffect(() => {
    console.log(state);
  }, []);
  const logoutbutton = (e) => {
    e.preventDefault();
    dispatch(loginMethod(null));
    localStorage.clear();
    navigate("/");
  };
  if (!isLoggedIn) return;
  return (
    <div>
      {console.log(state)}
      <button onClick={logoutbutton}>LogOut</button>
    </div>
  );
};

export default Header;
