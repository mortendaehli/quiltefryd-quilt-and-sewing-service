<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Tjenester - Quiltefryd | Longarm-quilting, sømtjenester i Tønsberg',
  meta: [
    { name: 'description', content: 'Profesjonell longarm-quilting, gardiner, puter og reparasjon. Se alle våre sømtjenester.' }
  ]
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-quilt-cream to-quilt-beige py-12">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-serif text-quilt-burgundy mb-4">
          Mine tjenester
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl">
          Jeg hjelper deg med alt fra longarm-quilting og diverse søm.
          Alle oppdrag utføres med omhu og fokus på kvalitet.
        </p>
      </div>
    </section>

    <!-- Services Sections -->
    <section class="py-16">
      <div class="container-custom space-y-16">
        
        <!-- Longarm Quilting -->
        <div id="longarm-quilting" class="scroll-mt-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 class="text-3xl font-serif text-quilt-burgundy mb-4">
                Longarm-quilting
              </h2>
              <div class="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Jeg quilter teppene dine på min profesjonelle longarm-maskin.
                </p>
                
                <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
                  E2E-quilting (heldekkende mønster):
                </h3>
                <ul class="space-y-2">
                  <li>✓ Mange mønstre å velge mellom</li>
                  <li>✓ Inkludert tråd i prisen</li>
                  <li>✓ Jeg har vatt til tepper</li>
                  <li>✓ Profesjonell finish og kvalitet</li>
                </ul>

                <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
                  Levering og henting:
                </h3>
                <p>
                  Vi avtaler via SMS eller telefon for henting/levering i bunadsbutikken i 
                  <strong>Øvre Langgate 71 (Gjesdal bunad søm og håndverk)</strong>.
                </p>
              </div>
              
              <RouterLink to="/kontakt" class="btn-primary inline-block mt-6">
                Ta kontakt
              </RouterLink>
            </div>
            
            <div class="bg-quilt-cream rounded-xl p-8">
              <div class="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="/images/IMG_2087.jpg" 
                  alt="Profesjonell longarm-quilting - gul og grå moderne quilt"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="text-center mt-4 text-sm text-gray-600">
                Kr 350-400 per m² (inkl. tråd)
              </p>
            </div>
          </div>
        </div>

        <hr class="border-quilt-beige" />

        <!-- Interiørsøm -->
        <div id="interiorsom" class="scroll-mt-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div class="lg:order-2">
              <h2 class="text-3xl font-serif text-quilt-burgundy mb-4">
                Interiørsøm - Gardiner og puter
              </h2>
              <div class="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Skreddersydde løsninger for ditt hjem. Jeg syr gardiner, puter og annen 
                  interiørtekstil etter dine mål og ønsker.
                </p>
                
                <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
                  Priser fra:
                </h3>
                <ul class="space-y-2">
                  <li>✓ Legge opp gardiner faste stoffer: <strong>250,- pr stk</strong></li>
                  <li>✓ Legge opp lingardiner: <strong>300,- pr stk</strong></li>
                  <li>✓ Legge opp gardiner med fór: <strong>450,- pr stk</strong></li>
                  <li>✓ Sy liftgardin under 1 meter: <strong>2000,- pr stk</strong></li>
                  <li>✓ Sy liftgardin 1-2 meter: <strong>2800,- pr stk</strong></li>
                  <li>✓ Sy pyntepute ca 50x50 cm med glidelås: <strong>500,- pr stk</strong></li>
                </ul>

                <p class="bg-quilt-cream p-4 rounded-lg text-sm">
                  <strong>Mønsttertilpasning:</strong> Tillegg på 30% hvis mønster må tilpasses ved liftgardiner.
                </p>
                
                <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
                  Spesialoppdrag:
                </h3>
                <p>
                  Timesbetaling på <strong>800,- per time</strong> for spesialoppdrag og tilpassede løsninger.
                </p>
              </div>
              
              <RouterLink to="/kontakt" class="btn-primary inline-block mt-6">
                Ta kontakt
              </RouterLink>
            </div>
            
            <div class="bg-quilt-cream rounded-xl p-8 lg:order-1">
              <div class="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="/images/interior.png" 
                  alt="Elegante gardiner og dekorative puter - interiørsøm av Marit"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="text-center mt-4 text-sm text-gray-600">
                Fra kr 250,- (se prisliste)
              </p>
            </div>
          </div>
        </div>


        <hr class="border-quilt-beige" />

        <!-- Diverse søm -->
        <div id="diverse-som" class="scroll-mt-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div class="lg:order-2">
              <h2 class="text-3xl font-serif text-quilt-burgundy mb-4">
                Diverse søm
              </h2>
              <div class="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Har du et sømprosjekt som ikke passer inn i kategoriene over?
                  Ta kontakt!
                </p>
                <p>
                  Pris varierer med arbeidets omfang. Du får alltid prisoverslag før
                  jeg starter arbeidet.
                </p>
              </div>

              <RouterLink to="/kontakt" class="btn-primary inline-block mt-6">
                Ta kontakt
              </RouterLink>
            </div>

            <div class="bg-quilt-cream rounded-xl p-8 lg:order-1">
              <div class="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/images/IMG_2093.jpg"
                  alt="Fargerik quilt med livlige mønstre og ekspertise"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="text-center mt-4 text-sm text-gray-600">
                Fra kr 150
              </p>
            </div>
          </div>
        </div>

        <hr class="border-quilt-beige" />

      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-quilt-cream">
      <div class="container-custom">
        <h2 class="text-3xl font-serif text-quilt-burgundy mb-8 text-center">
          Ofte stilte spørsmål
        </h2>
        
        <div class="max-w-3xl mx-auto space-y-6">
          
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-semibold text-quilt-forest mb-2">
              Må jeg komme til Tønsberg for å levere?
            </h3>
            <p class="text-gray-700">
              Nei, du kan sende quiltetopper og diverse syoppdrag per post.
              Vi avtaler frakt og retur når du tar kontakt.
            </p>
          </div>
          
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-semibold text-quilt-forest mb-2">
              Hvordan betaler jeg?
            </h3>
            <p class="text-gray-700">
              Vipps, kontant eller bankoverføring ved henting/levering. 
              Faktura kan ordnes for firmaer.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>