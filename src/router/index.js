import { createRouter, createWebHashHistory } from 'vue-router'
// 公有路由表
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]
// 私有路由表
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
