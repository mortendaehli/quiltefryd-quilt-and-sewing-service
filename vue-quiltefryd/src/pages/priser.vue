<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Priser - Quiltefryd | Sømtjenester Tønsberg',
  meta: [
    { name: 'description', content: 'Prisliste for quilting, sømtjenester og reparasjoner. Konkurransedyktige priser og gratis pristilbud.' }
  ]
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-quilt-cream to-quilt-beige py-12">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-serif text-quilt-burgundy mb-4">
          Priser
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl">
          Konkurransedyktige priser og tydelige avtaler. 
          Du får alltid et tilbud før jeg starter arbeidet.
        </p>
      </div>
    </section>

    <!-- Pricing Content -->
    <section class="py-16">
      <div class="container-custom">
        
        <!-- Longarm Quilting Prices -->
        <div class="mb-12">
          <h2 class="text-2xl md:text-3xl font-serif text-quilt-burgundy mb-6">
            Longarm-quilting
          </h2>
          
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <table class="w-full">
              <thead class="bg-quilt-cream">
                <tr>
                  <th class="text-left px-6 py-4 font-serif text-quilt-forest">Tjeneste</th>
                  <th class="text-right px-6 py-4 font-serif text-quilt-forest">Pris</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4">
                    <div>
                      <p class="font-medium">Kant-til-kant quilting</p>
                      <p class="text-sm text-gray-600">Enkle mønstre over hele teppet</p>
                    </div>
                  </td>
                  <td class="text-right px-6 py-4 font-medium">fra kr 325 per m²</td>
                </tr>
                <tr>
                  <td class="px-6 py-4">
                    <div>
                      <p class="font-medium">Custom quilting</p>
                      <p class="text-sm text-gray-600">Avanserte mønstre og design</p>
                    </div>
                  </td>
                  <td class="text-right px-6 py-4 font-medium">fra kr 450 per m²</td>
                </tr>
                <tr>
                  <td class="px-6 py-4">
                    <div>
                      <p class="font-medium">Montering av vatt</p>
                      <p class="text-sm text-gray-600">Jeg monterer vatt før quilting</p>
                    </div>
                  </td>
                  <td class="text-right px-6 py-4 font-medium">kr 50 per meter</td>
                </tr>
                <tr>
                  <td class="px-6 py-4">
                    <div>
                      <p class="font-medium">Montering av bakstykke</p>
                      <p class="text-sm text-gray-600">Jeg syr sammen bakstykke</p>
                    </div>
                  </td>
                  <td class="text-right px-6 py-4 font-medium">kr 50 per meter</td>
                </tr>
                <tr>
                  <td class="px-6 py-4">
                    <div>
                      <p class="font-medium">Påsying av lukkekant</p>
                      <p class="text-sm text-gray-600">Ferdigstilling med binding</p>
                    </div>
                  </td>
                  <td class="text-right px-6 py-4 font-medium">kr 50 per løpemeter</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mt-4 bg-quilt-cream rounded-lg p-4">
            <p class="text-sm text-gray-700">
              <strong>Merk:</strong> Minste faktureringsbeløp er kr 500. 
              Vatt kan kjøpes hos meg eller leveres av kunde.
            </p>
          </div>
        </div>

        <!-- Sewing Services Prices -->
        <div class="mb-12">
          <h2 class="text-2xl md:text-3xl font-serif text-quilt-burgundy mb-6">
            Sømtjenester
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Gardiner -->
            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-xl font-serif text-quilt-forest mb-4">
                Gardiner
              </h3>
              <ul class="space-y-3">
                <li class="flex justify-between">
                  <span>Opplegg, enkle gardiner</span>
                  <span class="font-medium">fra kr 200</span>
                </li>
                <li class="flex justify-between">
                  <span>Liftgardiner</span>
                  <span class="font-medium">fra kr 400</span>
                </li>
                <li class="flex justify-between">
                  <span>Panelgardiner</span>
                  <span class="font-medium">fra kr 350</span>
                </li>
                <li class="flex justify-between">
                  <span>Med fôr/blackout</span>
                  <span class="font-medium">tillegg kr 150</span>
                </li>
              </ul>
            </div>

            <!-- Puter -->
            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-xl font-serif text-quilt-forest mb-4">
                Puter
              </h3>
              <ul class="space-y-3">
                <li class="flex justify-between">
                  <span>Putetrekk, enkle</span>
                  <span class="font-medium">fra kr 150</span>
                </li>
                <li class="flex justify-between">
                  <span>Putetrekk med glidelås</span>
                  <span class="font-medium">fra kr 200</span>
                </li>
                <li class="flex justify-between">
                  <span>Pynteputer med piping</span>
                  <span class="font-medium">fra kr 250</span>
                </li>
                <li class="flex justify-between">
                  <span>Sitteunderlag</span>
                  <span class="font-medium">fra kr 300</span>
                </li>
              </ul>
            </div>

            <!-- Reparasjon -->
            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-xl font-serif text-quilt-forest mb-4">
                Reparasjon og omsøm
              </h3>
              <ul class="space-y-3">
                <li class="flex justify-between">
                  <span>Bukseopplegg</span>
                  <span class="font-medium">fra kr 150</span>
                </li>
                <li class="flex justify-between">
                  <span>Glidelåsbytte, bukse</span>
                  <span class="font-medium">fra kr 250</span>
                </li>
                <li class="flex justify-between">
                  <span>Glidelåsbytte, jakke</span>
                  <span class="font-medium">fra kr 350</span>
                </li>
                <li class="flex justify-between">
                  <span>Innsving</span>
                  <span class="font-medium">fra kr 200</span>
                </li>
              </ul>
            </div>

            <!-- Bunad -->
            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-xl font-serif text-quilt-forest mb-4">
                Bunad
              </h3>
              <ul class="space-y-3">
                <li class="flex justify-between">
                  <span>Opplegg skjørt</span>
                  <span class="font-medium">fra kr 300</span>
                </li>
                <li class="flex justify-between">
                  <span>Justering liv</span>
                  <span class="font-medium">fra kr 400</span>
                </li>
                <li class="flex justify-between">
                  <span>Bytte hekter</span>
                  <span class="font-medium">fra kr 150</span>
                </li>
                <li class="flex justify-between">
                  <span>Andre justeringer</span>
                  <span class="font-medium">etter avtale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Important Notes -->
        <div class="bg-gradient-to-br from-quilt-cream to-white rounded-2xl p-8 mb-12">
          <h2 class="text-2xl font-serif text-quilt-burgundy mb-4">
            Viktig å vite
          </h2>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start gap-2">
              <span class="text-quilt-burgundy mt-1">📌</span>
              <span>Alle priser er veiledende "fra-priser" og kan variere basert på arbeidets omfang</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-quilt-burgundy mt-1">📌</span>
              <span>Materialer kommer i tillegg hvis ikke annet er avtalt</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-quilt-burgundy mt-1">📌</span>
              <span>Gratis pristilbud på alle oppdrag</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-quilt-burgundy mt-1">📌</span>
              <span>Hastearbeid (under 1 uke) tillegges 50%</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-quilt-burgundy mt-1">📌</span>
              <span>Rabatt ved større oppdrag - spør om pris!</span>
            </li>
          </ul>
        </div>

        <!-- CTA Section -->
        <div class="text-center bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 class="text-3xl font-serif text-quilt-burgundy mb-4">
            Få ditt pristilbud
          </h2>
          <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Kontakt meg for et uforpliktende pristilbud på ditt prosjekt. 
            Jeg svarer vanligvis innen 1-2 virkedager.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:95195088" class="btn-secondary">
              Ring 95 19 50 88
            </a>
            <RouterLink to="/kontakt" class="btn-primary">
              Send forespørsel
            </RouterLink>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>