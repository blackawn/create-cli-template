import { createRouter, createWebHashHistory } from 'vue-router'

export const routeConfig = [
  {
    path: '/',
    redirect: '/client'
  },
  {
    path: '/client',
    redirect: '/client/home',
    name: 'client',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/client/home',
        name: 'home',
        meta: {
          title: '首页',
          tarbarIcon: 'flag-o',
        },
        component: () => import('@/pages/home/index.vue')
      },
      {
        path: '/client/mine',
        name: 'mine',
        meta: {
          title: '我的',
          tarbarIcon: 'contact',
        },
        component: () => import('@/pages/mine/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routeConfig
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from, failure) => {
  console.log(failure)
})

export default router
