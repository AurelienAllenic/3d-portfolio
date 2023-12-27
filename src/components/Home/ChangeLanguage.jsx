// ChangeLanguage.jsx
import React from 'react';
import { IoLanguageOutline } from 'react-icons/io5';
import { useLanguage } from '../Context/LanguageContext';
import './home.css';

const ChangeLanguage = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className='container_change_languages'>
      <button className='button_change_languages' onClick={toggleLanguage}>
        <IoLanguageOutline className='icon_change_languages' />
        {language}
      </button>
    </div>
  );
};

export default ChangeLanguage;
