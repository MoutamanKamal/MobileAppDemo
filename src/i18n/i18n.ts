import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import translationEn from './locales/en.json';
import trnaslationDe from './locales/de.json';
import translationEs from './locales/es.json';
import {LANGUAGES} from '@constants';

const resources = {
  en: {translation: translationEn},
  de: {translation: trnaslationDe},
  es: {translation: translationEs},
};
i18n.use(initReactI18next).init({
  lng: LANGUAGES.EN,
  fallbackLng: LANGUAGES.ES,
  debug: true,
  resources,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
