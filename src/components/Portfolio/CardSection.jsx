/* eslint-disable */
import React, { useRef, useEffect, useState } from 'react';
import "./portfolio.scss";
import { useLanguage } from '../Context/LanguageContext.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoMdClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const CardSection = ({ datas }) => {
    const { language } = useLanguage();
    const cardsRef = useRef([]);
    const [touchPosition, setTouchPosition] = useState(null)
    const [selectedCard, setSelectedCard] = useState(null);
    const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
    const [isFolderClicked, setIsFolderClicked] = useState(false);

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
        e.stopPropagation();
    }
    const handleTouchMove = (e) => {
        const touchDown = touchPosition
    
        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            handleNextCard()
        }

        if (diff < -5) {
            handlePrevCard()
        }

        setTouchPosition(null)
        e.stopPropagation();
    }

    useEffect(() => {
        ScrollTrigger.defaults({ passive: true });
        cardsRef.current = cardsRef.current.slice(0, datas.length);

        cardsRef.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(card, {
                    autoAlpha: 0,
                    scale: 0.5
                }, {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 0.7,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end : "bottom 10%",
                        toggleActions: "play reverse play reverse",
                    }
                });
            }
        });

        // Nettoyage des instances de ScrollTrigger lors du démontage du composant
        return () => {
            if (ScrollTrigger) {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            }
        };
    }, [datas]);

    // Gestionnaire de clic pour ouvrir la modale
    const handleCardClick = (index) => {
        setSelectedCard(index); // Mettre à jour l'index de la carte sélectionnée
    };

    // Gestionnaire de clic pour passer à la carte précédente
    const handlePrevCard = () => {
        setSelectedCard(prevState => (prevState === 0 ? datas.length - 1 : prevState - 1));
    };

    // Gestionnaire de clic pour passer à la carte suivante
    const handleNextCard = () => {
        setSelectedCard(prevState => (prevState === datas.length - 1 ? 0 : prevState + 1));
    };

    // Gestionnaire de clic pour fermer la modale
    const handleCloseModal = () => {
        setSelectedCard(null);
    };

    const handleCardHover = (card) => {
        gsap.to(card, { scale: 1.1, duration: 0.3 });
    };

    const handleCardHoverEnd = (card) => {
        gsap.to(card, { scale: 1, duration: 0.5 });
    };
    

    return (
        <>
            {datas.map(({ id, image, title, titleEn, github, demo, figma, folder }, index) => (
                <article key={id} ref={el => cardsRef.current[index] = el} className='card-single-project' onClick={() => handleCardClick(index)} onMouseEnter={() => handleCardHover(cardsRef.current[index])} onMouseLeave={() => handleCardHoverEnd(cardsRef.current[index])}>
                    <img src={image} className='img-single-project'/>
                    <p className='content-single-project'>{language === 'FR' ? title : titleEn}</p>
                    <div className='container_links_portfolio'>
                    {figma === '' && folder.length === 0 ? (
                        <>
                            {github !== '' && demo !== '' ? (
                                <a href={github} target="_blank" className='link-single-project'>Github</a>
                            ) : github !== '' ? (
                                <a href={github} target="_blank" className='link-single-project-figma'>Github</a>
                            ) : null}
                            {demo !== '' && <a href={demo} target="_blank" className='link-single-project'>{language === 'FR' ? 'Démo en direct' :'Live Demo'}</a>}
                        </>
                    ) : figma !== '' ? (
                        <a href={figma} target="_blank" download className='link-single-project-figma'>Figma</a>
                    ) : folder.length > 0 && folder.map((file, idx) => (
                        <a key={file.id} href={file.link} target="_blank" className='link-single-project'>{language === 'FR' ? file.title : file.titleEn}</a>
                    ))}
                    </div>
                </article>
            ))}
            {/* Modale */}
            {selectedCard !== null && (
                    <div className="modal">
                    <div className="modal-overlay"/>
                    <div className="modal-content" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                        <button className='close_button' onClick={handleCloseModal}><IoMdClose /></button>
                        <article key={datas[selectedCard].id} className='card-single-project_modal'>
                            <div className="arrows_img">
                                <button className="arrow-prev" onClick={handlePrevCard}><IoIosArrowBack /></button>
                                <img src={datas[selectedCard].image} className='img-single-project'/>
                                <button className="arrow-next" onClick={handleNextCard}><IoIosArrowForward /></button>
                            </div>
                            <p className='content-single-project'>{language === 'FR' ? datas[selectedCard].title : datas[selectedCard].titleEn}</p>
                            <div className='container_links_portfolio'>
                                {datas[selectedCard].folder && datas[selectedCard].folder.length > 0 && (
                                    datas[selectedCard].folder.map((file, idx) => (
                                        <a key={file.id} href={file.link} target="_blank" className='link-single-project'>{language === 'FR' ? file.title : file.titleEn}</a>
                                    ))
                                )}
                                {datas[selectedCard].figma === '' ? (
                                    <>
                                        {datas[selectedCard].github !== '' && datas[selectedCard].demo !== '' ? (
                                            <a href={datas[selectedCard].github} target="_blank" className='link-single-project'>Github</a>
                                        ) : datas[selectedCard].github !== '' ? (
                                            <a href={datas[selectedCard].github} target="_blank" className='link-single-project-figma'>Github</a>
                                        ) : null}
                                        {datas[selectedCard].demo !== '' && <a href={datas[selectedCard].demo} target="_blank" className='link-single-project'>{language === 'FR' ? 'Démo en direct' :'Live Demo'}</a>}
                                    </>
                                ) : (
                                    <a href={datas[selectedCard].figma} target="_blank" className='link-single-project-figma'>Figma</a>
                                )}
                            </div>
                        </article>
                    </div>
                </div>
            )}
        </>
    );
};

export default CardSection;
