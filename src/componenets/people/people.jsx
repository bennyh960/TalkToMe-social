import React from "react";
import VisitLogo from "../visitMeLogo/visitLogo";
// import "./people.css";

export default function People({ user, users, visitId }) {
  const currentUserVisting = users.find((u) => u.id === visitId.toString());

  const { userName, age, phone, photoProfile, aboutMe, city, country, background, jobTitle } = currentUserVisting;

  return (
    <div className="personal-page-container">
      <div className="personal-detailes-container">
        <div className="description-personal-details">
          {/* <PersonOneData dataName="Full Name" dataX={name} dataY={lastName} user={user} /> */}
          <VisitLogo userShow={currentUserVisting} showImg={false} />
          {/* <PersonOneData dataName="User Name" dataX={userName} user={user} /> */}
          <PersonOneData dataName="Age" dataX={age} user={user} />
          <PersonOneData dataName="Country" dataX={country} user={user} />
          <PersonOneData dataName="City" dataX={city} user={user} />
          <PersonOneData dataName="Phone" dataX={phone} user={user} />
          <PersonOneData dataName="Background" dataX={background} user={user} />
          <PersonOneData dataName="Job Title" dataX={jobTitle} user={user} />
          <PersonOneData dataName="About Me" dataX={aboutMe} user={user} />
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
