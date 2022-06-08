import React from "react";
import { Link } from "react-router-dom";
import RatingComponnent from "../rating/rating";

export default function PersonCard({ img, name, background, rating, id, visitMe }) {
  return (
    <div className="person-card-border">
      <Link to={`/users/visitor/${id}`}>
        <div
          className="person-card-container"
          onClick={() => {
            // console.log(id);
            visitMe(id);
          }}
        >
          <img src={img} alt="card img" className="card-img" />
          <div className="card-name">{name}</div>
          <div className="background">{background}</div>
          <div className="rating">
            <RatingComponnent rating={rating} size={8} />
          </div>
        </div>
      </Link>
    </div>
  );
}
