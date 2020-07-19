import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'Login', component: () => import('views/Login') },
  { path: '/', name: 'Home', component: () => import('views/Home') }
]

const router = new VueRouter({
  routes
})

// 为路由对象添加 beforeEach 全局前置守卫
router.beforeEach((to, from, next) => {
  // 从 sessionStorage 中获取保存的token值
  const token = sessionStorage.getItem('token')
  if (token || to.path === '/login') {
    // 如果token存在，或者访问的登录页，直接放行
    next()
  } else {
    // 如果没有token，携带重定向参数强制跳转到登录页
    to.path === '/'
      ? next('/login')
      : next({
          path: '/login',
          query: { redirect: to.path }
        })
  }
})

export default router
