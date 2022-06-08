import React, { useContext } from "react";
import "./navbarsec.css";
import { Link } from "react-router-dom";
import { loginContext } from "../../App";

export default function Navbarsec(props) {
  const { user, setDisplayLogin, setUser, setIsLogedIn } = useContext(loginContext);

  function handleLoginBtn() {
    setDisplayLogin(true);
  }
  function handleLogOutBtn() {
    // console.log(user);

    setUser("");
    setIsLogedIn(false);
    setDisplayLogin(false);
    localStorage.clear();

    console.log("Loged Out");
  }

  function showHideLogin() {
    if (user.email === "" || !user) {
      return (
        <>
          <li>
            <button onClick={handleLoginBtn}>Login</button>
          </li>
          <li>
            <button onClick={props.handleRegisterBtn}>Register</button>
          </li>
        </>
      );
    } else {
      return (
        <>
          {/* fix it from name to user id */}
          <Link to={`/users/${user.name}/${user.id}`}>
            <div id="user-account">{user.name}</div>
          </Link>
          <div>
            <Link to={"/"}>
              <button onClick={handleLogOutBtn}>Logout</button>
            </Link>
          </div>
        </>
      );
    }
  }

  return (
    <>
      <nav id="container-secondary-navbar">
        <ul>
          <li className="dropdown">
            <div className="account">
              <span className="dd-title">
                Account <i className="fa fa-caret-down"></i>
              </span>
            </div>
            <div className="dd">
              <div id="up_arrow"></div>
              <ul>{showHideLogin()}</ul>
            </div>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div className="welcome-user-secnav">
          Welcome <span className="small-font">{user === "" || user.name === "" ? "Guest" : user.name}</span>
        </div>
      </nav>
    </>
  );
}
