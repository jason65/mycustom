import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'app',
      component: resolve => require(['@/app.vue'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require([`@/login.vue`], resolve)
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require([`@/home.vue`], resolve)
    }
    // {
    //   path: '/layout',
    //   name: 'layout',
    //   component: resolve => require([`@/layout/${kindo.config.theme}/layout.vue`], resolve)
    // }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    next()
  } else {
    // 不需要身份校验 直接通过
    next()
  }
})

export default router
