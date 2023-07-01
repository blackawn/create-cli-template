<script setup lang="ts">
import Header from './header/index.vue';
import Slider from './slider/index.vue';
import Main from './main/index.vue';
import Footer from './footer/index.vue';
</script>
<template>
  <div class="flex flex-col h-screen dark:bg-neutral-900">
    <Header class="flex justify-center items-center h-16 border-b" />
    <div class="flex-1 flex">
      <Slider class="flex justify-center items-center w-48 border-r" />
      <Main />
    </div>
    <Footer class="flex justify-center items-center h-16 border-t" />
  </div>
</template>
<style>
</style>
