import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import izin from '../views/izin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/izin',
      name: 'izin',
      component: izin
    },
    
  ]
})

export default router
