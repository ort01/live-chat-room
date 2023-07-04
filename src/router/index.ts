import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('../views/WelcomeView.vue')
    },
    {
      path: '/chatroom',
      name: 'Chatroom',
      component: () => import('../views/ChatroomView.vue')
    }
  ]
})

export default router
