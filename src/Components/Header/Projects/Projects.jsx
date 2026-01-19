import React from 'react'
import "./projects.css"
import { Link } from "react-router-dom";
import home from "../../Image/home.png";  


export default function Projects() {
  return (
    <div className="projects">
        <h2>Projects</h2>
<div className='projects-container'>

    
</div>
<div className="back">
        <Link to="/">
          <img src={home} alt=""></img>
        </Link>
      </div>
        </div>
  )
}
