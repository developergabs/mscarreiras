import { createApp } from 'vue'
import VueTheMask from 'vue-the-mask'
import App from './App.vue'
import router from './router/rotas'

createApp(App).use(router).use(VueTheMask).mount('#app')
