// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importation des fichiers de traduction
import en from '../locales/en.json';
import fr from '../locales/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr }
    },
    lng: 'en', // Langue par défaut
    fallbackLng: 'en', // Langue de secours si la traduction n'est pas disponible
    interpolation: { escapeValue: false }
  });

export default i18n;
