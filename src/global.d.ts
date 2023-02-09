import NavBar from './components/NavBar/NavBar.vue';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    NavBar: typeof NavBar;
  }
}
