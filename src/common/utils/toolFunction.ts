import { constLoginModule } from '@/contance';
import router from '@/router';
import { userStore } from '@/stores';
import { useRoute } from 'vue-router';
const route = useRoute();
export function isLogin() {
  const user = userStore().user;
  console.log("用户信息" , user.userInfo);
  
  return user.userInfo.token ? true : false;
}

export function gotoLogin(config: gotoLoginConfig) {
  if (!isLogin()) {
    route.path !== constLoginModule.LOGIN_PAGE_PATH &&
    router.push(constLoginModule.LOGIN_PAGE_PATH);
    if (!config.callback) return;
    isLogin() && config.callback();
  }
}


export function debounce(fn: Function, awaitTime: number) {
  let timer: null | number = null
  return function (this: any, ...args: any) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, awaitTime)
  }
}