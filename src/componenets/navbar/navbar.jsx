import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import DrawTheUnreadMassage from "./totalUnreadMsg";

export default function NavBar({ user, unreadMsg, users }) {
  const [showUnreadMsg, setShowUnread] = useState(false);

  return (
    <div className="navbar">
      <Link to={"/about"}>
        <div className="logo">
          <img src={logo} alt="" height={"35rem"} />
          TalkToMe.il
        </div>
      </Link>
      {user.email && (
        <div className="navbar-links">
          {/* <Link to={"/users/" + user.name}> */}
          <Link to={`/users/${user.name}/${user.id}`}>
            <img src={user.photoProfile} alt="profile avatar navbar" className="profile-img-navbar" />
          </Link>
          <div
            className="notification"
            onMouseOver={() => setShowUnread(true)}
            onMouseLeave={() => setShowUnread(false)}
          >
            <FontAwesomeIcon icon={faBell} className="bell-icon" />
            {unreadMsg.current > 0 && <div className="notification-num">+{unreadMsg.current}</div>}
          </div>
          {showUnreadMsg && <DrawTheUnreadMassage user={user} users={users} />}
        </div>
      )}
    </div>
  );
}
