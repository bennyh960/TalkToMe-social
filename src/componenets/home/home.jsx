import React from "react";
import "./home.css";

export default function Home({ users }) {
  //   console.log(users.slice(1));

  return (
    <div className="homepage-container">
      <PersonCard />
    </div>
  );
}

function PersonCard() {
  return (
    <div className="person-card-container">
      <img
        src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/254.jpg"
        alt="card img"
        className="card-img"
      />
      <div className="background">background</div>
      <div className="rating">rating</div>
    </div>
  );
}
