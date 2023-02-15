<template>
  <div class="Register-root">
    <NavBar left-btn="true||back"  :left-btn-func="leftBtnFunc" right-btn="true||登录||#16C2A3" :right-btn-func='rightBtnFunc' ></NavBar>
    <div class="register-title">
      <div class="title">注册</div>
    </div>
    <div class="register-form">
      <registerForm></registerForm>
      <label for="checkAgreement"  class="checkAgreement" @click="handleChangeRadio(agreementRadio)">
          <div class="radio-option" :class="{'radio-option-active' : agreementRadio}" ></div>
          我已同意<span class="agreementLink">&nbsp优医协议&nbsp</span>
      </label>
      <Button class="el-button" size="large" :bgc-color="BgcColor" :text-color="textColor" @click="handleRegisterClick">注册</Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LOGIN_PAGE_PATH } from '@/contance/modules/loginContance';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '../components/Button.vue';
import registerForm from './components/register-form.vue';
const router = useRouter()
const BgcColor = ref('#fafafa')
const textColor = ref('#D9DBDE')
const agreementRadio = ref(false)

const rightBtnFunc = () => {
  // 跳转登录页
  router.push(LOGIN_PAGE_PATH)
}

const leftBtnFunc = () => router.back()

const handleChangeRadio = (value:boolean) => {
  agreementRadio.value = !value
}

const handleRegisterClick = () => {
  console.log("哈哈哈哈");
  
}

</script>

<style scoped lang="less">
.Register-root{
  .register-title{
    display: flex;
    justify-content: space-between;
    padding: 0 0.3rem;
    box-sizing: border-box;
    margin-top: 0.8rem;
    margin-bottom: 0.9rem;
    .title{
      width: 1.92rem;
      height: 0.72rem;
      font-size: 0.48rem;
      font-weight: 500;
      color: #121826;
      line-height: 0.72rem;
      font-weight: 500;
    }
  }
  .register-form{
    padding: 0 0.3rem;
    box-sizing: border-box;
    .el-button{
      margin-top: 0.3rem;
    }
    .checkAgreement{
      display: flex;
      font-size: 0.26rem;
      margin-top: 0.3rem;
      .agreementLink{
        color: @themeColor;
        font-weight: 400
      }
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
}

</style>
