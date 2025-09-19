<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="bg-quilt-forest text-white mt-16 pb-20 md:pb-0">
    <div class="container-custom py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Kontakt Info -->
        <div>
          <h3 class="text-xl font-serif mb-4 text-quilt-cream">Kontakt</h3>
          <div class="space-y-2">
            <p>
              <a href="mailto:marit@quiltefryd.no" class="hover:text-quilt-cream transition-colors">
                ✉️ marit@quiltefryd.no
              </a>
            </p>
            <p>📍 Tønsberg</p>
            <p class="text-sm opacity-90">Adresse oppgis ved avtale</p>
          </div>
        </div>

        <!-- Tjenester -->
        <div>
          <h3 class="text-xl font-serif mb-4 text-quilt-cream">Tjenester</h3>
          <ul class="space-y-2">
            <li>
              <RouterLink to="/tjenester#longarm-quilting" class="hover:text-quilt-cream transition-colors">
                Longarm-quilting
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/tjenester#interiorsom" class="hover:text-quilt-cream transition-colors">
                Interiørsøm - Gardiner og puter
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/tjenester#diverse-som" class="hover:text-quilt-cream transition-colors">
                Diverse søm
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Tilgjengelighet -->
        <div>
          <h3 class="text-xl font-serif mb-4 text-quilt-cream">Tilgjengelig etter avtale</h3>
          <p class="text-sm opacity-90 mb-4">Kontakt meg for å avtale tid som passer deg</p>
          <div>
            <RouterLink
              to="/kontakt"
              class="inline-block bg-quilt-burgundy text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all"
            >
              Ta kontakt
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-white/20">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-center md:text-left">
            <p>&copy; {{ currentYear }} Quiltefryd - Marit Aslesen</p>
            <p class="text-sm opacity-90">Quilt- og sømtjenester i Tønsberg</p>
          </div>
          <div class="flex space-x-4 text-sm">
            <RouterLink to="/personvern" class="hover:text-quilt-cream transition-colors">
              Personvern
            </RouterLink>
            <span class="opacity-50">|</span>
            <RouterLink to="/cookies" class="hover:text-quilt-cream transition-colors">
              Informasjonskapsler
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>