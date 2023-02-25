<script setup lang="ts">
import Switch from '~/components/switch/index.vue';
import { storeMode } from '~/store/mode';
import { getCurp } from '~/api';


const useStoreMode = storeMode();

const toggleMode = () => {
  if (useStoreMode.mode === 'dark') {
    useStoreMode.setMode('light');
  } else {
    useStoreMode.setMode('dark');
  }
  setMode();
};

function setMode() {
  document.documentElement.classList.remove('dark', 'light');
  document.documentElement.classList.add(useStoreMode.mode);
}

setMode();


const getA = () => getCurp({
  method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/posts/1'
});

const postA = () => getCurp({
  method: 'POST',
  url: 'https://jsonplaceholder.typicode.com/posts',
  data: {
    title: 'foo',
    body: 'bar',
    userId: 1
  },
  validateStatus: function(status: any) {
    return status < 500; // Reject only if the status code is greater than or equal to 500
  }
});


</script>
<template>
  <button @click="getA">
    get
  </button>
  <br>
  <button @click="postA">
    post
  </button>
  <br>
  <span>{{ useStoreMode.mode }}</span>
  <div class="w-10 h-5">
    <Switch
      :status="useStoreMode.mode === 'dark'"
      @update:switch-status="toggleMode"
    />
  </div>
</template>
<style></style>
