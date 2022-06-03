import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import usersAPI from "./api/usersAPI";
import "./App.css";
import NavBar from "./componenets/navbar/navbar";
import Spinner from "./componenets/spinner/spinner";
import LoginForm from "./componenets/login/login";
import Error from "./componenets/error/error";
import Navbarsec from "./componenets/navBarSecondary/navbarsec";
import RegisterForm from "./componenets/register/register";
import Person from "./componenets/person/person";
// import { data } from "./draft/draft";
import adminPic from "./assets/images/admin_key.png";

export const loginContext = React.createContext();

export default function App() {
  // * Utils Variables
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorGeneral, setErrorGeneral] = useState("");

  // * Login variables
  const ADMIN = {
    email: "bennyh960@gmail.com",
    password: "123",
    name: "ADMIN",
    photoProfile: adminPic,
  };
  const [users, setUsers] = useState([ADMIN]);
  const [displayLogin, setDisplayLogin] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // throw new Error();
        setIsLoading(true);
        const { data } = await usersAPI.get();
        setUsers([ADMIN, ...data]);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setErrorGeneral(error.massage);
      }
    };
    fetchUsers();
    // console.log(data);
  }, []);

  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [registerDisplay, setRegisterDisplay] = useState(true);

  const logInObj = {
    users,
    user,
    setUser,
    isLogedIn,
    setIsLogedIn,
    displayLogin,
    setDisplayLogin,
  };

  // !TEST PURPOSE ONLY
  // useEffect(() => {
  //   console.log(user);
  // });

  const handleRegisterBtn = () => {
    setRegisterDisplay((prev) => !prev);
  };
  return (
    <>
      <Router>
        <loginContext.Provider value={logInObj}>
          {/* {console.log(users)} */}
          <NavBar user={user} />
          <Navbarsec handleRegisterBtn={handleRegisterBtn} />
          {isLoading && <Spinner />}

          {/* {localStorage.getItem(user) === "" && <LoginForm />} */}
          <LoginForm />
          {registerDisplay && <RegisterForm users={users} />}
          {isError && <Error error={errorGeneral} />}
          <Route path={"/users/" + user.name} exact>
            <Person />
          </Route>
        </loginContext.Provider>
      </Router>
    </>
  );
}
