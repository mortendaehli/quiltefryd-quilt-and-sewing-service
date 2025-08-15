<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Hero from '@/components/home/Hero.vue'
import ServiceCards from '@/components/home/ServiceCards.vue'
import ProcessSteps from '@/components/home/ProcessSteps.vue'
import TrustSection from '@/components/home/TrustSection.vue'

useHead({
  title: 'Quiltefryd - Quilt- og sømtjenester i Tønsberg | Marit Aslesen',
  meta: [
    { name: 'description', content: 'Longarm-quilting, gardiner og puter, bunadsjustering og små reparasjoner. Erfaren quilter med over 10 års erfaring fra Quiltefryd.' }
  ]
})
</script>

<template>
  <div>
    <Hero />
    <ServiceCards />
    <ProcessSteps />
    <TrustSection />
  </div>
</template>