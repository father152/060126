import React from 'react'
import "./secondhouse.css"
import { Link } from 'react-router-dom'
import back from "../../Image/free-icon-back-3183312.png";  

export default function Secondhouse() {
  return (
    <div className="secondhouse">
         <h2>Second House</h2>
       <div className="secondhouse-container">

        
       </div>

        <div className="backtopreviouspage">
              <Link to="/projects">
                <img src={back} alt=""></img>
              </Link>
            </div>
        </div>
  )
}
