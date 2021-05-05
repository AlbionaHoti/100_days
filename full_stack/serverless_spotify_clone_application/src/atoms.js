import { atom } from 'recoil';

export const newsState = atom({
  key: 'news',
  default: [],
});

export const view = atom({
  key: 'view',
  default: 'us',
});
