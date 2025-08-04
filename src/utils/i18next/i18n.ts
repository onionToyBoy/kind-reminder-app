import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { MMKV } from 'react-native-mmkv';

import en from './locales/en/translation.json';
import ru from './locales/ru/translation.json';

const storage = new MMKV();
const LANGUAGE_KEY = 'appLanguage';

const storedLanguage = storage.getString(LANGUAGE_KEY) || 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: storedLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
