import type { App } from 'vue';
import NavBar from './NavBar/NavBar.vue';
export default {
  install(app: App) {
    app.component(NavBar.name, NavBar);
  }
};
