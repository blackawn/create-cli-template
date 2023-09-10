<script setup lang="ts">
import { storeTheme } from '@/store/theme'
import { getCurp } from '@/api'
import { ref } from 'vue'
import { useElementResizeObserver } from '@/composables/useElementResizeObserver'

const themeStore = storeTheme()

const toggleTheme = () => {
  if (themeStore.theme === 'dark') {
    themeStore.setTheme('light')
  } else {
    themeStore.setTheme('dark')
  }
  setTheme()
}

function setTheme() {
  document.documentElement.classList.remove('dark', 'light')
  document.documentElement.classList.add(themeStore.theme)
}

setTheme()

const getA = () => getCurp({
  method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/posts/1'
})

const postA = () => getCurp({
  method: 'POST',
  url: 'https://jsonplaceholder.typicode.com/posts',
  data: {
    title: 'foo',
    body: 'bar',
    userId: 1
  },
  validateStatus: function (status: any) {
    return status < 500 // Reject only if the status code is greater than or equal to 500
  }
})

const spanRef = ref<HTMLDivElement | null>(null)

const { width, height } = useElementResizeObserver(spanRef)

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
  <div>
    {{
      width
    }}
  </div>
  <div
    ref="spanRef"
    @click="toggleTheme"
  >
    {{ themeStore.theme }}
  </div>
</template>
<style></style>
