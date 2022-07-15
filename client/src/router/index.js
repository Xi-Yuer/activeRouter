import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '@/store'

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
      name: 'Login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/not-found/index.vue'),
    },
  ],
})
// 初始化路由数据
let hasRoute = false
router.beforeEach(async (to, from, next) => {
  if (!hasRoute) {
    await useStore().changeUserRoutes()
    hasRoute = true
    next({ ...to, replace: true })
  } else {
    next()
  }
})

export default router
