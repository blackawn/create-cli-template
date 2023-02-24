import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/client'
  },
  {
    path: '/client',
    redirect: '/client/home',
    name: 'client',
    component: () => import('~/layouts/index.vue'),
    children: [
      {
        path: '/client/home',
        name: 'home',
        meta: {
          title: '首页',
          render: true
        },
        component: () => import('~/pages/home/index.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to: any, from, next) => {
  next();
});
router.afterEach((to, from) => {

});

export const routerList =
  routes.find((item: any) => item.name === 'client')?.children?.filter((item: any) => item.meta.render);

export default router;

