<template>
  <div class="register-form-root">
      <div class="mobile-from">
        <input type="text" @input="handleChangeMobile()" class="mobile-input" placeholder="请输入手机号码" v-model="validateCodeLogin.mobile">
      </div>
      <div class="code-from">
        <input type="text" name="code" @input="handleChangeValidateCode" placeholder="请输入验证码" v-model="validateCodeLogin.code">
        <div class="getCode" @click="getVerificationCode">获取验证码</div>
      </div>
      <div class="newsPassword-from">
        <input :type="isShowPassword ? 'text' : 'password'" name="newsPassword" @input="handleChangeValidateCode" placeholder="请输入密码，8-20位数字、字母或符号" 
          v-model="validateCodeLogin.password">
        <div class="visible-Password" @click="handleCheckoutVisible(isShowPassword)">
        <img v-if="!isShowPassword" src="@/assets/eye-states-off.png" alt="">
        <img v-else src="@/assets/eye-states-on.png" alt="">
        </div>
      </div>
    </div>
  </template>
  
<script lang="ts" setup>
import { debounce } from '@/common/utils/toolFunction';
import { defineEmits, ref } from 'vue';
interface LoginComponentsEmits {
  ( EventName : 'sendFormData' , value :ValidateCodeRegister   ) : void
}
  
const validateCodeLogin = ref<ValidateCodeRegister>({mobile : '' , code : '' , password : ''})
const isShowPassword = ref(false)
const emits = defineEmits<LoginComponentsEmits>()

const handleChangeMobile = debounce( function () {
  emits('sendFormData' , validateCodeLogin.value)
} , 200)
const handleChangeValidateCode = debounce(function () {
  emits('sendFormData' , validateCodeLogin.value)
} , 200)
const handleCheckoutVisible = (value : boolean) => {
  isShowPassword.value = !value
}
// 获取验证码
const getVerificationCode = () => {
  console.log("获取code");
  
}
</script>
  
<style scoped lang="less">
.register-form-root {
  .mobile-from,.code-from,.newsPassword-from {
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
      border-bottom: 0.02rem solid rgba(237, 237, 237, 0.9) !important;
    }

    >input::placeholder {
      color: #C3C3C5;
      font-size: 0.28rem;
    }
  }
  .code-from {
    position: relative;
    .getCode {
      position: absolute;
      right: 0;
      top: 40%;
      color: @themeColor;
      font-size: 0.28rem;
    }
  }
  .newsPassword-from{
    position: relative;
    .visible-Password{
      position: absolute;
      right: 0.1rem;
      top: -0.32rem;
      width: 0.29rem;
      height: 0.29rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  
} 


</style>
