<template>
  <div class="Navbar">
    <div class="navBarItem" v-for="item in navBarList" :key="item.id">
      <span>{{ item.tabName }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const navBarList = ref([
  { id: 1, tabName: '返回' },
  { id: 2, tabName: '产品中心' },
  { id: 3, tabName: '个人' }
]);
</script>

<style scoped lang="less">
.Navbar {
  display: flex;
  justify-content: space-between;
  font-size: 0.16rem;
}
</style>
