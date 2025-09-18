<template>
  <section class="section-padding bg-gradient-to-b from-white to-quilt-cream/30">
    <div class="container-custom">
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <span class="text-quilt-gold uppercase tracking-[0.2em] text-sm font-medium">Tjenester</span>
        <h2 class="text-4xl md:text-5xl font-serif text-quilt-forest mb-6 mt-3 font-light">
          Mine sømtjenester
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed">
          Jeg tilbyr et bredt spekter av sømtjenester med fokus på kvalitet og håndverk
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <router-link 
          v-for="(service, index) in services" 
          :key="index" 
          :to="service.link"
          class="group card hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
        >
          <!-- Decorative corner accent -->
          <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-quilt-gold/5 to-transparent rounded-bl-full" />
          
          <div class="flex gap-6 relative z-10">
            <div class="flex-shrink-0">
              <div class="w-20 h-20 bg-gradient-to-br from-quilt-cream to-quilt-beige/50 rounded-2xl flex items-center justify-center text-quilt-forest group-hover:from-quilt-beige group-hover:to-quilt-gold/20 group-hover:text-quilt-burgundy transition-all shadow-sm">
                <SewingIcons :name="service.icon" class="w-10 h-10" />
              </div>
            </div>
            <div class="flex-grow space-y-3">
              <h3 class="text-xl font-serif text-quilt-brown group-hover:text-quilt-burgundy transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ service.description }}
              </p>
              <span class="inline-flex items-center text-quilt-burgundy font-medium pt-1 group-hover:gap-3 transition-all">
                Les mer 
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </router-link>
      </div>

      <div class="text-center mt-16">
        <router-link to="/tjenester" class="btn-primary inline-flex items-center gap-2 group">
          <span>Se alle tjenester</span>
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SewingIcons from '@/components/icons/SewingIcons.vue'

const services = [
  {
    title: 'Longarm-quilting',
    description: 'Profesjonell quilting med longarm-maskin. Kant-til-kant mønster, vatt og bakstykke.',
    link: '/tjenester#longarm-quilting',
    icon: 'Quilt' as const
  },
  {
    title: 'Gardiner og puter',
    description: 'Skreddersydde gardiner, puter og annen interiørsøm etter dine mål og ønsker.',
    link: '/tjenester#interiorsom',
    icon: 'Curtain' as const
  },
  {
    title: 'Diverse søm',
    description: 'Ulike sømoppgaver som bukseopplegg, glidelåsbytte, reparasjoner og andre tilpasninger.',
    link: '/tjenester#diverse-som',
    icon: 'Scissors' as const
  }
]
</script>