import React from "react";
import "./error.css";

export default function Error(props) {
  return (
    <div className="error-pop">
      <h2>{props.error}</h2>
    </div>
  );
}
