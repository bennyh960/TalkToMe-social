import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function NavBar({ userName }) {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" height={"35rem"} />
        TalkToMe.il
      </div>
      <div className="navbar-links">
        {/* <Link to={"/"}>HomePage</Link> */}
        {/* <Link to={"/update"}>Seller Update</Link> */}
        <div>
          Welcome{" "}
          <span className="small-font">{userName === "" || userName.name === "" ? "Guest" : userName.name}</span>
        </div>

        {/* <div>Search</div>
        <div>Login</div> */}
      </div>
    </div>
  );
}
