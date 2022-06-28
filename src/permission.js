// 路由
import router from './router'

// vuex
import store from './store'

// 未登录情况下 白名单
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  // 获取token
  const token = store.getters.token
  // console.log('1234', token)
  if (token) {
    // 有token
    if (to.path === '/login') {
      next(from.path) // 跳转之前的路由
    } else {
      next()
    }
  } else {
    // 没 token
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
