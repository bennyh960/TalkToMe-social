import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function NavBar({ user }) {
  // console.log(user);
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" height={"35rem"} />
        TalkToMe.il
      </div>
      {user.email && (
        <div className="navbar-links">
          <Link to={"/users/" + user.name}>
            <img src={user.photoProfile} alt="profile avatar navbar" className="profile-img-navbar" />
          </Link>
          <div className="notification">
            <FontAwesomeIcon icon={faBell} className="bell-icon" />
            <div className="notification-num">+3</div>
          </div>
        </div>
      )}
    </div>
  );
}
