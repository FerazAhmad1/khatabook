import React from "react";
import "./ContactDetails.css";

const ContactDetails = () => {
  return (
    <div className="details">
      <div className="details__title">
        <h2>Contact details</h2>
        <button className="btn">Cancel</button>
      </div>
      <div className="details__input">
        <label>Full name</label>
        <input />
        <label>Profile photo URL</label>
        <input />
      </div>
      <div>
        <button>update</button>
      </div>
    </div>
  );
};

export default ContactDetails;
