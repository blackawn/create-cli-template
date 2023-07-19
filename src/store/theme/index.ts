import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useOsTheme } from 'naive-ui';
import type { Theme } from './types';
import { watchEffect } from 'vue';

export const storeTheme = defineStore('themeStore', () => {

  const osTheme = useOsTheme();

  const themeStore = useStorage<Theme>('theme', osTheme.value as Theme);

  let unwatch: any;

  const setTheme = (theme: Theme) => {
    unwatch?.();
    if (theme === 'os'){
      unwatch = watchEffect(() => {
        themeStore.value = osTheme.value;
      });
      return;
    }
    themeStore.value = theme;
  };

  return {
    theme: themeStore,
    setTheme
  };
});
