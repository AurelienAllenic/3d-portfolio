/* eslint-disable */
import React from "react";
import "./cvLetter.scss";
import CV from "../../assets/cv.png";
import CVEN from "../../assets/CV_EN.png";
import CVPDF from "../../assets/CV.pdf";
import CVENPDF from "../../assets/CV_EN.pdf";
import { useLanguage } from "../Context/LanguageContext";
/*
import Motivation from "../../assets/motivation.png";
import MotivationPDF from "../../assets/motivation.pdf";
*/

const CvLetter = () => {
  const { language } = useLanguage();

  const downloadDocument = (document) => {
    window.open(document, "_blank");
  };

  return (
    <>
      <section className="cvLetter" id="cvLetter">
        <h1 className="main-title-languages">Curriculum</h1>
        <div className="cvLetter_container">
          {language === "FR" ? (
            <div
              className="container_cv"
              onClick={() => downloadDocument(CVPDF)}
            >
              <img src={CV} alt="" />
            </div>
          ) : (
            <div
              className="container_cv"
              onClick={() => downloadDocument(CVENPDF)}
            >
              <img src={CVEN} alt="" />
            </div>
          )}
          {/*
            <div className='container_letter' onClick={() => downloadDocument(MotivationPDF)}>
                <img src={Motivation} alt="" />
            </div>
        */}
        </div>
      </section>
    </>
  );
};

export default CvLetter;
