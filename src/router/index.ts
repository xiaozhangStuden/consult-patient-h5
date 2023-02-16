import Layout from '@/Layout/index.vue';
import { isLogin } from '@/common/utils/toolFunction';
import { contanceRouterPath } from '@/contance';
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect : '/home',
      component : Layout,
      children :[
        {
          path : contanceRouterPath.HOME_PAGE_PATH, // 主页
          component : () => import('@/views/Home/index.vue'),
        },
        {
          path : contanceRouterPath.HEALTHENCYCLOPEDIA_PAGE_PATH,
          name :'HealthEncyclopedia', // 健康百科
          component : () => import('@/views/HealthEncyclopedia/index.vue'),
        },
        {
          path : contanceRouterPath.MESSAGENOTICE_PAGE_PATH,
          name :'MessageNoticePage', // 消息通知
          component : () => import('@/views/MessageNoticePage/index.vue'),
        },
        {
          path : contanceRouterPath.PROFILE_PAGE_PATH,
          name :'profile', // 我的信息
          component : () => import('@/views/profile/index.vue'),
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Login/Login-index.vue')
    },
    {
      path :'/Register',
      component : () => import('@/views/Register/Register-index.vue')
    },
    
  ]
});
router.beforeEach((to, from, next) => {
  if (isLogin()) {
    next();
  } else {
    router.push('/login');
  }
});

export default router;
