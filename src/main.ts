import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routers';
import store from './store';
import { longPress } from '~/directive/long-press';

createApp(App)
  .use(router)
  .use(store)
  .directive('long-press', longPress)
  .mount('#app');
