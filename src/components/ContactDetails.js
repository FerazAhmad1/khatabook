import React, { useEffect, useState, useRef } from "react";
import "./ContactDetails.css";
import { useAuth } from "./Auth";

const ContactDetails = () => {
  const [update, setUpdate] = useState(false);
  const nameInput = useRef();
  const photoInput = useRef();
  const auth = useAuth();

  useEffect(() => {
    const token = auth.token;
    console.log(token);
    let response;
    const updateProfile = async function () {
      if (update) {
        setUpdate(false);
        response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:update?key=
          AIzaSyDQCWs9SI07zAWukmPD860hEMGb4ks4E8o`,
          {
            method: "POST",
            body: JSON.stringify({
              idToken: token,
              displayName: nameInput.current.value,
              photoUrl: photoInput.current.value,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
      console.log(response);
    };
    updateProfile();
  }, [update]);

  const clickHandler = () => {
    setUpdate(true);
  };
  return (
    <div className="details">
      <div className="details__title">
        <h2>Contact details</h2>
        <button className="btn">Cancel</button>
      </div>
      <div className="details__input">
        <label>Full name</label>
        <input ref={nameInput} />
        <label>Profile photo URL</label>
        <input ref={photoInput} />
      </div>
      <div>
        <button onClick={clickHandler}>update</button>
      </div>
    </div>
  );
};

export default ContactDetails;
