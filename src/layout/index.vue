<script setup lang="ts">
import { NLayout } from 'naive-ui';

import TheHeader from './Header/index.vue';
import TheAside from './Aside/index.vue';
import TheMain from './Main/index.vue';
import TheFooter from './Footer/index.vue';

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
