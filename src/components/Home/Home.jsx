import React, { useRef, useEffect, useState } from 'react';
import './home.css';
import CV from "../../assets/CV.png";
import MotivationDoc from "../../assets/motivation.png";
import CVPDF from "../../assets/CV.pdf";
import Motivation from "../../assets/motivation.pdf";
import Links from "./Links.jsx";
import ChangeLanguage from './ChangeLanguage.jsx';
import { useLanguage } from '../Context/LanguageContext.jsx';
import {StickyIn,FadeIn, Move, MoveIn, ZoomIn, ScrollContainer, ScrollPage, Animator, Sticky, Zoom, batch, Fade, MoveOut} from "react-scroll-motion"
import Logos from './Logos.jsx';

const Home = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Sticky(), Move())
    const { language } = useLanguage();

    // Définir l'état pour stocker la couleur de bordure des boutons
    const [borderColor, setBorderColor] = useState('transparent');

    // Fonction pour gérer le survol de la souris sur les boutons
    const handleMouseEnter = () => {
        setBorderColor('rgba(255, 255, 255, 0.5)'); // Couleur de bordure blanche semi-transparente au survol
    };

    // Fonction pour gérer la sortie de la souris des boutons
    const handleMouseLeave = () => {
        setBorderColor('transparent'); // Réinitialiser la couleur de bordure à transparent
    };

    return (
        <>
        <a className='anchor' id='home'></a>
        <section className="section-home">
            <ChangeLanguage />
            <ScrollContainer>
      <ScrollPage page={0} className='container-home'>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -1000))}>
          <div className="container-name">
            <h2 className='main-title'>Aurélien Allenic</h2>
            <h2 className='second-title'>{language === 'FR' ? 'Développeur Web' : 'Web Developer'}</h2>
          </div>
          <div className="container-cv-links">
            <Links />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage></ScrollPage>
      <ScrollPage>
      <Animator animation={ZoomInScrollOut}>
      <div className='container_logos'>
            <Logos />
          </div>
      </Animator>
      </ScrollPage>
      <ScrollPage page={1} className="container_second_infos">
        <Animator animation={FadeUp}>
        <div className="container-cv-links">
                        <button className="btn linkHome letter" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                                <a href={CVPDF} target='_blank' rel="noreferrer">{language === 'FR' ? 'Télécharger le CV' : 'Download CV'}</a>
                        </button>
                        <button className="btn linkHome letter">
                            <a href={Motivation} target='_blank' rel="noreferrer">
                            {language === 'FR' ? 'lettre de motivation' : 'Motivation letter'}
                            </a>
                        </button>
                    </div>
        </Animator>
    </ScrollPage>
    </ScrollContainer>
        </section>
        </>
    );
};

export default Home;
