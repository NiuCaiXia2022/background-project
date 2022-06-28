import { createRouter, createWebHashHistory } from 'vue-router'
// 公有路由表
const publicRoutes = [
  {
    path: '/login', // 登录
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/', // 首页
    component: () => import('../layout')
  }
]
// 私有路由表
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
