import React, { useEffect, useState } from "react";
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
import Home from "./componenets/home/home";
import People from "./componenets/people/people";
import About from "./componenets/about/about";
import Search from "./componenets/search/search";
import Contact from "./componenets/contact/contact";

export const loginContext = React.createContext();

export default function App() {
  // * Utils Variables
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorGeneral, setErrorGeneral] = useState("");
  const [unreadMsg, setUnreadMsg] = useState(0);
  const [visitFrindId, setVisitFriendId] = useState("");

  // * Login variables
  const ADMIN = {
    email: "bennyh960@gmail.com",
    password: "123",
    name: "ADMIN",
    photoProfile: adminPic,
    id: "0",
  };
  const [users, setUsers] = useState([ADMIN]);
  const [displayLogin, setDisplayLogin] = useState(true);

  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [registerDisplay, setRegisterDisplay] = useState(true);
  const [openMassanger, setOpenMassanger] = useState(false);
  // const [friendID, setOpenFriendID] = useState("");

  useEffect(() => {
    console.log("update unread massages");
  }, [unreadMsg]);

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
    // console.log(unreadMsg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.massanger]);

  const logInObj = {
    users,
    user,
    setUser,
    isLogedIn,
    setIsLogedIn,
    displayLogin,
    setDisplayLogin,
    setUnreadMsg,
  };

  // !TEST PURPOSE ONLY
  // useEffect(() => {
  //   console.log(user);
  // });
  const visitMeFunc = (id) => {
    // console.log(typeof id);
    setVisitFriendId(id);
  };

  const handleRegisterBtn = () => {
    setRegisterDisplay((prev) => !prev);
  };

  function contactFriend(friendID) {
    console.log("contact friend ID:", friendID);
    setOpenMassanger(true);
    setVisitFriendId(friendID);
  }
  return (
    <>
      <Router>
        <loginContext.Provider value={logInObj}>
          {/* {console.log(users)} */}
          <NavBar user={user} unreadMsg={unreadMsg} users={users} />
          <Navbarsec handleRegisterBtn={handleRegisterBtn} />
          {isLoading && <Spinner />}
          <Route path={"/"} exact>
            {users.length > 1 && (
              <Home users={users.slice(1)} visitMeFunc={visitMeFunc} user={user} contactFriend={contactFriend} />
            )}
          </Route>
          <Route path={"/about"} exact>
            <About />
          </Route>
          <Route path={"/search"} exact>
            <Search users={users} visitMeFunc={visitMeFunc} />
          </Route>
          <LoginForm />
          {!isLogedIn && registerDisplay && <RegisterForm users={users} />}
          {isError && <Error error={errorGeneral} />}

          <Route path={`/users/${user.name}/${user.id}`} exact>
            <Person openMassanger={openMassanger} friendID={visitFrindId} SetOpenMassanger={setOpenMassanger} />
          </Route>
          <Route path={`/users/visitor/${visitFrindId}`} exact>
            <People users={users} user={user} visitId={visitFrindId} />
          </Route>
          <Route path={`/contact`} exact>
            <Contact />
          </Route>
        </loginContext.Provider>
      </Router>
    </>
  );
}
