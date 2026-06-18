import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import routes from '~pages'
import './style.css'
import App from './App.vue'

const legacyPathRedirects: Record<string, string> = {
  '/priser': '/monstre',
  '/tjenester': '/monstre',
}

const legacyPath = window.location.pathname.replace(/\/$/, '') || '/'
const legacyRedirect = legacyPathRedirects[legacyPath]

const shouldRedirectLegacyPath = legacyRedirect && window.location.hash === ''

if (shouldRedirectLegacyPath) {
  window.location.replace(`${window.location.origin}/#${legacyRedirect}`)
} else {
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  const head = createHead()

  createApp(App)
    .use(router)
    .use(head)
    .mount('#app')
}
