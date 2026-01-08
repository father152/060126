import React from 'react'
import { Link } from 'react-router-dom'
import home from '../../Image/home.png'
import "./about.css"

export default function About() {
  return (
    <div className="about">
        
        About






        <div className="back">
        <Link to="/">
          <img src={home} alt=""></img>
        </Link>
      </div>
    </div>
  )
}
