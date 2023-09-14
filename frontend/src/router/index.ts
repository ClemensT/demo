import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/edit',
      name: 'Edit',
      component: () => import('../views/EditView.vue')
    },
    {
      path: '/learn',
      name: 'Learn',
      component: () => import('../views/LearnView.vue')
    },
  ]
})

export default router
