import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile__container">
      <div className="profile__title">
        <p>Welcome to Expense tracker</p>
      </div>
      <div className="profile__status">
        <p>your Profile is not complete</p>
        <Link to="details">Complete Now</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;
