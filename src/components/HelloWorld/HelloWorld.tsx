import { useTranslation } from 'react-i18next';
import classes from './hello-world.module.css';
export interface HelloWorldProps {}

export const HelloWorld = () => {
    const { t } = useTranslation('HelloWorld');
    return <div className={classes.bigText}>{t('title')}</div>;
};
