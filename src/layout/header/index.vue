<script setup lang="ts">
import { NavBar, Icon } from 'vant'
import { useRoute } from 'vue-router'
import router from '@/router'

const route = useRoute()

const leftClick = () => {
  router.back()
}

</script>

<template>
  <NavBar
    left-arrow
    :placeholder="true"
    :border="false"
    @click-left="leftClick"
  >
    <template #left>
      <Icon
        name="arrow-left"
        size="20"
        color="#737373"
      />
    </template>
    <template #title>
      <span>{{ (route.meta.title as string) || (route.query.title as string) }}</span>
    </template>
  </NavBar>
</template>

<style lang="">

</style>
