// LanguageContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import '../Home/home.css'

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('FR');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [hideConfirmation, setHideConfirmation] = useState(false);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'FR' ? 'EN' : 'FR'));
    setShowConfirmation(true);
    setHideConfirmation(false);
  };

  useEffect(() => {
    let timer;

    if (showConfirmation && !hideConfirmation) {
      timer = setTimeout(() => {
        setHideConfirmation(true);
      }, 1500); // Durée d'affichage avant de commencer à disparaître
    }

    if (hideConfirmation) {
      timer = setTimeout(() => {
        setShowConfirmation(false);
        setHideConfirmation(false);
      }, 500); // Durée de l'animation de disparition
    }

    return () => clearTimeout(timer);
  }, [showConfirmation, hideConfirmation]);

  const confirmationClass = hideConfirmation ? 'container_confirmation_language hide-confirmation' : 'container_confirmation_language';

  return (
    <>
    {showConfirmation && (
      <div className={confirmationClass}>
        <p className='content_confirmation_language'>{language === 'FR' ? 'Langue mise à jour : Français' : 'Language changed : English'}</p>
      </div>
    )}
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
    </>
  );
};
