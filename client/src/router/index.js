import { createRouter, createWebHistory } from 'vue-router'

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('../views/index.vue'),
      children: [],
    },
    {
      path: '/login',
      name: 'Login' ,
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/not-found/index.vue'),
    },
  ],
})

export default router
