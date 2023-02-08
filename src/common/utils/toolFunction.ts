import { constLoginModule } from '@/contance';
import router from '@/router';
import { userStore } from '@/stores';
import { useRoute } from 'vue-router';
const route = useRoute();
export function isLogin() {
  const user = userStore().user;
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
