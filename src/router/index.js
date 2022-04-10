import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入 store
import store from '@/store'

Vue.use(VueRouter)

// 路由规则（添加需要认证的 requiresAuth 信息）
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */'@/views/login/index')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'layout' */'@/views/layout/index'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: 'home' */'@/views/home/index')
      },
      // 博客管理路由组件
      {
        path: '/blog',
        name: 'blog',
        component: () => import(/* webpackChunkName: 'blog' */'@/views/blog/index')
      },
      // 撰写博客路由组件
      {
        path: '/blog/create',
        name: 'blog-create',
        component: () => import(/* webpackChunkName: 'blog-create' */'@/views/blog/create')
      },
      // 编辑博客路由组件
      {
        path: '/blog/:id/edit',
        name: 'blog-edit',
        component: () => import(/* webpackChunkName: 'blog-edit' */'@/views/blog/edit')
      },
      // 用户管理路由组件
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: 'user' */'@/views/user/index')
      },
      // 分类管理路由组件
      {
        path: '/type',
        name: 'type',
        component: () => import(/* webpackChunkName: 'type' */'@/views/type/index')
      },
      // 增加分类路由组件
      {
        path: '/type/create',
        name: 'type-create',
        component: () => import(/* webpackChunkName: 'type-create' */'@/views/type/create')
      },
      // 编辑分类路由组件
      {
        path: '/type/:id/edit',
        name: 'type-edit',
        component: () => import(/* webpackChunkName: 'type-edit' */'@/views/type/edit')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 验证 to 路由是否需要进行身份认证
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 验证 Vuex 的 store 中的登录用户信息是否存储
    if (!store.state.user) {
      // 未登录，跳转到登录页
      return next({
        name: 'login',
        query: {
          // 将本次路由的 fullPath 传递给 login 页面
          redirect: to.fullPath
        }
      })
    }
    // 已经登录，允许通过
    next()
  } else {
    next()
  }
})

export default router
