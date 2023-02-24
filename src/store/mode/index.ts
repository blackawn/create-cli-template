import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import type { Mode } from '~/types/mode';

export const storeMode = defineStore('modeStore', {
  state: () => ({
    mode: useStorage<Mode>('defaultModesStore', 'dark')
  }),
  getters: {
    getMode(state) {
      return state.mode;
    }
  },
  actions: {
    setMode(mode: Mode) {
      this.mode = mode;
    }
  }
});
