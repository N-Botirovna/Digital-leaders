import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../src/locales/en/translation.json';
import uz from '../src/locales/uz/translation.json';
import ru from '../src/locales/ru/translation.json';

const resources = {
  en: { translation: en },
  uz: { translation: uz },
  ru: { translation: ru },
};

const selectedLanguage = localStorage.getItem('i18nextLng') || 'uz';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: selectedLanguage,
    fallbackLng: 'uz',
    supportedLngs: ['en', 'uz', 'ru'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: { useSuspense: false },
  });

export default i18n;