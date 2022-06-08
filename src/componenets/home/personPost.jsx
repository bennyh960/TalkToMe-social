import React from "react";
import RatingComponnent from "../rating/rating";

export default function OneUserPost({ users }) {
  const randUser = Math.floor(Math.random() * users.length);
  const userToShow = users[randUser];
  if (userToShow === undefined) {
    console.log("User num :", randUser);
    return <div>Error 151</div>;
  }
  return (
    <div className="random-post">
      <div>
        <h2>{userToShow.name + " " + userToShow.lastName}</h2>
        <h2>Background:</h2>
        {userToShow.background}
        <h2>About</h2>
        {userToShow.aboutMe}
        <h3>Rating:</h3>
        {console.log(userToShow)}
        <RatingComponnent rating={userToShow.rating} size={15} />
      </div>
    </div>
  );
}
