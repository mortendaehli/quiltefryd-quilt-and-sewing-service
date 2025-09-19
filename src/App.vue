<script setup lang="ts">
import { useHead } from '@vueuse/head'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'

// Global SEO setup
useHead({
  htmlAttrs: { lang: 'nb' },
  title: 'Quiltefryd - Quilt- og sømtjenester i Tønsberg | Marit Aslesen',
  meta: [
    { name: 'description', content: 'Longarm-quilting, gardiner og puter, og små reparasjoner. Erfaren quilter med nesten 10 års erfaring fra Quiltefryd.' },
    { name: 'keywords', content: 'quilting Tønsberg, longarm quilting, vestfold, gardiner sying, quiltefryd, Marit Aslesen' },
    { name: 'author', content: 'Marit Aslesen' },
    { property: 'og:title', content: 'Quiltefryd - Quilt- og sømtjenester i Tønsberg' },
    { property: 'og:description', content: 'Longarm-quilting, gardiner og puter og små reparasjoner.' },
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
        name: 'Quiltefryd – Quilt og Søm ved Marit Aslesen',
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
        description: 'Longarm-quilting, interiørsøm (gardiner, puter) og enkle bunadsjobber. Erfaren quilter, tidligere driver av Quiltefryd.',
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
    <AppHeader />
    <main class="flex-grow">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
