import { isLogin } from '@/common/utils/toolFunction';
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      component: () => import('@/views/Login/Login-index.vue')
    },
    {
      path: '/home',
      component: () => import('@/views/Home/index.vue')
    }
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
