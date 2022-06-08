import React from "react";
import "./visitLogo.css";

export default function VisitLogo({ userShow, showImg }) {
  return (
    <div className="post-name-logo-img-container">
      <div>
        <h2>{userShow.name + " " + userShow.lastName}</h2>
        <br />
        {showImg && <img src={userShow.photoProfile} alt="post-img" />}
      </div>
      <div className="logo-link-container">
        <div className="logo-link"></div>
      </div>
    </div>
  );
}
