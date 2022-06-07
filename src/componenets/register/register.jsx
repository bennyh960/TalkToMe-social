import React, { useState } from "react";
import "./register.css";
// import { loginContext } from "../../App";
import usersAPI from "../../api/usersAPI";
import Loader1 from "../loader/loader";
import PasswordMeter from "./passMeter";

export default function RegisterForm({ users }) {
  const [displayRegister, setDisplayRegister] = useState(true);

  const [error, setError] = useState("");
  const [msgColor, setMsgColor] = useState("");

  const [newUserLogin, setNewUserLogin] = useState({ email: "", password: "" });
  const [confirmPassword, setconfirmPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [isLoading, setIsloading] = useState(false);

  const handleNote = (massage, time, color) => {
    setError(massage);
    setMsgColor(color);
    setTimeout(() => {
      setError("");
    }, time);
  };

  function submitHandler(e) {
    e.preventDefault();

    const emailVeirfication = !users.find((user) => user.email === newUserLogin.email);
    if (confirmPassword !== newUserLogin.password) {
      handleNote("Unmatched passwords", 1000, "red");
    } else if (emailVeirfication) {
      console.log("Email verification confirmed");
      registerNewUser(newUserLogin);
    } else if (!emailVeirfication) {
      console.log("Email verification Failed");

      handleNote(`${newUserLogin.email} is allready active user. `, 2500, "red");
    }
    setconfirmPassword("");
  }

  //* Post request
  const registerNewUser = async (newUserObj) => {
    setIsloading((prev) => !prev);
    try {
      await usersAPI.post("", newUserObj);
      console.log("added new user to API", newUserObj);
      //* update UI
      handleNote("User registered successfully", 3500, "green");
      setIsloading((prev) => !prev);
      setTimeout(() => {
        setDisplayRegister(false);
      }, 2000);
      // todo consider to add email verification link
    } catch (error) {
      console.log("Post Error:", error);
      setIsloading((prev) => !prev);
    }
  };

  //* show/hide password
  function togglePasswordType() {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  if (!displayRegister) {
    return <div></div>;
  }
  return (
    <div className="container">
      <div className="form-title">
        <div className="draw-x" onClick={() => setDisplayRegister(false)}></div>
        <div>Sign In New User</div>
        <img src="./logo192.png" alt="logo" className="logo" />
      </div>
      <form className="form-container" onSubmit={(e) => submitHandler(e)}>
        {error === "" ? <h2>Sign Up</h2> : <h3 style={{ color: msgColor }}>{error}</h3>}
        <div className="form-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={newUserLogin.email}
            onChange={(e) => setNewUserLogin({ ...newUserLogin, email: e.target.value })}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password:</label>
          <input
            type={passwordType}
            id="password"
            value={newUserLogin.password}
            onChange={(e) => setNewUserLogin({ ...newUserLogin, password: e.target.value })}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Confirm Password:</label>
          <input
            type={passwordType}
            id="confirmed-password"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input type="checkbox" onClick={togglePasswordType} /> Show Password
        </div>
        <PasswordMeter password={newUserLogin.password} />
        <button className="login-btn">Sign in</button>
        {isLoading && <Loader1 />}
      </form>
    </div>
  );
}
