import { defaultNS } from '../i18n';
import HelloWorld from '../../public/locales/he-IL/HelloWorld.json';
import About from '../../public/locales/he-IL/About.json';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: {
            HelloWorld: typeof HelloWorld;
            About: typeof About;
        };
    }
}
