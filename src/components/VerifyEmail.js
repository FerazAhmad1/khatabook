import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginMethod } from "../features/authSlice";

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const state = useSelector((state) => state.auth);

  const verifyEmailHandler = async () => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDQCWs9SI07zAWukmPD860hEMGb4ks4E8o",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: token,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        dispatch(loginMethod(localStorage.getItem("token")));
        console.log("yes", state);
        navigate("/form");
      } else {
        throw data.error;
      }
    } catch (error) {
      if (error.message === "INVALID_ID_TOKEN") {
        dispatch(loginMethod(null));
        localStorage.clear();
        alert("login again");
        navigate("/");
      }
    }
  };
  return <button onClick={verifyEmailHandler}>Verify Email</button>;
};

export default VerifyEmail;
