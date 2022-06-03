import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { loginContext } from "../../App";
import "./person.css";

export default function Person() {
  const { user } = useContext(loginContext);
  const {
    name,
    lastName,
    userName,
    age,
    phone,
    photoProfile,
    aboutMe,
    city,
    country,
    background,
    jobTitle,
    areaOfIntrest,
  } = user;
  //   console.log(user);

  return (
    <div>
      <div>hello {userName}</div>
      <div>User Name: {name}</div>
      <div>Phone {phone}</div>
      <p>About Me:{aboutMe}</p>
      <p>Age: {age}</p>
      <img src={photoProfile} alt={userName} />
    </div>
  );
}
