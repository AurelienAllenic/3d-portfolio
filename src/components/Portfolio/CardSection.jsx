 /* eslint-disable */

    import React, { useRef, useEffect } from 'react';
    import "./portfolio.css";
    import { useLanguage } from '../Context/LanguageContext.jsx';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    
    gsap.registerPlugin(ScrollTrigger);
    
    const CardSection = ({ datas }) => {
        const { language } = useLanguage();
        const cardsRef = useRef([]);
    
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
                        duration: 1,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                            end : "bottom 20%",
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
    
        return (
            <>
                {datas.map(({ id, image, title, titleEn, github, demo, figma }, index) => (
                    <article key={id} ref={el => cardsRef.current[index] = el} className='card-single-project'>
                        <img src={image} className='img-single-project'/>
                        <p className='content-single-project'>{language === 'FR' ? title : titleEn}</p>
                        <div className='container_links_portfolio'>
                            {figma === '' ? (
                                <>
                                   {github !== '' && demo !== '' ? (
    <a href={github} target="_blank" className='link-single-project'>Github</a>
) : github !== '' ? (
    <a href={github} target="_blank" className='link-single-project-figma'>Github</a>
) : null}


                                    {demo !== '' && <a href={demo} target="_blank" className='link-single-project'>{language === 'FR' ? 'Démo en direct' :'Live Demo'}</a>}
                                </>
                            ) : (
                                <a href={figma} target="_blank" className='link-single-project-figma'>Figma</a>
                            )}
                        </div>
                    </article>
                ))}
            </>
        );
    };
    
    export default CardSection;
    