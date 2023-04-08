# i18n
This is an internationalization demo with react. The objective is to using several components with at least two translation files for each component and switch the translation with a click of a button.

Currently there are few solutions to the situation

1. Have all the translation files inside the src/ directory and load all on them into the i18n init function. Probably best to extract them into their own variable.
This option gives up better type support for minimal erros.

`i18n.ts`

```typescript
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
```

`i18next.d.ts`

```typescript
import { resources } from '../i18n';

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: typeof resources['he-IL'];
    }
}

```

2. The second option which is better because it adds speed and reduces code complexity is to save all the tranalstion files in a static server that will be able to serve the 
json files. A good option will be the public/ directory because all the files inside it will be automatically served with the cdn.
There will be no TS support but all we need to do is to configure the i18n how to fetch the resources.

`i18n.ts`

```typescript
i18next
    .use(initReactI18next)
    .use<HttpApi>(HttpApi)
    .init({
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });
```

`About.tsx`

```tsx
export const About = () => {
    const { t } = useTranslation('About');
    return (
        <div>
            <header>{t('header')}</header>
            <main>{t('main')}</main>
            <footer>{t('footer')}</footer>
        </div>
    );
};
```

3. The last way is a combination of both. Because we save the translation files in the public directory which is in the same repo, we could add the translation files manually
to the decleration file but also enjoy the additional speed related to writing code and saving the load time on the browser

`i18next.d.ts`
```typescript
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

```
