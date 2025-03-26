import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: '/customer-information',
          name: 'Customer Information',
          component: () => import('@/views/CustomerView.vue'),
        },
      ],
    },
  ],
})

export default router
