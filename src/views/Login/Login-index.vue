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
      <div class="mobile-from">
        <input type="text" class="mobile-input" placeholder="请输入手机号码" v-model="loginParams.mobile">
      </div>
      <div class="password-from">
        <input type="password" name="password" placeholder="请输入密码" v-model="loginParams.password"  >
      </div>
      <div class="agreement"></div>
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
const loginParams = ref({mobile : '', password :''})



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
    padding: 0 0.3rem;
    box-sizing: border-box;
    margin-top: 0.8rem;
    margin-bottom: 0.9rem;
  }
  .type-text {
    width: 1.92rem;
    height: 0.72rem;
    font-size: 0.48rem;
    font-weight: 500;
    color: #121826;
    line-height: 0.72rem;
  }
  .checked-login-type {
    display: flex;
    align-items: center;
    font-size: 0.3rem;
    font-weight: 400;
    color: #3c3e42;
    line-height: 0.72rem;
    .rightIcon {
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      background: url('@/assets/chevron-right.png') no-repeat center center;
      background-size: 0.4rem;
    }
  }
  .form{
    padding: 0 0.3rem;
    box-sizing: border-box;
    .mobile-from , .password-from{
      width: 6.9rem;
      height: 1.03rem;
      &>input {
        width: 100%;
        height: 100%;
        vertical-align: top;
        outline: none;
        box-sizing: border-box;
        border: none;
        font-size: 0.28rem;
        border-bottom: 0.02rem solid rgba(237,237,237,0.9) !important;
    }
    >input::placeholder{
      color: #C3C3C5;
      font-size: 0.28rem;
    }
      }
    }
}
</style>
