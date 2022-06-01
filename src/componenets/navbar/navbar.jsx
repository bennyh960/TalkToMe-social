import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar({ userName }) {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./logo192.png" alt="" height={"25rem"} />
        TalkToMe.il
      </div>
      <div className="navbar-links">
        {/* <Link to={"/"}>HomePage</Link> */}
        {/* <Link to={"/update"}>Seller Update</Link> */}
        <div>
          User Name: <span className="small-font">{userName === "" ? "Guest" : userName}</span>
        </div>
        <div>Login</div>
        <div>Search</div>
        <div>About</div>
        <div>HomePage</div>
      </div>
    </div>
  );
}
