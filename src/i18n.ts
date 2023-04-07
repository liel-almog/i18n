import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import HelloWorldEN_US from './locales/en-US/HelloWorld.json';
import About_EN_US from './locales/en-US/About.json';
import HelloWorldHE_IL from './locales/he-IL/HelloWorld.json';
import About_HE_IL from './locales/he-IL/About.json';

export const resources = {
    'en-US': {
        HelloWorld: HelloWorldEN_US,
        About: About_EN_US,
    },
    'he-IL': {
        HelloWorld: HelloWorldHE_IL,
        About: About_HE_IL,
    },
} as const;

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'he-IL',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },

        cache: ['localStorage'],
        resources,
        detection: {
            lookupLocalStorage: 'i18nextLng',
        },
        debug: true,
    });

export default i18next;
