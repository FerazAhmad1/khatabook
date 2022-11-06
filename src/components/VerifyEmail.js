import React from "react";
import { json, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

const VerifyEmail = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const token = auth.token;

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
      console.log(data, token);
      console.log(response);
      if (response.ok) {
        navigate("/profile");
      } else {
        throw data.error;
      }
    } catch (error) {
      if (error.message === "INVALID_ID_TOKEN") {
        auth.login(null);
        localStorage.clear();
        alert("login again");
        navigate("/");
      }
    }
  };
  return <button onClick={verifyEmailHandler}>Verify Email</button>;
};

export default VerifyEmail;
