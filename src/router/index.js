import { createRouter, createWebHashHistory } from 'vue-router'
// import LoginEmp from '/views/LoginEmp.vue'
// import AdminPanel from '@/views/AdminPanel.vue'

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
  // {
  //   path: '/login/company',
  //   name: 'Login Empresa',
  //   component: LoginEmp
  // },
  {
    path: '/cadastro',
    name: 'Formulario',
    component: () => import('@/views/Form1View.vue')
  },
  {
    path: '/cadastro2',
    name: 'Formulario2',
    component: () => import('@/views/Form2View.vue')
  },
  {
    path: '/cadastro3',
    name: 'Formulario3',
    component: () => import('@/views/Form3View.vue')
  },
  // {
  // //   path: '/admin',
  // //   name: 'Painel Admin',
  // //   component: AdminPanel
  // // },
  {
    path: '/success',
    name: 'successo',
    component: () => import('@/views/SuccessView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
