import { createRouter, createWebHashHistory } from 'vue-router'

const routeConfig = [
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
          title: 'home'
        },
        component: () => import('@/pages/home/index.vue')
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
