import type { App } from 'vue';
import NavBar from './NavBar/NavBar.vue';
export default {
  install(app: App) {
    console.log(':注册:', NavBar.name);
    app.component(NavBar.name, NavBar);
  }
};
