import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'
const Parent = () => import('@/view/layout/parent.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/view/layout/index.vue'),
    children: [],
    redirect: () => {
      return { path: '/layout/home' }
    },
  },
  {
    path: '/layout',
    component: () => import('@/view/layout/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/view/home/index.vue'),
        meta: { title: 'home' },
      },
      {
        path: 'services',
        component: () => import('@/view/services/index.vue'),
        meta: { title: 'services' },
      },
      {
        path: 'about',
        component: () => import('@/view/about/index.vue'),
        meta: { title: 'about' },
      },
      {
        path: 'faq',
        component: () => import('@/view/faq/index.vue'),
        meta: { title: 'faq' },
      },
      {
        path: 'contact',
        component: () => import('@/view/contact/index.vue'),
        meta: { title: 'contact' },
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/view/layout/login.vue'),
    meta: { title: 'login', auth: false },
  },
  //页面中的二级页面
  {
    path: '/user',
    name: 'userPage',
    component: Parent,
    children: [
      {
        path: 'detail',
        name: 'detail',
        component: () => import('@/view/user/detail.vue'),
        meta: {
          title: '用户二级页面',
          pass: true,
        },
      },
    ],
  },

  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/view/layout/404.vue'),
    meta: {
      title: '404',
      auth: false,
    },
  },
  {
    //不存在的路由
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
})

export default router
