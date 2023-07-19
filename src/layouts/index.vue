<script setup lang="ts">
import { NLayout } from 'naive-ui';

import TheHeader from './header/index.vue';
import TheAside from './aside/index.vue';
import TheMain from './main/index.vue';
import TheFooter from './footer/index.vue';

</script>
<template>
  <n-layout>
    <div class="flex h-screen flex-col">
      <the-header />
      <div class="flex flex-1">
        <the-aside />
        <the-main />
      </div>
      <the-footer />
    </div>
  </n-layout>
</template>
<style>
</style>
