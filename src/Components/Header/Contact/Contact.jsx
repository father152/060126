import { Link } from "react-router-dom";
import home from "../../Image/home.png";
import "./contact.css";     

export default function Contact() {
  return (
    <div className="contact">
         <h2>Contact</h2>
       <div className="contact-container">
        </div> 
        
        <div className="back">
        <Link to="/">
          <img src={home} alt=""></img>
        </Link>
      </div>
        </div>
  )
}
