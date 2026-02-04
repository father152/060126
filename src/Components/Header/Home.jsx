import React from "react";
import "./home.css";
import girl from "../Image/7b4a6cb68f99340c5073c6ec1c4e9dca.jpg";
import girl1 from "../Image/7858d44b402eff7aad9e5c34f8e77605.jpg";
import girl2 from "../Image/b82e171512b51e24a23bb9d0cebfe8ca.jpg";
import up from "../Image/free-icon-drop-down-menu-3151495.png";


export default function Home() {
  return (
    <div className="home">
      <>
        <h1>My Sweet Home</h1>
        <img className="girl" src={girl} alt=""></img>
        <img className="girl1" src={girl1} alt=""></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet
          consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis
          convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
          fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
          malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos
          himenaeos.
        </p>
      </>
      <div className="home-container">
        <h2>Our Sweet Building</h2>
        <img className="girl2" src={girl2} alt=""></img>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet
          consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis
          convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
          fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
          malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos
          himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit.
          Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
          cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
          urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
          egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet
          consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis
          convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
          fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
          malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos
          himenaeos.malesuada lacinia integer nunc posuere. Ut hendrerit semper
          vel class aptent taciti sociosqu. Ad litora torquent per conubia
          nostra inceptos himenaeos.
        </h5>
      </div>

      <div className="up" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img className="up-img" src={up} alt=""></img></div>

    </div>
  );
}
