<template>
<div class="SMS-login-type">
    <div class="mobile-from">
      <input type="text" @input="handleChangeMobile()" class="mobile-input" placeholder="请输入手机号码" v-model="validateCodeLogin.mobile">
    </div>
    <div class="code-from">
      <input type="text" name="code" @input="handleChangeValidateCode" placeholder="请输入验证码" v-model="validateCodeLogin.code">
      <div class="getCode">获取验证码</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { debounce } from '@/common/utils/toolFunction';
import { defineEmits, ref } from 'vue';
interface LoginComponentsEmits {
  ( EventName : 'sendFormData' , value :ValidateCodeLoginParams   ) : void
}
const validateCodeLogin = ref<ValidateCodeLoginParams>({mobile : '' , code : ''})
const emits = defineEmits<LoginComponentsEmits>()

const handleChangeMobile = debounce( function () {
  emits('sendFormData' , validateCodeLogin.value)
} , 200)
const handleChangeValidateCode = debounce(function () {
  emits('sendFormData' , validateCodeLogin.value)
} , 200)
</script>

<style scoped lang="less">
.SMS-login-type {
  .mobile-from,.code-from {
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
} 


</style>
