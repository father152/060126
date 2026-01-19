import { Link } from "react-router-dom";
import home from "../../Image/home.png";
import "./contact.css";
import face from "../../Image/pexels-murat-esibatir-156560-4355346.jpg";
export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="adress">
          46654 Ukraine, Kharkiv<br></br>
          st. Sdgerfw, 10-12<br></br>
          E-mail:
        </div>
        <div className="phone">Phone: +380 50 123 45 67</div>
      </div>

      <div className="personal">
        <div className="personal-card">
          <img src={face} alt=""></img>
          <p>Fjsdfkj Llhsefnfwef Gkbdkv </p>    <p> phone:  +567 689789 4534</p> 
        </div>
        <div className="personal-card">
          <img src={face} alt=""></img>
          <p>Fjsdfkj Llhsefnfwef Gkbdkv</p> <p> phone:  +567 689789 4534</p> 
        </div>
        <div className="personal-card">
          <img src={face} alt=""></img>
          <p>Fjsdfkj Llhsefnfwef Gkbdkv</p> <p> phone:  +567 689789 4534</p> 
        </div>
        <div className="personal-card">
          <img src={face} alt=""></img>
          <p>Fjsdfkj Llhsefnfwef Gkbdkv</p> <p> phone:  +567 689789 4534</p> 
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
