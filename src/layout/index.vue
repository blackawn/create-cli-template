<script setup lang="ts">
import { NLayout } from 'naive-ui'

import Header from './header/index.vue'
import Aside from './aside/index.vue'
import Main from './main/index.vue'
import Footer from './footer/index.vue'

</script>
<template>
  <NLayout>
    <div class="flex h-screen flex-col">
      <Header />
      <div class="flex flex-1">
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  </NLayout>
</template>
<style>
</style>
