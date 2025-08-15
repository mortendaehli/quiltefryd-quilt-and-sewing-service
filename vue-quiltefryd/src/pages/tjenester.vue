<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Tjenester - Quiltefryd | Longarm-quilting, sømtjenester i Tønsberg',
  meta: [
    { name: 'description', content: 'Profesjonell longarm-quilting, gardiner, puter, bunadsjustering og reparasjon. Se alle våre sømtjenester.' }
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
          Jeg hjelper deg med alt fra longarm-quilting til bunadsjustering. 
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
                  Jeg quilter teppene dine på min profesjonelle <strong>Innova longarm-maskin</strong> 
                  med pene, jevne sømmer som holder i generasjoner.
                </p>
                
                <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
                  Dette tilbyr jeg:
                </h3>
                <ul class="space-y-2">
                  <li>✓ Kant-til-kant-mønster i flere varianter</li>
                  <li>✓ Montering av vatt og bakstykke</li>
                  <li>✓ Påsying av lukkekant</li>
                  <li>✓ Levering etter avtale eller per post</li>
                </ul>

                <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
                  Slik leverer du:
                </h3>
                <p>
                  Du kan levere quiltetoppen din personlig i Tønsberg, eller sende den per post. 
                  Jeg sender ferdig quiltet teppe tilbake til deg.
                </p>
                
                <p class="text-sm italic">
                  Estimert leveringstid: 1-2 uker avhengig av størrelse og sesong.
                </p>
              </div>
              
              <RouterLink to="/kontakt" class="btn-primary inline-block mt-6">
                Be om tilbud
              </RouterLink>
            </div>
            
            <div class="bg-quilt-cream rounded-xl p-8">
              <div class="aspect-square bg-white rounded-lg flex items-center justify-center text-6xl">
                🧵
              </div>
              <p class="text-center mt-4 text-sm text-gray-600">
                Fra kr 325 per m² (kant-til-kant)
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
                  Eksempler på oppdrag:
                </h3>
                <ul class="space-y-2">
                  <li>✓ Gardiner med opplegg og spesialmål</li>
                  <li>✓ Liftgardiner og panelgardiner</li>
                  <li>✓ Sofaputer og sitteunderlag</li>
                  <li>✓ Båtputer og campingvognsputer</li>
                  <li>✓ Duker og løpere</li>
                </ul>

                <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
                  Materialer:
                </h3>
                <p>
                  Du kan levere egne stoffer, eller jeg kan hjelpe deg med innkjøp av 
                  materialer fra mine leverandører.
                </p>
              </div>
              
              <RouterLink to="/kontakt" class="btn-primary inline-block mt-6">
                Kontakt for pristilbud
              </RouterLink>
            </div>
            
            <div class="bg-quilt-cream rounded-xl p-8 lg:order-1">
              <div class="aspect-square bg-white rounded-lg flex items-center justify-center text-6xl">
                🪟
              </div>
              <p class="text-center mt-4 text-sm text-gray-600">
                Pris etter vurdering
              </p>
            </div>
          </div>
        </div>

        <hr class="border-quilt-beige" />

        <!-- Bunad -->
        <div id="bunad" class="scroll-mt-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 class="text-3xl font-serif text-quilt-burgundy mb-4">
                Bunad - enkle jobber
              </h2>
              <div class="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Jeg utfører enklere bunadsjobber med respekt for tradisjon og håndverk. 
                  Perfekt før 17. mai, konfirmasjon eller bryllup.
                </p>
                
                <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
                  Typiske oppdrag:
                </h3>
                <ul class="space-y-2">
                  <li>✓ Inn/ut av liv og skjørt</li>
                  <li>✓ Opplegg av skjørt</li>
                  <li>✓ Reparasjon av sømmer</li>
                  <li>✓ Bytte av hekter og knapper</li>
                  <li>✓ Fôring og småjusteringer</li>
                </ul>

                <p class="bg-quilt-cream p-4 rounded-lg text-sm">
                  <strong>Viktig:</strong> Jeg tar ikke på meg større ombygginger eller 
                  broderiarbeid. Ta kontakt for vurdering av ditt behov.
                </p>
                
                <p>
                  All håndtering skjer diskré, og vi avtaler prøving ved behov.
                </p>
              </div>
              
              <RouterLink to="/kontakt" class="btn-primary inline-block mt-6">
                Kontakt meg
              </RouterLink>
            </div>
            
            <div class="bg-quilt-cream rounded-xl p-8">
              <div class="aspect-square bg-white rounded-lg flex items-center justify-center text-6xl">
                👗
              </div>
              <p class="text-center mt-4 text-sm text-gray-600">
                Pris etter vurdering
              </p>
            </div>
          </div>
        </div>

        <hr class="border-quilt-beige" />

        <!-- Reparasjon og omsøm -->
        <div id="reparasjon-omsom" class="scroll-mt-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div class="lg:order-2">
              <h2 class="text-3xl font-serif text-quilt-burgundy mb-4">
                Reparasjon og omsøm
              </h2>
              <div class="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Gi klærne dine nytt liv! Jeg utfører alle typer reparasjoner og 
                  tilpasninger på klær.
                </p>
                
                <h3 class="text-xl font-serif text-quilt-forest mt-6 mb-3">
                  Vanlige oppdrag:
                </h3>
                <ul class="space-y-2">
                  <li>✓ Bukseopplegg</li>
                  <li>✓ Glidelåsbytte</li>
                  <li>✓ Innsving av kjole og jakke</li>
                  <li>✓ Ermeforkorting</li>
                  <li>✓ Lapping og stopping</li>
                  <li>✓ Knapper og hemper</li>
                </ul>

                <p>
                  Pris varierer med arbeidets omfang. Du får alltid prisoverslag før 
                  jeg starter arbeidet.
                </p>
              </div>
              
              <RouterLink to="/kontakt" class="btn-primary inline-block mt-6">
                Send forespørsel
              </RouterLink>
            </div>
            
            <div class="bg-quilt-cream rounded-xl p-8 lg:order-1">
              <div class="aspect-square bg-white rounded-lg flex items-center justify-center text-6xl">
                ✂️
              </div>
              <p class="text-center mt-4 text-sm text-gray-600">
                Fra kr 150
              </p>
            </div>
          </div>
        </div>

        <hr class="border-quilt-beige" />

        <!-- Andre oppdrag -->
        <div id="andre-oppdrag" class="scroll-mt-20">
          <div class="bg-gradient-to-br from-quilt-cream to-white rounded-2xl p-8 md:p-12 text-center">
            <h2 class="text-3xl font-serif text-quilt-burgundy mb-4">
              Andre oppdrag?
            </h2>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Har du et sømprosjekt som ikke passer inn i kategoriene over? 
              Ta kontakt, så finner vi en løsning sammen!
            </p>
            <p class="text-gray-600 mb-8">
              Jeg er alltid åpen for nye utfordringer og kreative prosjekter.
            </p>
            <RouterLink to="/kontakt" class="btn-primary">
              Fortell om ditt prosjekt
            </RouterLink>
          </div>
        </div>

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
              Hvor lang leveringstid har du?
            </h3>
            <p class="text-gray-700">
              Vanligvis 1-2 uker for quilting, 2-3 uker for større sømoppdrag. 
              I høysesong (vår/høst) kan det ta litt lengre tid.
            </p>
          </div>
          
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-semibold text-quilt-forest mb-2">
              Må jeg komme til Tønsberg for å levere?
            </h3>
            <p class="text-gray-700">
              Nei, du kan sende quiltetopper og mindre plagg per post. 
              Vi avtaler frakt og retur når du tar kontakt.
            </p>
          </div>
          
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-semibold text-quilt-forest mb-2">
              Hvordan betaler jeg?
            </h3>
            <p class="text-gray-700">
              Vipps, kontant eller bankoverføring ved henting/levering. 
              Faktura kan ordnes ved behov.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>