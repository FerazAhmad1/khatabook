import React from "react";
import { useRef } from "react";
const ForgotPassword = () => {
  const InputSendLinkTo = useRef();
  const sendlinkHandler = async () => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDQCWs9SI07zAWukmPD860hEMGb4ks4E8o",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: InputSendLinkTo.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <input placeholder="Enter your registerd email" ref={InputSendLinkTo} />
      <button onClick={sendlinkHandler}>Send link</button>
    </div>
  );
};

export default ForgotPassword;
