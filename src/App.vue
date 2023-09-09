<script setup lang="ts">
import { ConfigProvider } from 'vant'
import { themeVars, themeVarsDark, themeVarsLight } from '@/theme'
import { storeTheme } from '@/store/theme'

const themeStore = storeTheme()
</script>

<template>
  <ConfigProvider
    :theme-vars="themeVars"
    :theme-vars-dark="themeVarsDark"
    :theme-vars-light="themeVarsLight"
    :theme="themeStore.theme"
  >
    <RouterView />
  </ConfigProvider>
</template>

<style scoped></style>
