<template>
  <div class="login-index">
    <NavBar :leftBtn="'true||back'" title="登录" :rightBtn="'true||注册||#16C2A3'"></NavBar>
    <div class="login-type">
      <div class="type-text">{{ loginType }}</div>
      <div class="checked-login-type" @click="checkoutLoginStatus(checkoutLoginType.type)">
        {{ checkoutLoginType.value }}
        <span class="rightIcon"></span>
      </div>
    </div>
    <div class="form">
      <div class=""></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const loginType = ref('密码登录');
const checkoutLoginType = ref({
  type: 'shortMessage',
  value: '手机验证码登录'
});

const checkoutLoginStatus = (type: string) => {
  console.log(type);

  checkoutLoginType.value =
    type === 'shortMessage'
      ? { type: 'passwordLogin', value: '使用密码登录' }
      : { type: 'shortMessage', value: '手机验证码登录' };
  loginType.value = type === 'shortMessage' ? '短信登录' : '密码登录';
};
</script>

<style scoped lang="less">
.login-index {
  .login-type {
    display: flex;
    justify-content: space-between;
    padding: 0 0.15rem;
    box-sizing: border-box;
    margin-top: 0.25rem;
    margin-bottom: 0.45rem;
  }
  .type-text {
    width: 1.94rem;
    height: 0.36rem;
    font-size: 0.24rem;
    font-weight: 500;
    color: #121826;
    line-height: 0.36rem;
  }
  .checked-login-type {
    font-size: 0.15rem;
    font-weight: 400;
    color: #3c3e42;
    line-height: 0.36rem;
    .rightIcon {
      display: inline-block;
      width: 0.15rem;
      height: 0.1rem;
      background: url('@/assets/chevron-right.png') no-repeat center center;
      background-size: 0.18rem;
    }
  }
}
</style>
