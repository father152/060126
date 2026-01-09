import React from "react";
import { Link } from "react-router-dom";
import home from "../../Image/home.png";
import "./about.css";
import girl3 from "../../Image/pexels-george-desipris-818261.jpg";
import girl4 from "../../Image/pexels-george-desipris-9751898.jpg"



export default function About() {
 
  return (
    <div className="about">
      <h2>About</h2>
<div className="about-container">
<div className="about-left">
<h3>LEFT</h3>
 <div className="img-wrap">
  <img src={girl3} alt=""  className="img img-main" />
  <img src={girl4} alt=""  className="img img-hover" />
</div>
 
</div>
<div className="about-centre">
<h3>CENTRE</h3>
</div>
<div className="about-right">
<h3>RIGHT</h3>
</div>

</div>
      <div className="back">
        <Link to="/">
          <img src={home} alt=""></img>
        </Link>
      </div>
    </div>
  );
}
