import { Link } from "react-router-dom";
import home from "../../Image/home.png";
import "./about.css";
import girl3 from "../../Image/pexels-george-desipris-818261.jpg";
import girl4 from "../../Image/pexels-george-desipris-9751898.jpg";
import girl5 from "../../Image/pexels-george-desipris-1709024.jpg";

export default function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <div className="about-container">
        <div className="about-left">
          <h3>LEFT</h3>
          <div className="img-wrap">
            <img src={girl3} alt="" className="img img-main" />
            <p className="img img-hover">
              {" "}
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos. Lorem Lorem
              ipsum dolor sit amet consectetur adipiscing elit. Quisqueipsum
              dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="about-centre">
          <h3>CENTRE</h3>
          <div className="img-wrap">
            <img src={girl4} alt="" className="img img-main" />
            <p className="img img-hover">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Quisqueipsum dolor sit amet consectetur adipiscing elit. faucibus
              ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
              tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos. Lorem{" "}
            </p>
          </div>
        </div>
        <div className="about-right">
          <h3>RIGHT</h3>
          <div className="img-wrap">
            <img src={girl5} alt="" className="img img-main" />
            <p className="img img-hover">
              {" "}
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos. Lorem Lorem
              ipsum dolor sit amet consectetur adipiscing elit. Quisqueipsum
              dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="next-1">
        <h2>NEXT</h2>
        <p>Next content goes herefaucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos. Lorem Lorem
              ipsum dolor sit amet consectetur adipiscing elit. Quisqueipsum
              dolor sit amet consectetur adipiscing elit.Next content goes herefaucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos. Lorem Lorem
              ipsum dolor sit amet consectetur adipiscing elit. Quisqueipsum
              dolor sit amet consectetur adipiscing elit</p>
      </div>
      <div className="next-1">
        <h2>NEXT 2</h2>
        <p>Next content goes herefaucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos. Lorem Lorem
              ipsum dolor sit amet consectetur adipiscing elit. Quisqueipsum
              dolor sit amet consectetur adipiscing elit.Next content goes herefaucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos. Lorem Lorem
              ipsum dolor sit amet consectetur adipiscing elit. Quisqueipsum
              dolor sit amet consectetur adipiscing elit</p>
      </div>
      <div className="back">
        <Link to="/">
          <img src={home} alt=""></img>
        </Link>
      </div>
    </div>
  );
}
