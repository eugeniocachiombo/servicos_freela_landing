import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
  { 
    path: '/home', 
    name: 'home', 
    component: import('@/pages/Home.vue')
  },
]

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes,
})

export default router