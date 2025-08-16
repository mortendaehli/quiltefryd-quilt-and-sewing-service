<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Personvern - Quiltefryd',
  meta: [
    { name: 'description', content: 'Personvernerklæring for Quiltefryd.' }
  ]
})
</script>

<template>
  <div class="min-h-screen">
    <section class="bg-gradient-to-br from-quilt-cream to-quilt-beige py-12">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-serif text-quilt-burgundy mb-4">
          Personvernerklæring
        </h1>
      </div>
    </section>

    <section class="py-16">
      <div class="container-custom">
        <div class="prose prose-lg max-w-3xl">
          <h2 class="text-2xl font-serif text-quilt-burgundy mb-4">
            Behandling av personopplysninger
          </h2>
          
          <p class="text-gray-700 mb-4">
            Jeg tar ditt personvern på alvor og behandler alle personopplysninger 
            med respekt og konfidensialitet.
          </p>

          <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
            Hvilke opplysninger samler jeg inn?
          </h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Navn og kontaktinformasjon (telefon, e-post)</li>
            <li>Informasjon om ditt sømprosjekt</li>
            <li>Leveringsadresse ved behov</li>
          </ul>

          <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
            Hvordan brukes opplysningene?
          </h3>
          <p class="text-gray-700 mb-4">
            Opplysningene brukes kun til:
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Å besvare din henvendelse</li>
            <li>Å utføre bestilte tjenester</li>
            <li>Å kontakte deg angående ditt prosjekt</li>
          </ul>

          <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
            Deling av opplysninger
          </h3>
          <p class="text-gray-700 mb-4">
            Jeg deler aldri dine personopplysninger med tredjeparter, med unntak av:
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Formspree for behandling av kontaktskjema</li>
            <li>Posten/Bring ved forsendelse</li>
          </ul>

          <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
            Lagring og sletting
          </h3>
          <p class="text-gray-700 mb-4">
            Opplysninger lagres kun så lenge det er nødvendig for å fullføre 
            oppdraget. Du kan når som helst be om innsyn eller sletting av 
            dine data.
          </p>

          <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
            Kontakt
          </h3>
          <p class="text-gray-700">
            Har du spørsmål om personvern? Ta kontakt på 
            <a href="mailto:marit@quiltefryd.no" class="text-quilt-burgundy underline">
              marit@quiltefryd.no
            </a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>