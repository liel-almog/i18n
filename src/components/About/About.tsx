import { useTranslation } from 'react-i18next';

export interface AboutProps {}

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
