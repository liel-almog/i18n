import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .use<HttpApi>(HttpApi)
    .init({
        fallbackLng: 'he-IL',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        defaultNS: 'common',
        cache: ['localStorage', 'cookie'],
        detection: {
            lookupLocalStorage: 'i18nextLng',
        },
        debug: true,
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18next;
