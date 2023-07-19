import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import type { Theme } from './types';

export const storeTheme = defineStore('themeStore', () => {


  const themeStore = useStorage<Theme>('theme', 'dark');

  const setTheme = (theme: Theme) => {
    themeStore.value = theme;
  };

  return {
    theme: themeStore,
    setTheme
  };
});
