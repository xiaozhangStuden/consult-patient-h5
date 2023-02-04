import { createPinia } from 'pinia';
import persist from 'pinia-plugin-persistedstate';
import 'vant/lib/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './utils/viewport.js';

const app = createApp(App);

app.use(createPinia().use(persist));
app.use(router);

app.mount('#app');
