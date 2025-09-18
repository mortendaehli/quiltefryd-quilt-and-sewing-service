<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Priser - Quiltefryd | Quilting og søm i Tønsberg',
  meta: [
    { name: 'description', content: 'Prisliste for quilting av tepper og diverse sømtjenester som gardiner, puter og liftgardiner. Se priser for E2E-quilting og spesialoppdrag.' }
  ]
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-quilt-cream to-quilt-beige py-12">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-serif text-quilt-burgundy mb-4">
          Prisliste
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl">
          Her finner du en oversikt over mine priser. Jeg tilbyr konkurransedyktige priser og skreddersydde løsninger.
        </p>
      </div>
    </section>

    <!-- Pricing Content -->
    <section class="py-16">
      <div class="container-custom">

        <!-- Quilting Prices -->
        <div class="mb-12">
          <h2 class="text-2xl md:text-3xl font-serif text-quilt-burgundy mb-6">
            Quilting av tepper
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
                      <p class="font-medium">E2E-quilting (heldekkende mønster)</p>
                      <p class="text-sm text-gray-600">Inkluderer tråd. Jeg har mange mønstre å velge mellom.</p>
                    </div>
                  </td>
                  <td class="text-right px-6 py-4 font-medium">350-400 kr pr. m²</td>
                </tr>
                 <tr>
                  <td class="px-6 py-4">
                    <div>
                      <p class="font-medium">Vatt til tepper</p>
                      <p class="text-sm text-gray-600">Jeg har vatt tilgjengelig for dine prosjekter.</p>
                    </div>
                  </td>
                  <td class="text-right px-6 py-4 font-medium">Pris på forespørsel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Sewing Services Prices -->
        <div class="mb-12">
          <h2 class="text-2xl md:text-3xl font-serif text-quilt-burgundy mb-6">
            Søm
          </h2>
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <table class="w-full">
              <thead class="bg-quilt-cream">
                <tr>
                  <th class="text-left px-6 py-4 font-serif text-quilt-forest">Type arbeid</th>
                  <th class="text-right px-6 py-4 font-serif text-quilt-forest">Priser fra</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4">Legge opp gardiner (faste stoffer)</td>
                  <td class="text-right px-6 py-4 font-medium">250,- pr. stk.</td>
                </tr>
                <tr>
                  <td class="px-6 py-4">Legge opp lingardiner</td>
                  <td class="text-right px-6 py-4 font-medium">300,- pr. stk.</td>
                </tr>
                <tr>
                  <td class="px-6 py-4">Legge opp gardiner med fór</td>
                  <td class="text-right px-6 py-4 font-medium">450,- pr. stk.</td>
                </tr>
                <tr>
                  <td class="px-6 py-4">
                    <div>
                      <p class="font-medium">Sy liftgardiner under 1 meter</p>
                      <p class="text-sm text-gray-600">Tillegg på 30% hvis mønster må tilpasses.</p>
                    </div>
                  </td>
                  <td class="text-right px-6 py-4 font-medium">2000,- pr. stk.</td>
                </tr>
                <tr>
                  <td class="px-6 py-4">
                    <div>
                      <p class="font-medium">Sy liftgardin 1-2 meter</p>
                      <p class="text-sm text-gray-600">Tillegg på 30% hvis mønster må tilpasses.</p>
                    </div>
                  </td>
                  <td class="text-right px-6 py-4 font-medium">2800,- pr. stk.</td>
                </tr>
                <tr>
                  <td class="px-6 py-4">Sy pyntepute ca. 50x50 cm med glidelås</td>
                  <td class="text-right px-6 py-4 font-medium">500,- pr. stk.</td>
                </tr>
                <tr>
                  <td class="px-6 py-4">Andre typer sømoppdrag</td>
                  <td class="text-right px-6 py-4 font-medium">800,- pr. time</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Pickup/Delivery Info -->
        <div class="bg-gradient-to-br from-quilt-beige to-quilt-cream rounded-2xl p-8 mb-12 text-center">
          <h2 class="text-2xl font-serif text-quilt-burgundy mb-4">
            Henting og Levering
          </h2>
          <p class="text-lg text-gray-700 max-w-2xl mx-auto">
            Vi avtaler via SMS eller telefon for henting/levering i bunadsbutikken i Øvre Langgate 71 (Gjesdal bunad søm og håndverk).
          </p>
        </div>

        <!-- CTA Section -->
        <div class="text-center bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 class="text-3xl font-serif text-quilt-burgundy mb-4">
            Har du et prosjekt?
          </h2>
          <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Kontakt meg for et uforpliktende pristilbud. Jeg hjelper deg gjerne!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:95195088" class="btn-secondary">
              Ring 95 19 50 88
            </a>
            <RouterLink to="/kontakt" class="btn-primary">
              Send en melding
            </RouterLink>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>