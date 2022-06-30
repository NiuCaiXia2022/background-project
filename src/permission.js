// 路由
import router from './router'
// vuex
import store from './store'

// 未登录情况下 白名单
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  // 获取token
  const token = store.getters.token
  // console.log('1234', token)
  // 获取用户信息
  const userInfo = store.getters.userInfo

  // 先判断有没有token  (有就跳转  没有就判断--有没有白名单，有就跳转，没有就跳登录)
  // 在判断有没有用户信息 (有就登录 没有就判断--判断用户信息,有就是当前页面，没有就跳登录)
  if (token) {
    // 有token
    if (to.path === '/login') {
      next(from.path) // 跳转之前的路由(当前页 ，不让跳转)
    } else {
      // 获取用户信息
      if (userInfo) {
        next() // 有 登录
      } else {
        // 没有就调用
        const response = await store.dispatch('user/getUserList') // 调用 用户信息
        // console.log(response)

        // 判断用户信息
        if (response) {
          next() // 有 就是当前页面
        } else {
          next('/login') // 没有就登录
        }
      }
    }
  } else {
    // 没token
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
