import React from 'react'
import "./thirdhouse.css";
import { useState } from 'react';
import english from "../../Image/free-icon-united-kingdom-555417.png";
import ukraine from "../../Image/free-icon-ukraine-3373317.png";



export default function Thirdhouse() {

    const [language, setLanguage] = useState("en");

    const text = {
        en: {
            title: "Hello!",
            description: "The framework was built with scalability in mind. For smaller projects, having a single file with all the translation might work, but for larger projects this approach quickly breaks down. i18next gives you the option to separate translations into multiple files and to load them on demand. The framework was built with scalability in mind. For smaller projects, having a single file with all the translation might work, but for larger projects this approach quickly breaks down. i18next gives you the option to separate translations into multiple files and to load them on demand.",
            button: "UK",
            flag: <img src={ukraine} alt='' />
        },
        ua: {
            title: "Привіт!",
            description: "Фреймворк був створений з урахуванням масштабованості. Для менших проектів може спрацювати один файл з усіма перекладами, але для більших проектів цей підхід швидко виходить з ладу. i18next надає вам можливість розділяти переклади на кілька файлів та завантажувати їх за потреби. Фреймворк був створений з урахуванням масштабованості. Для менших проектів може спрацювати один файл з усіма перекладами, але для більших проектів цей підхід швидко виходить з ладу. i18next надає вам можливість розділяти переклади на кілька файлів та завантажувати їх за потреби.",
            button: "EN",
            flag: <img src={english} alt='' />
        }
    };

    return (
        <div className="thirdhouse">
            <h2>Third House</h2>
            <div className="thirdhouse-container">

                <h5>Third House</h5>
                <button className="thirdhouse-button" onClick={() => setLanguage(language === "en" ? "ua" : "en")}>
                    {text[language].button}
                    {language === "en" && <img src={ukraine} alt="UK flag" />}
                    {language === "ua" && <img src={english} alt="UA flag" />}
                </button>

                <h6>{text[language].title}</h6>
                <p>{text[language].description}</p>
            </div>
        </div>
    )
}
