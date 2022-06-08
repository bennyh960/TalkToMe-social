import React from "react";

export default function OneUserPost({ users }) {
  const randUser = Math.ceil(Math.random() * users.length);
  const userToShow = users[randUser];
  return (
    <div className="random-post">
      <div>
        <h2>{userToShow.name + " " + userToShow.lastName}</h2>
        <h2>Background:</h2>
        {userToShow.background}
        <h2>About</h2>
        {userToShow.aboutMe}
        <h3>Rating:</h3>
      </div>
    </div>
  );
}
