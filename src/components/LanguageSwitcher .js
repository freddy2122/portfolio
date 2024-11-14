import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../config/i18n'; // Import your i18n configuration file

const LanguageSwitcher = () => {
  const { t } = useTranslation(); // Initialize translation hook

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <li className="nav-item">
      <Link 
        className="nav-link text-white" 
        to="#" 
        onClick={toggleLanguage} 
        style={{ 
          fontSize: "19px", 
          backgroundColor: "#095D89", 
          padding: "1px", 
          borderRadius: "5px", 
          textDecoration: "underline", 
          fontFamily: "'Syne', sans-serif", 
          fontWeight: "bold", 
          height: "32px" 
        }}
      >
        {i18n.language === 'en' ? 'Fr' : 'En'}
      </Link>
    </li>
  );
};

export default LanguageSwitcher;
