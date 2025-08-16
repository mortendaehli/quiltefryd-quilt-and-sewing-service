<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Om Marit - Quiltefryd | Erfaren quilter og syerske',
  meta: [
    { name: 'description', content: 'Les om Marit Aslesen og hennes erfaring fra over 10 år med Quiltefryd i Tønsberg. Profesjonell longarm-quilting og sømtjenester.' }
  ]
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-quilt-cream to-quilt-beige py-12">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-serif text-quilt-burgundy mb-4">
          Om Marit
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl">
          Erfaring, lidenskap og kvalitet gjennom over 10 år med Quiltefryd
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <!-- Text Content -->
          <div class="prose prose-lg max-w-none">
            <h2 class="text-2xl md:text-3xl font-serif text-quilt-burgundy mb-6">
              Min historie
            </h2>
            
            <p class="text-gray-700 mb-4">
              Jeg heter Marit Aslesen og har hatt gleden av å drive den velkjente 
              quiltbutikken <strong>Quiltefryd</strong> i Tønsberg i over 10 år. 
              Jeg overtok butikken i 2016 og har, som jeg pleier å si, 
              "ikke angret en eneste dag".
            </p>

            <p class="text-gray-700 mb-4">
              Gjennom årene med Quiltefryd har jeg hjulpet hundrevis av kunder med 
              deres quiltprosjekter - fra nybegynnere som trengte veiledning til 
              erfarne quiltere som søkte spesielle stoffer og avanserte teknikker.
            </p>

            <p class="text-gray-700 mb-4">
              Nå som butikken er stengt i forbindelse med min pensjonering, 
              fortsetter jeg å tilby mine tjenester fra hjemmet mitt. Dette gir 
              meg muligheten til å fokusere på det jeg liker aller best: 
              å hjelpe folk med å fullføre sine sømprosjekter med kvalitet og omhu.
            </p>

            <h2 class="text-2xl md:text-3xl font-serif text-quilt-burgundy mb-6 mt-8">
              Min kompetanse
            </h2>

            <p class="text-gray-700 mb-4">
              Med over 15 år i quilte- og sømbransjen har jeg opparbeidet meg bred 
              erfaring innen:
            </p>

            <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Profesjonell longarm-quilting med avanserte mønstre</li>
              <li>Tradisjonelle og moderne quilteteknikker</li>
              <li>Interiørsøm og hjemmetekstiler</li>
              <li>Bunadstilpasning og festdrakter</li>
              <li>Generell sømarbeid og reparasjoner</li>
            </ul>

            <p class="text-gray-700 mb-4">
              Jeg holder meg kontinuerlig oppdatert på nye teknikker og trender, 
              samtidig som jeg ivaretar de tradisjonelle håndverksmetodene som 
              har blitt overført gjennom generasjoner.
            </p>
          </div>

          <!-- Right Column - Equipment & Values -->
          <div class="space-y-8">
            <!-- Equipment Card -->
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h3 class="text-xl font-serif text-quilt-forest mb-4">
                Mitt utstyr
              </h3>
              
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <span class="text-2xl">🧵</span>
                  <div>
                    <h4 class="font-semibold text-gray-900">Innova Longarm-maskin</h4>
                    <p class="text-gray-600 text-sm mt-1">
                      Profesjonell quiltemaskin som gir jevne, vakre sømmer på selv 
                      de største teppene. Perfekt for kant-til-kant quilting.
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <span class="text-2xl">🪡</span>
                  <div>
                    <h4 class="font-semibold text-gray-900">Moderne symaskiner</h4>
                    <p class="text-gray-600 text-sm mt-1">
                      Flere høykvalitets symaskiner for presisjon i alle typer 
                      sømarbeid.
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <span class="text-2xl">✂️</span>
                  <div>
                    <h4 class="font-semibold text-gray-900">Spesialverktøy</h4>
                    <p class="text-gray-600 text-sm mt-1">
                      Alt av profesjonelt utstyr for nøyaktig måling, kutting og 
                      finish.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Values Card -->
            <div class="bg-gradient-to-br from-quilt-cream to-white rounded-xl p-8">
              <h3 class="text-xl font-serif text-quilt-forest mb-4">
                Mine verdier
              </h3>
              
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <span class="text-quilt-burgundy">✓</span>
                  <span class="font-medium">Kvalitet i hver søm</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-quilt-burgundy">✓</span>
                  <span class="font-medium">Personlig service</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-quilt-burgundy">✓</span>
                  <span class="font-medium">Punktlig levering</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-quilt-burgundy">✓</span>
                  <span class="font-medium">Konkurransedyktige priser</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-quilt-burgundy">✓</span>
                  <span class="font-medium">Respekt for tradisjoner</span>
                </div>
              </div>
            </div>

            <!-- Quote -->
            <div class="bg-white rounded-xl shadow-lg p-8 border-l-4 border-quilt-burgundy">
              <p class="italic text-gray-700 text-lg mb-4">
                "Hver quilte og hvert sømprosjekt er unikt. Jeg behandler alle 
                oppdrag med samme omhu og respekt, uansett størrelse."
              </p>
              <p class="text-quilt-forest font-serif">
                - Marit Aslesen
              </p>
            </div>

            <!-- Photo Placeholder -->
            <div class="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/contact-page-image.png"
                alt="Marit Aslesen"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <p class="font-serif text-xl">Marit Aslesen</p>
                <p class="text-sm opacity-90">Quiltefryd</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom CTA Section -->
        <div class="mt-16 bg-gradient-to-br from-quilt-cream to-white rounded-2xl p-8 md:p-12 text-center">
          <h2 class="text-3xl font-serif text-quilt-burgundy mb-4">
            La oss skape noe vakkert sammen
          </h2>
          <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Enten du har en quiltetopp som trenger finish, gardiner som skal sys, 
            eller en bunad som trenger justering - jeg er her for å hjelpe.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/tjenester" class="btn-secondary">
              Se tjenester
            </RouterLink>
            <RouterLink to="/kontakt" class="btn-primary">
              Ta kontakt
            </RouterLink>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>