import React from "react";
import "./about.css";
import teamImg from "../../assets/images/teamA.jpg";

export default function About() {
  return (
    <div className="about-container">
      <div className="box-1">
        <h1 className="title-about">Our Story</h1>
        <img src={teamImg} alt="our team" className="team-img" />
        <p className="subhead">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic adipisci, ratione voluptate ea
          soluta voluptas molestiae velit possimus neque, porro ex est consectetur sint magni necessitatibus maxime qui
          accusantium nam unde exercitationem distinctio! Aliquam nulla officia eligendi numquam ipsa ex molestias,
          error facere dolores!
        </p>
      </div>
    </div>
  );
}
