import { createRouter, createWebHashHistory } from 'vue-router'
import Form1View from '@/views/Form1View.vue'
import Form2View from '@/views/Form2View.vue'
import Form3View from '@/views/Form3View.vue'
import SuccessView from '@/views/SuccessView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/login/candidate',
    name: 'Login Candidato',
    component: () => import('@/views/LoginCand.vue')
  },
  {
    path: '/cadastro',
    name: 'Formulario',
    component: Form1View
  },
  {
    path: '/cadastro2',
    name: 'Formulario2',
    component: Form2View
  },
  {
    path: '/cadastro3',
    name: 'Formulario3',
    component: Form3View
  },
  {
    path: '/success',
    name: 'successo',
    component: SuccessView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
