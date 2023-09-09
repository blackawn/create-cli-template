import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { ConfigProviderTheme } from 'vant'

export const storeTheme = defineStore('themeStore', () => {

  const themeStore = useStorage<ConfigProviderTheme>('theme', 'dark')

  const setTheme = (theme: ConfigProviderTheme) => {
    themeStore.value = theme
  }

  return {
    theme: themeStore,
    setTheme
  }
})
