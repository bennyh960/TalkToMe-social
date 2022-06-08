import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import logo from "../../assets/images/logo.png";
import { loginContext } from "../../App";

export default function LoginForm() {
  const [isRemmberUser, setRemmberUser] = useState(false);
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [errorLogin, setLoginError] = useState("");
  const { users, user, setUser, isLogedIn, setIsLogedIn, displayLogin, setDisplayLogin } = useContext(loginContext);

  useEffect(() => {
    const checkOnLocalUser = localStorage.getItem("user");
    if (checkOnLocalUser) {
      setUser(JSON.parse(checkOnLocalUser));
      setIsLogedIn(true);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const LogIn = ({ email, password }) => {
    users.forEach((userIdx) => {
      if (email === userIdx.email && password === userIdx.password) {
        console.log("loged in");
        setUser(userIdx);
        setIsLogedIn(true);
        console.log(userIdx);
      }
    });

    if (!user) {
      setLoginError("Wrong Detailes");
      setTimeout(() => {
        setLoginError("");
      }, 1000);
    }
  };

  function submitHandler(e) {
    e.preventDefault();
    LogIn(details);
    setDetails({ name: "", email: "", password: "" });
  }

  function remmberUserOnLocalStorage() {
    console.log("set user at local storage");
    localStorage.setItem("user", JSON.stringify(user));
  }

  isRemmberUser && isLogedIn && remmberUserOnLocalStorage();

  if (!displayLogin || isLogedIn) {
    return <div></div>;
  }
  return (
    <div className="container">
      <div className="form-title">
        <div className="draw-x" onClick={() => setDisplayLogin(false)}></div>
        <div>Login Website</div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <form className="form-container" onSubmit={(e) => submitHandler(e)}>
        {errorLogin === "" ? <h2>Login</h2> : <h2>{errorLogin}</h2>}

        <div className="form-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={details.password}
            onChange={(e) => setDetails({ ...details, password: e.target.value })}
          />
        </div>
        <div className="remmber-checkbox">
          <input
            type="checkbox"
            id="remmberUser"
            checked={isRemmberUser}
            // value={details.password}
            onChange={(e) => {
              setRemmberUser((prev) => !prev);
              // console.dir(e.target.value);
            }}
          />
          <label>Remmber me.</label>
        </div>
        <button className="login-btn">Login</button>
      </form>
    </div>
  );
}
