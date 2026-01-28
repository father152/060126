import React from "react";
import "./projectscard.css";
import { Link } from "react-router-dom";


export default function Projectscard(props) {
  return (
    <div className="projectscard">
      <div className="picture">
        <img src={props.image} alt={props.alt}></img>
        <Link to={props.to}> <button>More information</button></Link>
      </div>
     
      <div className="discription">
        <p>{props.description}</p>
      </div>
    </div>
  );
}
