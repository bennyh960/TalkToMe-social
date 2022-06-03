import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" height={"35rem"} />
        TalkToMe.il
      </div>
      <div className="navbar-links">
        {/* <div > */}
        <Link to={"/users/" + user.name}>
          <img src={user.photoProfile} alt="profile picture" className="profile-img-navbar" />
        </Link>
        <span>
          {" "}
          Welcome <span className="small-font">{user === "" || user.name === "" ? "Guest" : user.name}</span>
        </span>
        {/* </div> */}
        {/* <div>Search</div>
        <div>Login</div> */}
      </div>
    </div>
  );
}
