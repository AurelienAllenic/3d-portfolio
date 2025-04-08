/* eslint-disable */
import React from "react";
import IMG from "../../assets/about.jpg";
import "./about.scss";
import "./buttons_about.scss";
import { useLanguage } from "../Context/LanguageContext.jsx";
import ChangeLanguage from "./ChangeLanguage.jsx";
import Logos from "./Logos.jsx";
import Links from "./Links.jsx";

const About = () => {
  const { language } = useLanguage();

  const downloadDocument = (document) => {
    window.open(document, "_blank");
  };

  return (
    <>
      <a className="anchor" id="home"></a>
      <section className="container_about">
        <ChangeLanguage />
        <div className="container_title_about">
          <h1 className="main-title-about">Aurélien Allenic</h1>
          <h2 className="sub-title">
            {language === "FR" ? "Développeur Web" : "Web Developer"}
          </h2>
        </div>

        <div className="sub_container_about">
          <div className="container_img_about">
            <img src={IMG} alt="" />
          </div>
          <div className="container_text_about">
            {language === "FR" ? (
              <p>
                Diplômé de trois formations Openclassrooms : développeur web,
                développeur d'applications javascript / react et développeur
                d'applications Python, j'ai également suivi une piscine en école
                d'informatique.
                <br />
                Je suis actuellement en 4éme année de mastère chez{" "}
                <a
                  href="https://www.iim.fr/"
                  target="_blank"
                  className="link_bio"
                >
                  IIM Digital School
                </a>{" "}
                dans le cadre d'une alternance chez{" "}
                <a
                  href="https://www.soleadagency.com/"
                  target="_blank"
                  className="link_bio"
                >
                  Solead Agency
                </a>{" "}
                en tant que développeur Wordpress.
                <br />
                J'ai aussi réalisé des projets hors de mes parcours et possède
                une certaine appétence pour le développement web et mobile.
              </p>
            ) : (
              <p>
                Graduated from three OpenClassrooms programs : web developer,
                JavaScript/React application developer, and Python application
                developer, I have also completed a coding bootcamp at a computer
                science school.
                <br />
                I'm also in the fourth year of my master's degree at{" "}
                <a
                  href="https://www.iim.fr/"
                  target="_blank"
                  className="link_bio"
                >
                  IIM Digital School
                </a>{" "}
                as part of an apprenticeship at{" "}
                <a
                  href="https://www.soleadagency.com/"
                  target="_blank"
                  className="link_bio"
                >
                  Solead Agency
                </a>{" "}
                as a Wordpress developer. <br />I have also completed projects
                outside of my courses and have a keen interest in web and mobile
                development.
              </p>
            )}
          </div>
        </div>
        <Logos />
        <Links />
      </section>
    </>
  );
};

export default About;
