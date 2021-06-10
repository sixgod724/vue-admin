import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout/default'

import componentsRouter from './modules/comoponents'

// const router = new Router({
//   mode: 'history',
//   routes: [{
//       path: '/',
//       component: Layout,
//       redirect: '/dashboard',
//       children:[{
//         path: 'dashboard',
//         component: () => import('@/views/dashboard/index')
//       }]
//     },
//     {
//       path: '/manage',
//       component: Layout,
//       redirect: 'noRedirect',
//       meta:{
//         title: '项目管理'
//       },
//       children:[{
//         path: 'user',
//         meta: {
//           title: '关于作者'
//         },
//         component: () => import('@/views/manage/index')
//       },{
//         path: 'details/:id',
//         meta: {
//           title: '详情'
//         },
//         component: () => import('@/views/manage/details')
//       },{
//         path: 'meeting',
//         meta: {
//           title: '会议系统'
//         },
//         component: () => import('@/views/meeting')
//       }]
//     },
//     componentsRouter,
//     {
//       path: '/login',
//       name: 'Login',
//       component: () => import('../views/login.vue')
//     },
//     {
//       path: '/404',
//       component: () => import('../views/error/404.vue')
//     },
//     {
//       path: '*',
//       redirect: "/404"
//     },
//   ]
// })



export const constantRoutes = [{
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path: '/manage',
    component: Layout,
    redirect: 'noRedirect',
    meta: {
      title: '项目管理'
    },
    children: [{
      path: 'user',
      meta: {
        title: '关于作者'
      },
      component: () => import('@/views/manage/index')
    }, {
      path: 'details/:id',
      meta: {
        title: '详情'
      },
      component: () => import('@/views/manage/details')
    }, {
      path: 'meeting',
      meta: {
        title: '会议系统'
      },
      component: () => import('@/views/meeting')
    }]
  },
  componentsRouter,
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
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

const createRouter = () => new Router({
  mode: 'history',
  routes: constantRoutes,
})

const router = createRouter();

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
  // if (to.path === '/login' && localStorage.getItem('user')) {
  //   next("/index");
  // } else {
  //   next()
  // }
})

export default router;
