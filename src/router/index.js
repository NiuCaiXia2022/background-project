import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout'
// 公有路由表 个人中心 404 401
const publicRoutes = [
  {
    path: '/login', // 登录
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/', // 首页
    component: () => import('../layout'),
    redirect: '/profile', // 重定向
    children: [
      {
        path: '/profile', // 个人中心
        name: 'profile',
        component: () => import('../views/profile'),
        meta: {
          title: '个人中心',
          icon: 'personnel'
        }
      },
      {
        path: '/chart', // 数据可视化
        name: 'chart',
        component: () => import('../views/chart'),
        meta: {
          title: '数据可视化',
          icon: 'chart'
        }
      },
      {
        path: '/404', // 404
        name: '404',
        component: () => import('../views/error-page/404')
      },
      {
        path: '/401', // 401
        name: '401',
        component: () => import('../views/error-page/401')
      }
    ]
  }
]
// 私有路由表
const privateRoutes = [
  {
    path: '/user', // 用户
    name: 'user',
    component: Layout,
    redirect: 'user/manage',
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage', // 员工管理
        name: 'userManage',
        component: () => import('../views/user-manage'),
        meta: {
          title: '员工管理',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/role', // 角色管理
        name: 'userRole',
        component: () => import('../views/role-list'),
        meta: {
          title: '角色管理',
          icon: 'role'
        }
      },
      {
        path: '/user/permission', // 权限列表
        name: 'userpermission',
        component: () => import('../views/permission-list'),
        meta: {
          title: '权限列表',
          icon: 'permission'
        }
      },
      {
        path: '/user/info/id', // 用户信息
        name: 'userInfo',
        component: () => import('../views/user-info')
      },
      {
        path: '/user/import', // Excel导入
        name: 'userImport',
        component: () => import('../views/import')
      }
    ]
  },
  {
    path: '/article', // 文章
    name: 'article',
    component: Layout,
    redirect: '/article/ranking',
    meta: {
      title: '文章',
      icon: 'article'
    },
    children: [
      {
        path: '/article/ranking', // 文章排名
        name: 'articleRanking',
        component: () => import('../views/article-ranking'),
        meta: {
          title: '文章排名',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/create', // 创建文章
        name: 'articleCreate',
        component: () => import('../views/article-create'),
        meta: {
          title: '创建文章',
          icon: 'article-create'
        }
      },
      {
        path: '/article/detail', // 文章详情
        name: 'articleDetail',
        component: () => import('../views/article-detail')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  // 解构赋值 两个路由数据
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
