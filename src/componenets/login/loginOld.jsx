import React, { useState } from "react";
import "./login.css";

export default function LoginForm({ login, error }) {
  const [displayLogin, setDisplayLogin] = useState(true);
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  function submitHandler(e) {
    e.preventDefault();
    login(details);
  }

  if (!displayLogin) {
    return <div></div>;
  }
  return (
    <div className="container">
      <div className="form-title">
        <div className="draw-x" onClick={() => setDisplayLogin(false)}></div>
        <div>Login Website</div>
        <img src="./logo192.png" alt="logo" className="logo" />
      </div>
      <form className="form-container" onSubmit={(e) => submitHandler(e)}>
        {error === "" ? <h2>Login</h2> : <h3>{error}</h3>}
        <div className="form-input">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
          />
        </div>
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
        <button className="login-btn">Login</button>
      </form>
    </div>
  );
}
