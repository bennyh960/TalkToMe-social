import React, { useEffect, useState } from "react";
import PersonCard from "../home/personCard";
import "./search.css";

export default function Search({ users, visitMeFunc }) {
  const [tempUsers, setTempUsers] = useState(users.slice(1));
  const [inputSearch, setInputSearch] = useState("");
  const [searchCategory, setSearchCategory] = useState("name");

  useEffect(() => {
    setTempUsers(users.slice(1));
    // eslint-disable-next-line
  }, [searchCategory]);

  function drawUsers() {
    return tempUsers.map((userToShow) => {
      return (
        <React.Fragment key={userToShow.id}>
          <PersonCard
            img={userToShow.photoProfile}
            name={userToShow.name}
            background={userToShow.background}
            rating={userToShow.rating}
            id={userToShow.id}
            visitMe={visitMeFunc}
          />
        </React.Fragment>
      );
    });
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  // }

  function handleInput(value) {
    // console.log(value);
    setInputSearch(() => value);
    const searchUsers = users.slice(1).filter((u) => u[searchCategory].toLowerCase().includes(value.toLowerCase()));
    setTempUsers(() => searchUsers);
    // console.log(x);
  }

  function handleSelectValue(category) {
    console.log(category);
    setSearchCategory(category);
    setInputSearch("");
  }

  return (
    <div className="search-people-container">
      <div className="search-container">
        {/* <form onSubmit={(e) => handleSubmit(e)}> */}
        <form>
          <select name="search" id="searchCat" onClick={(e) => handleSelectValue(e.target.value)}>
            <option value="name">Name</option>
            <option value="background">Background</option>
            <option value="country">Country</option>
          </select>
          <input type="text" value={inputSearch} onChange={(e) => handleInput(e.target.value)} />
          {/* <button>search</button> */}
        </form>
      </div>
      <div className="show-people">{drawUsers()}</div>
    </div>
  );
}
