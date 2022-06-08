import React from "react";
import RatingComponnent from "../rating/rating";
import VisitLogo from "../visitMeLogo/visitLogo";
import "./personPost.css";

export default function OneUserPost({ users, user, contactFriend }) {
  const randUser = Math.floor(Math.random() * users.length);
  const userToShow = users[randUser];
  if (userToShow === undefined) {
    console.log("User num :", randUser);
    return <div>Error 151</div>;
  }
  return (
    <div className="random-post">
      <VisitLogo userShow={userToShow} showImg={true} loginUser={user} contactFriend={contactFriend} />
      <div>
        <h3>Background: </h3>
        {userToShow.background}
      </div>
      <div>
        <h2>About</h2>
        {userToShow.aboutMe}
      </div>
      <div>
        <h3>Rating:</h3>
        <RatingComponnent rating={userToShow.rating} size={15} />
      </div>
      {/* {console.log(userToShow)} */}
      {/* </div> */}
    </div>
  );
}
