<template>
  <div class="login-index">
    <NavBar :leftBtn="'true||back'" title="登录" :rightBtn="'true||注册||#16C2A3'"  :right-btn-func="rightBtnFunc" ></NavBar>
    <div class="login-type">
      <div class="type-text">{{ loginType.text }}</div>
      <div class="checked-login-type" @click="checkoutLoginStatus(checkoutLoginType.type)">
        {{ checkoutLoginType.value }}
        <span class="rightIcon"></span>
      </div>
    </div>
    <div class="form">
      <passwordLogin v-if="loginType.type === LOGINTYPE.PASSWORDLOGIN"  @sendFormData="handlePasswordLogin"></passwordLogin>
      <SmsLogin  @sendFormData="handleValidateCodeLogin" v-else ></SmsLogin>
      <div class="agreement">  
        <label for="checkAgreement"  class="checkAgreement" @click="handleChangeRadio(agreementRadio)">
          <div class="radio-option" :class="{'radio-option-active' : agreementRadio}" ></div>
          我已同意<span>&nbsp用户协议&nbsp</span> 及<span>&nbsp隐私协议&nbsp</span>
        </label>
      </div>
      <div class="login-btn-container">
        <div class="login-btn" :class="{'login-btn-active' : isClickLogin}">登录</div>
      </div>
      <div class="forget-Password" v-if="loginType.type === LOGINTYPE.PASSWORDLOGIN" >忘记密码?</div>
      <div class="Three-party-Login">
        <div class="Three-party-Login-text">第三方登录</div>
        <div class="QQ-Login-icon"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import passwordLogin from './components/Password-Login.vue';
import SmsLogin from './components/Sms-Login.vue';
import { LOGINTYPE } from './components/TS';
const router = useRouter()
const loginType = ref({type : LOGINTYPE.PASSWORDLOGIN , text:'密码登录'});
const checkoutLoginType = ref({
  type: LOGINTYPE.SHORTMESSAGE,
  value: '手机验证码登录'
});
const isClickLogin = ref(false)
const agreementRadio = ref(false)

const rightBtnFunc = () => {
  router.push('/Register')
}


const handleChangeRadio = (value:boolean) => {
  agreementRadio.value = !value
}

const checkoutLoginStatus = (type: string) => {
  // 更新 切换类型 文本 
  checkoutLoginType.value =
    type === LOGINTYPE.SHORTMESSAGE ? { type: LOGINTYPE.PASSWORDLOGIN, value: '使用密码登录' } : { type: LOGINTYPE.SHORTMESSAGE, value: '手机验证码登录' };
    // 更新 登录类型 
    loginType.value = type === LOGINTYPE.SHORTMESSAGE ? {type : LOGINTYPE.SHORTMESSAGE , text : '短信登录'} : {type : LOGINTYPE.PASSWORDLOGIN , text : '密码登录'};
};

// 处理验证码 登录逻辑 
const handleValidateCodeLogin = (value : ValidateCodeLoginParams) => {
  if(value.mobile && value.code) {
    isClickLogin.value = true
  }
  else {
    isClickLogin.value = false
  }
}
// 处理 密码登录 逻辑
const handlePasswordLogin = (value : PasswordLoginParams) => {
  if(value.mobile && value.password) {
    isClickLogin.value = true
  }
  else {
    isClickLogin.value = false
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
    // margin-bottom: 5.57rem;
      .login-btn{
        width: 6.9rem;
        height: 0.88rem;
        transition: all .5s;
        background: #fafafa;
        border-radius: 0.44rem;
        font-size: 0.32rem;
        text-align: center;
        line-height: 0.88rem;
        color: #D9DBDE;
      }
      .login-btn-active {
        color: #fff;
        background: @themeColor;
      }
   } 
   .forget-Password{
    width: 100%;
    text-align: center;
    height: 0.4rem;
    font-size: 0.28rem;
    font-weight: 400;
    color: #848484;
    line-height: 0.4rem;
    margin-top: 0.3rem;
    }
   .Three-party-Login{
    position: absolute;
    width: 4rem;
    text-align: center;
    left: 50%;
    bottom: 1.48rem;
    transform: translate3d(-50% ,0 , 0);
    .Three-party-Login-text {
      display: flex;
      align-items: center;
      height: 0.36rem;
      font-size: 0.24rem;
      margin: 0.1rem auto 0rem;
      font-weight: 400;
      color: #c3c3c5;
      line-height: 0.36rem;
    }
    .Three-party-Login-text::before,.Three-party-Login-text::after{
      content: '';
      display: inline-block;
      width: 1rem;
      border: 0.01rem solid #c3c3c5;
    }
    .Three-party-Login-text{
      &::before{
        margin-right: 0.3rem;
      }
      &::after{
        margin-left: 0.3rem;
      }
    }
    .QQ-Login-icon{
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      background: url('@/assets/QqCircleFilled.png') no-repeat center center;
      background-size: 100%;
      margin: 0.3rem auto 0rem;
    }
   }
  }
}
</style>
