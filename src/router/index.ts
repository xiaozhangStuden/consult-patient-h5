import Layout from '@/Layout/index.vue';
import { isLogin } from '@/common/utils/toolFunction';
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/Layout'
    },
    {
      path :'/Layout',
      component : Layout
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
