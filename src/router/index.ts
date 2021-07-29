import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'
import layout from '@/components/LayoutBox.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/product',
        name: 'Product',
        component: () => import('@/views/product/index.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
