import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import usersAPI from "./api/usersAPI";
import "./App.css";
import NavBar from "./componenets/navbar/navbar";
import Spinner from "./componenets/spinner/spinner";
import LoginForm from "./componenets/login/login";
import Error from "./componenets/error/error";

export const loginContext = React.createContext();

export default function App() {
  // * Utils Variables
  const [isLoading, setIsLOading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorGeneral, setErrorGeneral] = useState("");

  // * Login variables
  const ADMIN = { email: "bennyh960@gmail.com", password: "123", name: "ADMIN" };
  const [users, setUsers] = useState([ADMIN]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // throw new Error();
        setIsLOading(true);
        const { data } = await usersAPI.get();
        setUsers([ADMIN, ...data]);
        setIsLOading(false);
      } catch (error) {
        setIsError(true);
        setErrorGeneral(error.massage);
      }
    };
    fetchUsers();
  }, []);

  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [isLogedIn, setIsLogedIn] = useState(false);

  const logInObj = {
    users,
    user,
    setUser,
    isLogedIn,
    setIsLogedIn,
  };

  return (
    <loginContext.Provider value={logInObj}>
      <NavBar userName={user.name} />
      {isLoading && <Spinner />}
      <LoginForm />
      {isError && <Error error={errorGeneral} />}
    </loginContext.Provider>
  );
}
