import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <div>Logo</div>
      <div className="navbar-links">
        <Link to={"/"}>HomePage</Link>
        <Link to={"/update"}>Seller Update</Link>
        {/* <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact-Us</Link> */}
      </div>
    </div>
  );
}
