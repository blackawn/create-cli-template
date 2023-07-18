<script setup lang="ts">
import { NSpace, NButton } from 'naive-ui';
import { storeTheme } from '~/store/theme';

const themeStore = storeTheme();

</script>
<template>
  <div>
    <n-space>
      <n-button @click="themeStore.setTheme('light')">
        LightTheme
      </n-button>
      <n-button
        type="tertiary"
        @click="themeStore.setTheme('dark')"
      >
        DarkTheme
      </n-button>
      <n-button
        type="primary"
        @click="themeStore.setTheme('os')"
      >
        OsTheme
      </n-button>
      <n-button type="info">
        Info
      </n-button>
      <n-button type="success">
        Success
      </n-button>
      <n-button type="warning">
        Warning
      </n-button>
      <n-button type="error">
        Error
      </n-button>
    </n-space>
  </div>
</template>
<style>
</style>
