<script setup lang="ts">
import { NConfigProvider } from 'naive-ui';
import { lightThemeOverrides, darkThemeOverrides } from './theme';
import { storeTheme } from '~/store/theme';
const themeStore = storeTheme();
</script>

<template>
  <n-config-provider :theme-overrides="themeStore.theme === 'light' ? lightThemeOverrides : darkThemeOverrides">
    <Router-View />
  </n-config-provider>
</template>

<style scoped></style>
