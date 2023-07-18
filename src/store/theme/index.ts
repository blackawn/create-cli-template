import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import type { Theme } from './types';

export const storeTheme = defineStore('themeStore', () => {
  const theme = useStorage<Theme>('theme', 'light');

  const setThemeLight = () => {
    theme.value = 'light';
  };

  const setThemeDark = () => {
    theme.value = 'dark';
  };

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
  };

  return {
    theme,
    setThemeLight,
    setThemeDark,
    toggleTheme
  };
});
