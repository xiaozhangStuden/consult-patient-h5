import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [vue(), vueJsx(), VueSetupExtend()],
  server : {
    
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        //你的less文件 地址
        additionalData: `@import "@/styles/index.less";`
      }
    }
  }
});
