<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Kontakt - Quiltefryd | Ta kontakt for pristilbud',
  meta: [
    { name: 'description', content: 'Kontakt Marit Aslesen for longarm-quilting i Tønsberg. Ring 95 19 50 88 eller send melding.' }
  ]
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-quilt-cream to-quilt-beige py-12">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-serif text-quilt-burgundy mb-4">
          Kontakt meg
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl">
          Har du et prosjekt på gang? Send meg en melding eller ring – 
          så finner vi en god løsning sammen.
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-16">
      <div class="container-custom">
        <div class="flex justify-center">

          <!-- Contact Information -->
          <div class="max-w-lg w-full">
            <h2 class="text-2xl md:text-3xl font-serif text-quilt-burgundy mb-6 text-center">
              Kontaktinformasjon
            </h2>
            
            <!-- Contact Cards -->
            <div class="space-y-4 mb-8">

              <a href="tel:95195088" class="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-quilt-cream rounded-full flex items-center justify-center text-2xl">
                    📞
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Telefon</p>
                    <p class="text-lg font-medium text-quilt-forest">951 95 088</p>
                  </div>
                </div>
              </a>

              <a href="mailto:marit@quiltefryd.no" class="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-quilt-cream rounded-full flex items-center justify-center text-2xl">
                    ✉️
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">E-post</p>
                    <p class="text-lg font-medium text-quilt-forest">marit@quiltefryd.no</p>
                  </div>
                </div>
              </a>

              <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-quilt-cream rounded-full flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Henting og levering via Gjesdal Bunad, Søm og Håndverk</p>
                    <p class="text-lg font-medium text-quilt-forest">Tønsberg</p>
                    <p class="text-sm text-gray-600 mt-1">Øvre Langgate 71</p>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-quilt-cream rounded-full flex items-center justify-center text-2xl">
                    🕐
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Tilgjengelighet</p>
                    <p class="text-lg font-medium text-quilt-forest">Hverdager kl. 10-18</p>
                    <p class="text-sm text-gray-600 mt-1">Etter avtale</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Info -->
            <div class="bg-gradient-to-br from-quilt-cream to-white rounded-xl p-6">
              <h3 class="text-xl font-serif text-quilt-forest mb-3">
                Slik jobber vi sammen
              </h3>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start gap-2">
                  <span class="text-quilt-burgundy mt-1">1.</span>
                  <span>Du tar kontakt og beskriver ditt prosjekt</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-quilt-burgundy mt-1">2.</span>
                  <span>Jeg gir deg et uforpliktende pristilbud</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-quilt-burgundy mt-1">3.</span>
                  <span>Vi avtaler levering/henting</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-quilt-burgundy mt-1">4.</span>
                  <span>Jeg utfører arbeidet til avtalt tid</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <!-- Map/Directions Section -->
        <div class="flex justify-center mt-16">
          <div class="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 class="text-2xl font-serif text-quilt-burgundy mb-4">
              Besøksadresse
            </h2>
            <p class="text-gray-700 mb-4">
              Jeg bor til i Tønsberg. Nøyaktig adresse oppgis når vi har avtalt
              tid for levering/sending eller henting av ditt prosjekt.
            </p>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>