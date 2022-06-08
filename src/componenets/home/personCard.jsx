import React from "react";
import { Link } from "react-router-dom";

export default function PersonCard({ img, name }) {
  return (
    <div className="person-card-border">
      <Link to={`/users/${name}`}>
        <div className="person-card-container">
          <img src={img} alt="card img" className="card-img" />
          <div className="card-name">{name}</div>
          <div className="background">background</div>
          <div className="rating">rating</div>
        </div>
      </Link>
    </div>
  );
}
