import React, { useRef, useEffect } from 'react';
import './home.css';
import CV from "../../assets/CV.png";
import MotivationDoc from "../../assets/motivation.png";
import CVPDF from "../../assets/CV.pdf";
import Motivation from "../../assets/motivation.pdf";
import Links from "./Links.jsx";
import ChangeLanguage from './ChangeLanguage.jsx';
import { useLanguage } from '../Context/LanguageContext.jsx';
import {StickyIn,FadeIn, Move, MoveIn, ZoomIn, ScrollContainer, ScrollPage, Animator, Sticky, Zoom, batch, Fade, MoveOut} from "react-scroll-motion"
const Home = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Sticky(), Move())
    const { language } = useLanguage();

    return (
        <>
        <a className='anchor' id='home'></a>
        <section className="section-home">
            <ChangeLanguage />
            <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -1000))}>
          <h2 className='main-title'>Aurélien Allenic</h2>
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <h2 className='second-title'>{language === 'FR' ? 'Développeur Web' : 'Web Developer'}</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2} className="container_second_infos">
        <Animator animation={FadeUp}>
                    <div className="container-cv-links">
                    <img src={CV} alt="CV" className='image-cv'/>
                    </div>
        </Animator>
    </ScrollPage>
    <ScrollPage page={3} className="container_second_infos">
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -1000))}>
                    <div className="container-cv-links">
                        <button className="btn">
                            <a href={CVPDF} target='_blank' rel="noreferrer" className="linkHome letter">
                                {language === 'FR' ? 'Télécharger' : 'Download'}
                            </a>
                        </button>
                    </div>
                    </Animator>
    </ScrollPage>
    <ScrollPage page={4} className="container_second_infos">
        <Animator animation={FadeUp}>
                    <div className="container-cv-links">
                    <img src={MotivationDoc} alt="Motivation letter" className='image-letter'/>
                    </div>
        </Animator>
    </ScrollPage>
    <ScrollPage page={5} className="container_second_infos">
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -1000))}>
                    <div className="container-cv-links">
                        <button className="btn">
                            <a href={Motivation} target='_blank' rel="noreferrer" className="linkHome letter">
                            {language === 'FR' ? 'Télécharger' : 'Download'}
                            </a>
                        </button>
                    </div>
                    </Animator>
    </ScrollPage>

      <ScrollPage page={6}>
        <Animator animation={batch(Fade(), Sticky())}>
        <Links />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
        </section>
        </>
    );
};

export default Home;
