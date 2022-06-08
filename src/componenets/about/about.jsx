import React from "react";
import "./about.css";
import teamImg from "../../assets/images/teamA.jpg";
import p1 from "../../assets/images/p1.jpg";
import p2 from "../../assets/images/p2.jpg";
import p3 from "../../assets/images/p3.jpg";

export default function About() {
  return (
    <div className="about-container">
      <div className="box-1">
        <h1 className="title-about">Our Story</h1>
        <img src={teamImg} alt="our team" className="team-img" />
        <div>
          <p className="subhead">
            Lorem, ipsum doconsectetur sint magni necessitatibus maxime qui accusantium nam unde exercitationem dist
            accusantium nam unde exercitationem dist soluta voluptas molestiae velit possimus neque, porro ex est
            consectetur sint magni necessitatibus maxime qui accusantium nam unde exercitationem distinctio! Aliquam
            nulla officia eligendi numquam ipsa ex molestias, error facere dolores!
          </p>
        </div>
      </div>
      <div className="box-2">
        <Lorem img={p1} title="Mission" />
        <Lorem img={p2} title="Goal" changeDir="change-dir" />
        <Lorem img={p3} title="Values" />
      </div>
    </div>
  );
}

function Lorem({ img, title, changeDir }) {
  return (
    <div className={changeDir} style={{ textAlign: "center" }}>
      <img src={img} alt="lorem-img" className="lorem-img" />
      <div className="lorem-text">
        <h3>{title}</h3>
        <p>
          officia, unde quos veni molestiae minima autem ut incidunt possimus voluptas reiciendis alias delectus dolor
          adipisci eaque tempore officia, perferendis quibusdam provident modi? Necessitatibus enim et rem quae id
          corporis reiciendis illo hic. Deleniti, temporibus labore. Eveniet, laboriosam temporibus. Rem officiis
          possimus fuga quos pariatur atque.
        </p>
      </div>
    </div>
  );
}
