import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

import "./Login.css";

const Login = () => {
  const [login, setLogin] = useState(false);
  const InputEmail = useRef();
  const InputPassword = useRef();
  const InputConfirmPassword = useRef();
  const navigate = useNavigate();
  const auth = useAuth();
  const modeChangeHandler = () => {
    setLogin((prevState) => !prevState);
  };
  const authHandler = async () => {
    setLogin(false);
    let email = InputEmail.current.value;
    let password = InputPassword.current.value;

    if (!login) {
      let confirmPassword = InputConfirmPassword.current.value;
      if (!email || !password || !confirmPassword) {
        alert("please fill the all fields");
        return;
      } else {
        if (password !== confirmPassword) {
          alert("password and confirm password are not matching");
          return;
        }
        try {
          const response = await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQCWs9SI07zAWukmPD860hEMGb4ks4E8o",
            {
              method: "POST",
              body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.ok) {
            setLogin(true);

            InputConfirmPassword.current.value =
              InputEmail.current.value =
              InputPassword.current.value =
                "";

            navigate("/profile");
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    } else {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDQCWs9SI07zAWukmPD860hEMGb4ks4E8o",
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        console.log(data);
        if (response.ok) {
          console.log("user login success fully");
          navigate("/profile");
          localStorage.setItem("email", email);
          localStorage.setItem("token", data.idToken);
          auth.login(data.idToken);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="signup">
        <div className="signup__title">
          <h1>Signup</h1>
        </div>
        <div className="signup__inputs">
          <input placeholder="Email" ref={InputEmail} type="text" />
          <input placeholder="Password" ref={InputPassword} />
          {!login && (
            <input placeholder="Confirm Password" ref={InputConfirmPassword} />
          )}
          {
            <button onClick={authHandler} className="signup__btn">
              {`${!login ? "SignUp" : "Login"}`}
            </button>
          }
        </div>
      </div>
      <div className="modechange">
        {!login && (
          <button onClick={modeChangeHandler} className="login__btn">
            Have a account?Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
