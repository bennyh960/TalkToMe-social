import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../popUP/popup";
import "./visitLogo.css";

export default function VisitLogo({ userShow, showImg, loginUser, contactFriend }) {
  const [isPopUp, setPopUp] = useState(false);
  function showPopUp() {
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 1000);
    console.log("show pop up for not a member");
    console.log(loginUser);
  }
  return (
    <div className="post-name-logo-img-container">
      <div>
        <h2>{userShow.name + " " + userShow.lastName}</h2>
        <br />
        {showImg && (
          <Link to={`/users/visitor/${userShow.id}`}>
            <img src={userShow.photoProfile} alt="post-img" />
          </Link>
        )}
      </div>
      <div className="logo-link-container">
        {loginUser.email === "" && <div onClick={showPopUp} className="logo-link"></div>}
        {loginUser.email !== "" && (
          <Link to={`/users/${loginUser.name}/${loginUser.id}`}>
            {/* */}
            {
              <div
                onClick={() => {
                  contactFriend(userShow.id);
                }}
                className="logo-link"
              ></div>
            }
          </Link>
        )}

        {loginUser.email === "" && isPopUp && <Popup massage="This available for memebers only" />}
      </div>
    </div>
  );
}
