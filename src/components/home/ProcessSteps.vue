<template>
  <section class="section-padding bg-gradient-to-b from-quilt-cream/30 to-white">
    <div class="container-custom">
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <span class="text-quilt-gold uppercase tracking-[0.2em] text-sm font-medium">Prosess</span>
        <h2 class="text-4xl md:text-5xl font-serif text-quilt-forest mb-6 mt-3 font-light">
          Slik jobber jeg
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed">
          En enkel og trygg prosess fra første kontakt til ferdig resultat
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
        <!-- Connection line -->
        <div class="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-quilt-gold/30 to-transparent"></div>
        
        <div 
          v-for="(step, index) in steps" 
          :key="index" 
          :class="`relative animate-slide-up ${step.delay}`"
        >
          <div class="text-center relative z-10 group">
            <!-- Icon Circle -->
            <div class="mx-auto w-28 h-28 bg-gradient-to-br from-white to-quilt-cream rounded-full shadow-xl flex items-center justify-center mb-6 relative transform group-hover:scale-110 transition-transform duration-300">
              <ProcessIcons :name="step.icon" class="w-12 h-12 text-quilt-forest" />
              <div class="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-quilt-burgundy to-quilt-brown text-white rounded-full flex items-center justify-center font-bold shadow-lg animate-pulse-soft">
                {{ step.number }}
              </div>
            </div>
            
            <!-- Content -->
            <h3 class="text-xl font-serif text-quilt-brown mb-3 group-hover:text-quilt-burgundy transition-colors">
              {{ step.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed max-w-xs mx-auto">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="text-center mt-16 animate-fade-in">
        <p class="text-lg text-gray-700 mb-6">
          Klar for å komme i gang med ditt sømprosjekt?
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:95195088" class="btn-secondary group">
            <span class="inline-flex items-center gap-2">
              <ProcessIcons name="Phone" class="w-5 h-5" />
              Ring 95 19 50 88
            </span>
          </a>
          <router-link to="/kontakt" class="btn-primary group">
            <span class="inline-flex items-center gap-2">
              Ta kontakt
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProcessIcons from '@/components/icons/ProcessIcons.vue'

const steps = [
  {
    number: '1',
    title: 'Ta kontakt',
    description: 'Ring eller send meg en melding om ditt prosjekt',
    icon: 'Phone' as const,
    delay: 'delay-0'
  },
  {
    number: '2',
    title: 'Avtale og pris',
    description: 'Vi avtaler detaljer og du får et prisoverslag',
    icon: 'Chat' as const,
    delay: 'delay-100'
  },
  {
    number: '3',
    title: 'Levering/utførelse',
    description: 'Jeg utfører arbeidet med omhu og kvalitet',
    icon: 'Sparkles' as const,
    delay: 'delay-200'
  }
]
</script>