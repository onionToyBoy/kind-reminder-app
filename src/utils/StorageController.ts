import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

export const getBool = (key: string): boolean => {
  return storage.getBoolean(key) ?? false;
};

export const setBool = (key: string, value: boolean): void => {
  storage.set(key, value);
};
