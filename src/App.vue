<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { lightThemeOverrides, darkThemeOverrides, darkTheme, lightTheme } from '@/theme'
import { storeTheme } from '@/store/theme'
const themeStore = storeTheme()
</script>

<template>
  <NConfigProvider :theme="themeStore.theme === 'light' ? lightTheme : darkTheme">
    <Router-View />
  </NConfigProvider>
</template>

<style scoped></style>
