<template>
  <div class="tabs">
    <div class="tabItem" v-for="item in tabList" :key="item.id">
      <span>{{ item.tabName }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tabList = ref([
  { id: 1, tabName: '精选' },
  { id: 2, tabName: '产品' },
  { id: 3, tabName: '销量' }
]);
</script>

<style scoped lang="less">
.tabs {
  display: flex;
  justify-content: space-between;
  font-size: 0.16rem;
  padding: 0.1rem 0.3rem;
  box-sizing: border-box;
}
</style>
