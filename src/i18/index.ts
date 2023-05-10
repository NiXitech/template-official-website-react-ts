import en from './en.json';
import zh from './zh.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18Enum } from '../enums';
import { LOCAL_STORAGE_I18 } from '../constants';

// 国际化相关
const i18Resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
};

const language = localStorage.getItem(LOCAL_STORAGE_I18);

i18n.use(initReactI18next).init({
  resources: i18Resources,
  lng: language || I18Enum.EN,
  fallbackLng: language || I18Enum.EN,
  interpolation: {
    escapeValue: false,
  },
});
