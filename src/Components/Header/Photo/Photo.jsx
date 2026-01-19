import React from 'react'
import "./photo.css"
import { Link } from "react-router-dom";
import home from "../../Image/home.png";
import girl14 from "../../Image/bba3ef77dcc36359f1a4d57b122819ec.jpg";

export default function Photo() {
  return (
    <div className="photo">
        <h2>Photo</h2>
        <div className="photo-container">
 <img className="white-girl" src={girl14} alt=''></img>
        </div>
       
       
        <div className="back">
                <Link to="/">
                  <img src={home} alt=""></img>
                </Link>
              </div>
        </div>
  )
}
