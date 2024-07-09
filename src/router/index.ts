import { createMemoryHistory, createRouter } from 'vue-router'

const routes: any = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/view/layout/index.vue'),
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
    meta: { title: 'login' },
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
