<template>
  <div class="bind-mobile-Phone">
    <NavBar left-btn="true||back" ></NavBar>
    <div class="phone-bind-text">
      <div class="text">{{ bindMobileText }}</div>
    </div>
    <div class="form">
      <div class="mobile-from">
        <input type="text" @input="handleChangeMobile()" class="mobile-input" placeholder="请输入手机号码" v-model="validateCodeLogin.mobile">
      </div>
      <div class="code-from">
        <input type="text" name="code" @input="handleChangeValidateCode" placeholder="请输入验证码" v-model="validateCodeLogin.code">
      <div class="getCode" @click="getVerificationCode">{{isClickGetCode ? `${timer} s后重新获取` : '获取验证码'}}</div>
      </div>
      <cp-button size="large" class="bind-btn" >立即绑定</cp-button>
    </div>
   
  </div>

</template>

<script lang="ts" setup>
import { debounce } from '@/common/utils/toolFunction';
import { useTimer } from '@/hooks/useTimer';
import cpButton from '@/views/components/cp-button.vue';
import { defineEmits, ref } from 'vue';
const bindMobileText = ref('手机绑定')

interface LoginComponentsEmits {
  ( EventName : 'sendFormData' , value :ValidateCodeLoginParams   ) : void
}
const validateCodeLogin = ref<ValidateCodeLoginParams>({mobile : '' , code : ''})
const emits = defineEmits<LoginComponentsEmits>()
const { start , timer } = useTimer(60)
const isClickGetCode = ref(false)

const handleChangeMobile = debounce( function () {
  emits('sendFormData' , validateCodeLogin.value)
} , 200)
const handleChangeValidateCode = debounce(function () {
  emits('sendFormData' , validateCodeLogin.value)
} , 200)
// 获取验证码
const getVerificationCode = () => {
  if(isClickGetCode.value) return
  isClickGetCode.value = true
  start()
  
}
</script>

<style scoped lang="less">
.bind-mobile-Phone{
  .phone-bind-text {
    display: flex;
    justify-content: space-between;
    padding: 0 0.3rem;
    box-sizing: border-box;
    margin-top: 0.8rem;
    margin-bottom: 0.9rem;
    .text {
      width: 1.92rem;
      height: 0.72rem;
      font-size: 0.48rem;
      font-weight: 500;
      color: #121826;
      line-height: 0.72rem;
    }
  }
  .form{
    padding: 0 0.3rem;
    box-sizing: border-box;
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
  .bind-btn{
    margin-top: 0.3rem;
  }

}
</style>

