import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './public/locales/en.json';
import fr from './public/locales/fr.json';


i18n.use(initReactI18next).init({
  debug: false,
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;