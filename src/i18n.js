// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Tarjima fayllarini import qilish
import translationEn from './locales/en/translation.json';
import translationUz from './locales/uz/translation.json';

// Til konfiguratsiyasi
const resources = {
  en: {
    translation: translationEn
  },
  uz: {
    translation: translationUz
  }
};

// i18next sozlamasini o'rnatish
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Standart tilni belgilang
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
