<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AppNavigation from './AppNavigation.vue'

const isMenuOpen = ref(false)
const route = useRoute()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

watch(() => route.fullPath, closeMenu)
</script>

<template>
  <div>
    <header class="bg-white shadow-md sticky top-0 z-50">
      <div class="container-custom">
        <div class="flex justify-between items-center py-4">
          <!-- Logo/Brand -->
          <RouterLink to="/" class="flex items-center space-x-2">
            <div class="flex flex-col">
              <span class="text-2xl font-serif text-quilt-burgundy">Quiltefryd</span>
              <span class="text-sm text-quilt-forest">Marit Aslesen</span>
            </div>
          </RouterLink>

          <!-- Desktop Navigation -->
          <nav class="hidden md:block">
            <AppNavigation />
          </nav>

          <!-- Desktop CTA -->
          <div class="hidden md:flex items-center space-x-4">
            <RouterLink to="/kontakt" class="btn-primary">
              Kontakt meg
            </RouterLink>
          </div>

          <!-- Mobile Menu Button -->
          <button
            type="button"
            @click="toggleMenu"
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            :aria-label="isMenuOpen ? 'Lukk meny' : 'Åpne meny'"
            :aria-expanded="isMenuOpen"
            aria-controls="mobile-navigation"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path 
                v-if="isMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12" 
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" id="mobile-navigation" class="md:hidden border-t border-gray-200">
        <div class="container-custom py-4">
          <AppNavigation mobile @item-click="closeMenu" />
          <div class="mt-4 pt-4 border-t border-gray-200">
            <RouterLink
              to="/kontakt"
              class="block btn-primary text-center"
              @click="closeMenu"
            >
              Kontakt meg
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Mobile Contact Bar -->
      <nav class="md:hidden border-t border-white/20 bg-quilt-burgundy text-white" aria-label="Rask kontakt">
        <div class="grid grid-cols-2">
          <a href="tel:95195088" class="py-3 text-center font-medium hover:bg-white/10 transition-colors">
            Ring
            <span class="block text-sm font-normal opacity-90">95 19 50 88</span>
          </a>
          <a href="mailto:marit@quiltefryd.no" class="py-3 text-center font-medium hover:bg-white/10 transition-colors border-l border-white/20">
            E-post
            <span class="block text-sm font-normal opacity-90">Send melding</span>
          </a>
        </div>
      </nav>
    </header>
  </div>
</template>
