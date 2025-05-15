/* eslint-disable */
import React from "react";
import { useLanguage } from "../Context/LanguageContext";
import CVImageFR from "../../assets/CV.png";
import CVImageEN from "../../assets/CV_EN.png";
import CVPdfFR from "../../assets/CV.pdf";
import CVPdfEN from "../../assets/CV_EN.pdf";
import "./cvLetter.scss";

// Imports séparés dans des objets dynamiques
const CVAssets = {
  FR: {
    image: CVImageFR,
    pdf: CVPdfFR,
  },
  EN: {
    image: CVImageEN,
    pdf: CVPdfEN,
  },
};

const CvLetter = () => {
  const { language } = useLanguage();

  const downloadDocument = (document) => {
    window.open(document, "_blank");
  };

  const { image, pdf } = CVAssets[language];

  return (
    <section className="cvLetter" id="cvLetter">
      <h1 className="main-title-languages">Curriculum</h1>
      <div className="cvLetter_container">
        <div className="container_cv" onClick={() => downloadDocument(pdf)}>
          <img
            src={image}
            alt={language === "FR" ? "CV en français" : "CV in English"}
            style={{ width: "100%", height: "auto", aspectRatio: "500/700" }}
          />
        </div>
      </div>
    </section>
  );
};

export default CvLetter;