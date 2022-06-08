import React from "react";
import { Rating } from "react-simple-star-rating";
import "./rating.css";

export default function RatingComponnent(props) {
  //   const [rating, setRating] = useState(2); // initial rating value
  //   console.log(props.rating);
  //   const handleRating = () => {
  //     setRating(3);

  //   };

  return (
    <div className="rating">
      <Rating size={props.size} readonly initialValue={props.rating} />
      {/* <Rating ratingValue={rating} size={10} readonly onClick={handleRating} initialValue={2} /> */}
      {/* <Rating ratingValue={rating} /> */}
    </div>
  );
}
