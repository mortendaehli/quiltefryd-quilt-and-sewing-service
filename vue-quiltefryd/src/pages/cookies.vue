<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Informasjonskapsler - Quiltefryd',
  meta: [
    { name: 'description', content: 'Informasjon om bruk av informasjonskapsler på Quiltefryd.' }
  ]
})
</script>

<template>
  <div class="min-h-screen">
    <section class="bg-gradient-to-br from-quilt-cream to-quilt-beige py-12">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-serif text-quilt-burgundy mb-4">
          Informasjonskapsler
        </h1>
      </div>
    </section>

    <section class="py-16">
      <div class="container-custom">
        <div class="prose prose-lg max-w-3xl">
          <h2 class="text-2xl font-serif text-quilt-burgundy mb-4">
            Bruk av informasjonskapsler
          </h2>
          
          <p class="text-gray-700 mb-4">
            Dette nettstedet bruker minimalt med informasjonskapsler for å gi deg 
            best mulig opplevelse.
          </p>

          <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
            Hva er informasjonskapsler?
          </h3>
          <p class="text-gray-700 mb-4">
            Informasjonskapsler (cookies) er små tekstfiler som lagres på din 
            enhet når du besøker nettsteder. De brukes til å huske preferanser 
            og forbedre brukeropplevelsen.
          </p>

          <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
            Våre informasjonskapsler
          </h3>
          <p class="text-gray-700 mb-4">
            Dette nettstedet bruker kun nødvendige informasjonskapsler:
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Formspree:</strong> Når du sender kontaktskjema, kan Formspree 
              sette informasjonskapsler for å forhindre spam
            </li>
          </ul>

          <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
            Vi bruker IKKE
          </h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Sporingscookies</li>
            <li>Markedsføringscookies</li>
            <li>Analysecookies</li>
            <li>Tredjeparts reklamecookies</li>
          </ul>

          <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
            Administrere informasjonskapsler
          </h3>
          <p class="text-gray-700 mb-4">
            Du kan blokkere eller slette informasjonskapsler i nettleserens 
            innstillinger. Merk at dette kan påvirke funksjonaliteten på nettstedet.
          </p>

          <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
            Kontakt
          </h3>
          <p class="text-gray-700">
            Spørsmål om informasjonskapsler? Kontakt meg på 
            <a href="mailto:marit@quiltefryd.no" class="text-quilt-burgundy underline">
              marit@quiltefryd.no
            </a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>