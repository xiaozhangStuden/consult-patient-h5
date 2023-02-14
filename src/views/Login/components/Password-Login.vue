<template>
  <div class="login-password-type">
    <div class="mobile-from">
      <input type="text" @input="handleChangeMobile()" class="mobile-input" placeholder="请输入手机号码" v-model="loginParams.mobile">
    </div>
    <div class="password-from">
      <input type="password" name="password" @input="handleChangePassword" placeholder="请输入密码" v-model="loginParams.password">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { debounce } from '@/common/utils/toolFunction';
import { defineEmits, ref } from 'vue';

interface VueComponentsEmits {
  ( EventName : 'sendFormData' , value :PasswordLoginParams   ) : void
}
const emits = defineEmits<VueComponentsEmits>()
const loginParams = ref<PasswordLoginParams>({ mobile: '', password: '' })
const handleChangeMobile = debounce(function () {
  emits('sendFormData' , loginParams.value)
} , 200)

const handleChangePassword = debounce( function () {
  emits('sendFormData' , loginParams.value)
} , 200)
</script>

<style scoped lang="less">
.login-password-type{
  .mobile-from,.password-from {
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
}

</style>
