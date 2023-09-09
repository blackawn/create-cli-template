<script setup lang="ts">
import Header from './header/index.vue'
import Main from './main/index.vue'
import Footer from './footer/index.vue'
</script>
<template>
  <div class="flex h-screen flex-col dark:bg-neutral-900">
    <Header />
    <div class="flex flex-1">
      <Main />
    </div>
    <Footer class="flex h-16 items-center justify-center border-t" />
  </div>
</template>
<style></style>
