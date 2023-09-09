<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import { useRoute } from 'vue-router'
import { routeConfig } from '@/router'

const router = useRoute()

const active = ref('home')

watchEffect(() => {
  if (router.name) {
    active.value = router.name as string
  }
})

const tarbarList = computed(() => {
  return routeConfig.find((item) => item.name === 'client')?.children?.filter((item) => item.meta.tarbarIcon)
})

</script>
<template>
  <tabbar
    v-model="active"
    :placeholder="true"
  >
    <tabbar-item
      v-for="item in tarbarList"
      :key="item.name"
      :name="item.name"
      :icon="item.meta.tarbarIcon"
      :to="item.path"
    >
      {{ item.meta.title }}
    </tabbar-item>
  </tabbar>
</template>
<style></style>
