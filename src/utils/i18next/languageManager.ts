// src/localization/languageManager.js

import i18n from './i18n';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const LANGUAGE_KEY = 'appLanguage';

const LANGUAGES = {
  en: 'EN',
  ru: 'RU',
};

const getCurrentLanguage = () => i18n.language;

const loadStoredLanguage = async () => {
  const storedLang = storage.getString(LANGUAGE_KEY);
  if (storedLang && storedLang !== i18n.language) {
    await i18n.changeLanguage(storedLang);
  }
};

const changeLanguage = async (lng: 'en' | 'ru') => {
  if (lng !== i18n.language) {
    await i18n.changeLanguage(lng);
    storage.set(LANGUAGE_KEY, lng);
  }
};

const toggleLanguage = async () => {
  const newLang = i18n.language === 'en' ? 'ru' : 'en';
  await changeLanguage(newLang);
};

export default {
  LANGUAGES,
  getCurrentLanguage,
  changeLanguage,
  toggleLanguage,
  loadStoredLanguage,
};
