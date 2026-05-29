<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Hero from '@/components/home/Hero.vue'
import ServiceCards from '@/components/home/ServiceCards.vue'
import TrustSection from '@/components/home/TrustSection.vue'

useHead({
  title: 'Quiltefryd - Longarm-quilting i Tønsberg | Marit Aslesen',
  meta: [
    { name: 'description', content: 'Profesjonell longarm-quilting i Tønsberg. Erfaren quilter med nesten 10 års erfaring fra Quiltefryd.' }
  ]
})
</script>

<template>
  <div>
    <Hero />
    <ServiceCards />
    <TrustSection />
  </div>
</template>