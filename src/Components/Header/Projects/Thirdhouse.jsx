import React from 'react'
import "./thirdhouse.css";
import { useState } from 'react';

export default function Thirdhouse() {
  
  const [language, setLanguage] = useState("en");

  const text = {
    en: {
      title: "Hello!",
      description: "Welcome to our website",
      button: "UK"
    },
    ua: {
      title: "Привіт!",
      description: "Ласкаво просимо на наш сайт",
      button: "EN"
    }
  };
  
  
    return (
    <div className="thirdhouse">
         <h2>Third House</h2>
         <div className="thirdhouse-container">
        
        <h5>Third House</h5>
        
        <p>{text[language].title}</p>
      <p>{text[language].description}</p>

      <button className="thirdhouse-button" onClick={() => setLanguage(language === "en" ? "ua" : "en")}>
        {text[language].button}
      </button>



        </div>
        </div>
  )
}
