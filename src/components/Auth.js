import React, { useState, useEffect } from "react";
import { useContext } from "react";

// const Context = React.createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(null);

//   const mode = !!token;

//   const loginHandler = (token) => {
//     setToken(token);
//   };

//   const logOutHandler = () => {
//     setToken(null);
//   };
//   useEffect(() => {
//     if (localStorage.getItem("email")) {
//       loginHandler(localStorage.getItem("token"));
//     }
//   }, []);
//   const contextValue = {
//     isLoggedIn: mode,
//     token: token,
//     login: loginHandler,
//     logOut: logOutHandler,
//   };

//   return <Context.Provider value={contextValue}>{children}</Context.Provider>;
// };

// export const useAuth = () => {
//   return useContext(Context);
// };
