import { createApp } from 'vue'
import '@/styles/style.css'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vant/lib/index.css'

import { longPress } from '@/directive/long-press/long-press'

createApp(App)
  .use(router)
  .use(store)
  .directive('long-press', longPress)
  .mount('#app')
