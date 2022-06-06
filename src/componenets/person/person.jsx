import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { loginContext } from "../../App";
import "./person.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

import ChatMassanger from "../chat/chat";
// todo delete this import

export default function Person() {
  const [showChat, setShowChat] = useState(false);
  const { user, users } = useContext(loginContext);
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
    // areaOfIntrest,
    // massenger,
  } = user;
  //   console.log(user);

  return (
    <div className="personal-page-container">
      <div className="personal-detailes-container">
        <div className="description-personal-details">
          <div>
            <span className="bold-text"> Full Name:</span> {name + " " + lastName}
          </div>
          <div>
            <span className="bold-text">User Name:</span> {userName}
          </div>
          <div>
            <span className="bold-text">City:</span> {city}
          </div>
          <div>
            <span className="bold-text">Country:</span> {country}
          </div>
          <div>
            <span className="bold-text">Phone:</span> {phone}
          </div>
          <div>
            <span className="bold-text">Age:</span> {age}
          </div>
          <div>
            <span className="bold-text">Background:</span> {background}
          </div>
          <div>
            <span className="bold-text">Job titles:</span> {jobTitle}
          </div>
          <div>
            <span className="bold-text">About Me:</span> {aboutMe}
          </div>
          {/* <div>Intrests:{areaOfIntrest}</div> */}
        </div>
        <div>
          <img src={photoProfile} alt={userName} className="user-large-photo" />
        </div>
      </div>
      <div>
        <button onClick={() => setShowChat((p) => !p)}>
          chat <FontAwesomeIcon icon={faComment} className="bell-icon" />
        </button>
      </div>

      {showChat && <ChatMassanger user={user} users={users} closeBtn={() => setShowChat((p) => !p)} />}
    </div>
  );
}
