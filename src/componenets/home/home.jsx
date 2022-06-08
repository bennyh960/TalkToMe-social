import React, { useEffect, useState } from "react";

import "./home.css";
import PersonCard from "./personCard";
import OneUserPost from "./personPost";

export default function Home({ users }) {
  const [randomIdArr, setRandomIdArr] = useState([]);

  useEffect(() => {
    setRandomIdArr(getRandomArr(10));
    const generateInterval = setInterval(() => {
      setRandomIdArr(getRandomArr(10));
    }, 5000);
    return () => {
      clearInterval(generateInterval);
    };
  }, []);

  const generateRandomCards = (users) => {
    return randomIdArr.map((id) => {
      const userToShow = users.find((user) => user.id === id.toString());
      //   console.log(userToShow, id);
      return (
        <React.Fragment key={id}>
          <PersonCard img={userToShow.photoProfile} name={userToShow.name} />
        </React.Fragment>
      );
    });
  };

  return (
    <div className="homepage-container">
      <div className="landing-page-container">
        <OneUserPost users={users} />
        <div className="people-container">{generateRandomCards(users)}</div>
      </div>
    </div>
  );
}

// * Utils for generate random array
function getRandomArr(usersLength) {
  const arrForID = [];
  //   const arrForGrid = [];
  const gridLength = 9 >= usersLength ? usersLength : 9;
  if (gridLength > usersLength) {
    console.error("Infite loop prevented");
    return "Infite loop prevented";
  }
  while (arrForID.length < gridLength) {
    const randID = Math.ceil(Math.random() * usersLength);
    // const randGrid = Math.floor(Math.random() * gridLength) + 1;
    if (arrForID.indexOf(randID) === -1) arrForID.push(randID);
    // if (arrForGrid.indexOf(randGrid) === -1) arrForGrid.push(randGrid);
    console.log(arrForID);
  }
  return arrForID;
}
