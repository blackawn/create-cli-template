<script setup lang="ts">
import Switch from '~/components/switch/index.vue';
import { storeTheme } from '~/store/theme';
import { getCurp } from '~/api';

const themeStore = storeTheme();

const toggleTheme = () => {
  if (themeStore.theme === 'dark'){
    themeStore.setTheme('light');
  } else {
    themeStore.setTheme('dark');
  }
  setTheme();
};

function setTheme() {
  document.documentElement.classList.remove('dark', 'light');
  document.documentElement.classList.add(themeStore.theme);
}

setTheme();


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
  <span>{{ themeStore.theme }}</span>
  <div class="h-5 w-10">
    <Switch
      :status="themeStore.theme === 'dark'"
      @update:switch-status="toggleTheme"
    />
  </div>
</template>
<style></style>
