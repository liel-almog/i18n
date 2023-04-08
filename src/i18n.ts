import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
export const defaultNS = 'common';

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .use<HttpApi>(HttpApi)
    .init({
        defaultNS,
        fallbackLng: 'he-IL',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        cache: ['localStorage', 'cookie'],
        detection: {
            lookupLocalStorage: 'i18nextLng',
        },
        debug: true,
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        react: {
            useSuspense: true,
        },
    });

export default i18next;
