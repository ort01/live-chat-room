import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from "../firebase/config"


//auth guard
const requireAuth = (to: any, from: any, next: any) => {
  let user = projectAuth.currentUser

  if (!user) {
    next({ name: "Welcome" })
  } else {
    next()
  }
}

const requireNoAuth = (to: any, from: any, next: any) => {
  let user = projectAuth.currentUser

  if (user) {
    next({ name: "Chatroom" })
  } else {
    next()
  }
}


//routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('../views/WelcomeView.vue'),
      beforeEnter: requireNoAuth
    },
    {
      path: '/chatroom',
      name: 'Chatroom',
      component: () => import('../views/ChatroomView.vue'),
      beforeEnter: requireAuth
    }
  ]
})


export default router
