import React from "react";
import VisitLogo from "../visitMeLogo/visitLogo";
// import "./people.css";

export default function People({ user, users, visitId, contactFriend }) {
  const currentUserVisting = users.find((u) => u.id === visitId.toString());

  const { userName, age, phone, photoProfile, aboutMe, city, country, background } = currentUserVisting;
  // console.log(typeof currentUserVisting.userType);
  return (
    <div className="personal-page-container">
      <div className="personal-detailes-container">
        <div className="description-personal-details">
          {/* <PersonOneData dataName="Full Name" dataX={name} dataY={lastName} user={user} /> */}
          <VisitLogo userShow={currentUserVisting} showImg={false} loginUser={user} contactFriend={contactFriend} />
          {/* <PersonOneData dataName="User Name" dataX={userName} user={user} /> */}
          <PersonOneData dataName="Age" dataX={age} />
          <PersonOneData dataName="Country" dataX={country} />
          <PersonOneData dataName="City" dataX={city} />
          <PersonOneData dataName="Phone" dataX={phone} />
          <PersonOneData dataName="Background" dataX={background} />
          {/* <PersonOneData dataName="Job Title" dataX={jobTitle} /> */}
          <PersonOneData dataName="About Me" dataX={aboutMe} />
        </div>
        <div>
          <img src={photoProfile} alt={userName} className="user-large-photo" />
        </div>
      </div>
    </div>
  );
}

function PersonOneData({ dataName, dataX, dataY }) {
  return (
    <div className="person-one-data">
      <div>
        <span className="bold-text">{dataName}:</span> {dataY ? dataX + " " + dataY : dataX}
      </div>
    </div>
  );
}
