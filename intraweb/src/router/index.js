import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import İzin from '../views/izin.vue'
import Hemsire from '../views/calisma/hemsire.vue'
import Doktor from '../views/calisma/doktor.vue'
import İsci from '../views/calisma/isci.vue'

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
      component: İzin
    },
    {
      path: '/hemsire',
      name: 'hemsire',
      component: Hemsire
    },
    {
      path: '/doktor',
      name: 'doktor',
      component: Doktor
    },
    {
      path: '/isci',
      name: 'isci',
      component: İsci
    }
  ]
})

export default router
