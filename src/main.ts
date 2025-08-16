import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import routes from '~pages'
import './style.css'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const head = createHead()

createApp(App)
  .use(router)
  .use(head)
  .mount('#app')
