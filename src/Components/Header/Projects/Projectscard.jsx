import React from "react";
import "./projectscard.css";



export default function Projectscard(props) {
  return (
    <div className="projectscard">
      <div className="picture">
        <img src={props.image} alt={props.alt}></img>
      </div>
      <div className="discription">
        <p>{props.description}</p>
      </div>
    </div>
  );
}
