import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/login',
      meta: {
        layout: 'login'
      },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      meta: {
        title: 'Dashboard'
      },
      component: () => import('../views/dashboard/index.vue')
    },
    {
      path: '/index',
      meta: {
        layout: 'default',
        title: '首页导航'
      },
      component: () => import('../views/index.vue')
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        layout: 'login'
      },
      component: () => import('../views/login.vue')
    },
    {
      path: '/details/:id',
      meta: {
        title: '导航'
      },
      component: () => import('../views/goods/details.vue'),
    },
    {
      path: '/404',
      component: () => import('../views/error/404.vue')
    },
    {
      path: '*',
      redirect: "/404"
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('user')) {
    next();
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next({
        path: '/login'
      });
    }
  }
  // 如果已经登录，并且要去登录页，就不让TA去登录页，重定向到首页
  if (to.path === '/login' && localStorage.getItem('user')) {
    next("/index");
  } else {
    next()
  }
})

export default router;
