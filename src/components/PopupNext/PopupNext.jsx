/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { useLanguage } from '../Context/LanguageContext';
import './popupnext.scss';
import IMG from '../../assets/site-capture.png';
import Next from '../../assets/nextjs-icon.svg';

const PopupNext = () => {
    const { language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    // Disable/enable scroll when popup is visible
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup on component unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isVisible]);

    useEffect(() => {
        // Vérifie si la popup a déjà été affichée
        const hasSeenPopup = localStorage.getItem('hasSeenPopup');
        
        if (!hasSeenPopup) {
            // Affiche la popup après 2 secondes
            const timer = setTimeout(() => {
                setIsVisible(true);
                // Marque la popup comme vue
                localStorage.setItem('hasSeenPopup', 'true');
            }, 2000);

            // Nettoie le timer lors du démontage du composant
            return () => clearTimeout(timer);
        }
    }, []);

    const goToNext = () => {
        const url =
            language === 'FR'
                ? 'https://portfolio-next-aurelien.vercel.app/'
                : 'https://portfolio-next-aurelien.vercel.app/?lang=en';
        window.open(url, '_blank');
        setIsVisible(false); // Ferme la popup après le clic
    };

    const closePopup = () => {
        setIsVisible(false);
    };

    const openPopup = () => {
        setIsVisible(true);
    };

    return (
        <>
            <div className="reopen-popup">
                <button onClick={openPopup} aria-label={language === 'FR' ? 'Rouvrir la popup' : 'Reopen the popup'}>
                    <img src={Next} alt="Next.js Logo" className="nextjs-logo" />
                    <span className="tooltip">
                        {language === 'FR' ? 'Voir le site en version Next' : 'View the site in Next version'}
                    </span>
                </button>
            </div>
            {isVisible && (
                <div className='popup-next-container'>
                    <div className="popup-next" style={{ backgroundImage: `url(${IMG})` }}>
                        <div className='popup-next-close'>
                            <button onClick={closePopup} aria-label={language === 'FR' ? 'Fermer la popup' : 'Close the popup'}>
                                <IoClose />
                            </button>
                        </div>
                        <div className="popup-next-content">
                            <h2>{language === 'FR' ? 'Nouvelle version du site en NextJs !' : 'New version of the site in NextJs !'}</h2>
                            <button onClick={goToNext}>
                                {language === 'FR' ? 'Visiter' : 'Visit'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopupNext;