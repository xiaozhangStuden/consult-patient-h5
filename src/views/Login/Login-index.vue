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
      <passwordLogin @sendFormData="handleLogin"></passwordLogin>
      <div class="agreement">
        <label for="checkAgreement"  class="checkAgreement" @click="handleChangeRadio(agreementRadio)">
          <div class="radio-option" :class="{'radio-option-active' : agreementRadio}" ></div>
          我已同意<span>&nbsp用户协议&nbsp</span> 及<span>&nbsp隐私协议&nbsp</span>
        </label>
      </div>
      <div class="login-btn-container">
        <div class="login-btn" :class="{'login-btn-active' : isClickLogin}">登录</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import passwordLogin from './components/Password-Login.vue';
const loginType = ref('密码登录');
const checkoutLoginType = ref({
  type: 'shortMessage',
  value: '手机验证码登录'
});
const isClickLogin = ref(false)
const agreementRadio = ref(false)

const handleChangeRadio = (value:boolean) => {
  agreementRadio.value = !value
}

const checkoutLoginStatus = (type: string) => {
  checkoutLoginType.value =
    type === 'shortMessage'
      ? { type: 'passwordLogin', value: '使用密码登录' }
      : { type: 'shortMessage', value: '手机验证码登录' };
  loginType.value = type === 'shortMessage' ? '短信登录' : '密码登录';
};
const handleLogin = (value : loginParams) => {
  if(value.mobile && value.password) {
    isClickLogin.value = true
  }
  else {
    isClickLogin.value = falses
  }
}
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
    .agreement {
      height: 0.4rem;
      margin-top: 0.3rem;
      font-size: 0.26rem;
      span{
        color: #16C2A3;
        font-weight: 400
      }
      .checkAgreement{
        display: flex;
      }
      .radio-option{
        width: 0.29rem;
        height: 0.29rem;
        margin-right: 0.14rem;
        background: #ffffff;
        border: 0.02rem solid #c3c3c5;
        border-radius: 50%;
      }
      .radio-option-active {
        transition: .5s all;
        border: 0.02rem solid #16C2A3;
        background: url(@/assets/success.png) no-repeat center center;
        background-size: 0.25rem;
        background-color: @themeColor;
      }
    }
   .login-btn-container{
    margin-top: 0.42rem;
      .login-btn{
        width: 6.9rem;
        height: 0.88rem;
        background: #fafafa;
        border-radius: 0.44rem;
        font-size: 0.32rem;
        text-align: center;
        line-height: 0.88rem;
        color: #fff;
      }
      .login-btn-active {
        background: @themeColor;
      }
   } 
  }
}
</style>
