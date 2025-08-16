<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import AppNavigation from './AppNavigation.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <div>
    <header class="bg-white shadow-md sticky top-0 z-50">
      <div class="container-custom">
        <div class="flex justify-between items-center py-4">
          <!-- Logo/Brand -->
          <RouterLink to="/public" class="flex items-center space-x-2">
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
            <a href="tel:95195088" class="text-quilt-forest hover:text-quilt-burgundy transition-colors">
              <span class="font-medium">95 19 50 88</span>
            </a>
            <RouterLink to="/kontakt" class="btn-primary">
              Kontakt meg
            </RouterLink>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMenu"
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Meny"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div v-if="isMenuOpen" class="md:hidden border-t border-gray-200">
        <div class="container-custom py-4">
          <AppNavigation mobile @item-click="closeMenu" />
          <div class="mt-4 pt-4 border-t border-gray-200">
            <a href="tel:95195088" class="block py-2 text-quilt-forest font-medium">
              📞 Ring: 95 19 50 88
            </a>
            <RouterLink 
              to="/kontakt" 
              class="block mt-2 btn-primary text-center"
              @click="closeMenu"
            >
              Kontakt meg
            </RouterLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile Sticky Contact Bar -->
    <div class="md:hidden fixed bottom-0 left-0 right-0 bg-quilt-burgundy text-white z-40">
      <div class="flex">
        <a href="tel:95195088" class="flex-1 py-3 text-center border-r border-white/20">
          <span class="text-sm">Ring</span>
          <span class="block font-medium">95 19 50 88</span>
        </a>
        <a href="mailto:marit@quiltefryd.no" class="flex-1 py-3 text-center">
          <span class="text-sm">Send</span>
          <span class="block font-medium">E-post</span>
        </a>
      </div>
    </div>
  </div>
</template>