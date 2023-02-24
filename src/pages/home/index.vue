<script setup lang="ts">
import Switch from '~/components/switch/index.vue';
import { storeMode } from '~/store/mode';

const useStoreMode = storeMode();

const toggleMode = () => {
  if (useStoreMode.mode === 'dark') {
    useStoreMode.setMode('light');
  } else {
    useStoreMode.setMode('dark');
  }
  setMode();
};

function setMode(){
  document.documentElement.classList.remove('dark', 'light');
  document.documentElement.classList.add(useStoreMode.mode);
}

setMode();

</script>
<template>
  <span>{{ useStoreMode.mode }}</span>
  <div class="w-10 h-5">
    <Switch
      :status="useStoreMode.mode === 'dark'"
      @update:switch-status="toggleMode"
    />
  </div>
</template>
<style></style>
