import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/PgHome.vue';
import LaMainContainer from "@/components/layout/LaMainContainer.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BaseHtmlLayout',
      component: LaMainContainer,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage
        }
      ]
    }
  ]
})

export default router
