<script setup lang="ts">
import { useHead } from '@vueuse/head'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'

const focusMainContent = () => {
  const mainContent = document.getElementById('main-content')
  if (!mainContent) return

  mainContent.focus({ preventScroll: true })
  mainContent.scrollIntoView({ block: 'start' })
}

// Global SEO setup
useHead({
  htmlAttrs: { lang: 'nb' },
  title: 'Quiltefryd - Longarm-quilting i Tønsberg | Marit Aslesen',
  meta: [
    { name: 'description', content: 'Profesjonell longarm-quilting i Tønsberg. Erfaren quilter med nesten 10 års erfaring fra Quiltefryd.' },
    { name: 'keywords', content: 'quilting Tønsberg, longarm quilting, vestfold, quiltefryd, Marit Aslesen' },
    { name: 'author', content: 'Marit Aslesen' },
    { property: 'og:title', content: 'Quiltefryd - Longarm-quilting i Tønsberg' },
    { property: 'og:description', content: 'Profesjonell longarm-quilting med nesten 10 års erfaring.' },
    { property: 'og:url', content: 'https://quiltefryd.no' },
    { property: 'og:site_name', content: 'Quiltefryd' },
    { property: 'og:locale', content: 'nb_NO' },
    { property: 'og:type', content: 'website' },
    { name: 'robots', content: 'index, follow' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Quiltefryd – Longarm-quilting ved Marit Aslesen',
        image: 'https://quiltefryd.no/images/IMG_2087.jpg',
        email: 'marit@quiltefryd.no',
        telephone: '+4795195088',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Tønsberg',
          addressCountry: 'NO'
        },
        areaServed: 'NO',
        url: 'https://quiltefryd.no',
        description: 'Profesjonell longarm-quilting. Erfaren quilter, tidligere driver av Quiltefryd.',
        priceRange: 'NOK',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '10:00',
          closes: '18:00'
        }
      })
    }
  ]
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <a href="#main-content" class="skip-link" @click.prevent="focusMainContent">
      Hopp til hovedinnhold
    </a>
    <AppHeader />
    <main id="main-content" class="flex-grow" tabindex="-1">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
