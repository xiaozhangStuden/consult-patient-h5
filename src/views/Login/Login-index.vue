<template>
  <div>
    <div>{{ user.userInfo.token }}</div>
    <VanButton type="danger" @click="handleClick">按钮</VanButton>
  </div>
</template>

<script lang="ts" setup>
import { userStore } from '@/stores/index';
import { Button as VanButton } from 'vant';
const user = userStore().user;
const handleClick = () => {
  user.setUserInfo({
    id: '1',
    token: '111111',
    account: '张三'
  });
};
</script>

<style scoped></style>
