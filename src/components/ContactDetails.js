import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import "./ContactDetails.css";
const ContactDetails = () => {
  const [update, setUpdate] = useState(true);
  const nameInput = useRef();
  const photoInput = useRef();
  const token = useSelector((state) => state.auth.token);
  const clickHandler = async (event) => {
    event.preventDefault();
    if (update && nameInput.current.value && photoInput.current.value) {
      let response = await fetch(
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
      nameInput.current.value = photoInput.current.value = "";
      const data = await response.json();
      console.log(data);
      setUpdate(false);
    } else {
      let response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDQCWs9SI07zAWukmPD860hEMGb4ks4E8o",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: token,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      nameInput.current.value = data.users[0].displayName;
      photoInput.current.value = data.users[0].photoUrl;
    }
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
        <button onClick={clickHandler}>{update ? "update" : "Edit"}</button>
      </div>
    </div>
  );
};

export default ContactDetails;
