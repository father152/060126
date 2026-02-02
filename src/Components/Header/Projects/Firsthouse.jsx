import React from "react";
import { Link } from "react-router-dom";
import back from "../../Image/free-icon-back-3183312.png";
import "./firsthouse.css";
import foto1 from "../../Image/img215_34309_1170s1.jpg";
import foto2 from "../../Image/img244_34234_1170s1.jpg";
import foto3 from "../../Image/img2808_40016_1170s1.jpg";
import { useState } from "react";



export default function Firsthouse() {
  
  const [color, setColor] = useState("white");
  const changeColor = () => {
    setColor(color === "white" ? "black" : "white");
  }
  
  const [borderRadius, setborderRadius] = useState("0");
  const changeborderRadius = () => {
    setborderRadius(borderRadius === "0" ? "50%" : "0");
  }
  
  
  return (
    <div className="firsthouse">
      <h2>First House</h2>
      <div className="firsthouse-container">
        <img src={foto1} alt=""></img>
        <img src={foto2} alt=""></img>
        <img src={foto3} alt=""></img>
        <img src={foto1} alt=""></img>
        <img src={foto1} alt=""></img>
        <img src={foto1} alt=""></img>
        <img src={foto1} alt=""></img>
        <img src={foto1} alt=""></img>
      </div>

      <div className="colo" style={{ color, borderRadius }}>
        <p style={{ color }}>456786453</p>
        <button onClick={changeColor}>Change Color</button>
        <button onClick={changeborderRadius}>Border</button>
         {/* <button onClick={() => { changeColor(); changeborderRadius(); }}>Change Color</button> */}
      </div>

      <div className="backtopreviouspage">
        <Link to="/projects">
          <img src={back} alt=""></img>
        </Link>
      </div>
    </div>
  );
}
