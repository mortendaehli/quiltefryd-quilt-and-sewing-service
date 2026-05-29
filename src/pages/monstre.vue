<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useHead } from '@vueuse/head'
import { quiltPatterns, type QuiltPattern } from '@/data/quiltPatterns'

useHead({
  title: 'Quiltemønstre - Quiltefryd | Velg ditt longarm-mønster',
  meta: [
    {
      name: 'description',
      content:
        'Se hele utvalget av quiltemønstre hos Quiltefryd. Longarm-quilting med pris per m² fra kr 300. Minimumspris kr 700,- per teppe eller løper. Tråd er inkludert.',
    },
    { name: 'keywords', content: 'quiltemønstre, longarm-mønstre, quilting Tønsberg, E2E quilting, Quiltefryd' },
  ],
})

const activePattern = ref<QuiltPattern | null>(null)

const openLightbox = (pattern: QuiltPattern) => {
  activePattern.value = pattern
}

const closeLightbox = () => {
  activePattern.value = null
}

const handleImgError = (e: Event) => {
  const target = e.target as HTMLImageElement
  const card = target.closest('[data-pattern-card]') as HTMLElement | null
  if (card) card.style.display = 'none'
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeLightbox()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-quilt-cream to-quilt-beige py-12">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-serif text-quilt-burgundy mb-4">
          Quiltemønstre
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl">
          Et utvalg av mønstrene jeg tilbyr for kant-til-kant longarm-quilting.
          Klikk på et mønster for å se det i stort format.
        </p>
      </div>
    </section>

    <!-- Info banner -->
    <section class="py-8">
      <div class="container-custom">
        <div class="bg-white border border-quilt-beige rounded-2xl shadow-sm p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p class="text-sm uppercase tracking-wider text-quilt-gold font-medium mb-2">
              Minimumspris
            </p>
            <p class="text-2xl font-serif text-quilt-burgundy">
              kr 700,-
            </p>
            <p class="text-sm text-gray-600 mt-1">per teppe eller løper</p>
          </div>
          <div>
            <p class="text-sm uppercase tracking-wider text-quilt-gold font-medium mb-2">
              Pris per m²
            </p>
            <p class="text-2xl font-serif text-quilt-burgundy">
              fra kr 300
            </p>
            <p class="text-sm text-gray-600 mt-1">tråd er inkludert</p>
          </div>
          <div>
            <p class="text-sm uppercase tracking-wider text-quilt-gold font-medium mb-2">
              Vatt
            </p>
            <p class="text-2xl font-serif text-quilt-burgundy">
              Tilgjengelig
            </p>
            <p class="text-sm text-gray-600 mt-1">pris på forespørsel</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pattern Gallery -->
    <section class="pb-16">
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <button
            v-for="pattern in quiltPatterns"
            :key="pattern.filename"
            type="button"
            data-pattern-card
            class="group bg-white rounded-xl shadow-sm hover:shadow-xl overflow-hidden text-left transition-all duration-300 hover:-translate-y-1"
            @click="openLightbox(pattern)"
          >
            <div class="aspect-square overflow-hidden bg-quilt-cream relative">
              <img
                :src="pattern.src"
                :alt="`Quiltemønster ${pattern.name}`"
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                @error="handleImgError"
              />
              <span class="absolute top-2 left-2 bg-white/95 backdrop-blur-sm text-quilt-burgundy text-xs font-semibold px-2 py-1 rounded-full shadow">
                Nr. {{ pattern.nr }}
              </span>
            </div>
            <div class="p-4">
              <h3 class="font-serif text-quilt-brown text-base leading-tight mb-1 group-hover:text-quilt-burgundy transition-colors">
                {{ pattern.name }}
              </h3>
              <p class="text-sm text-gray-600">
                kr {{ pattern.price }} / m²
              </p>
            </div>
          </button>
        </div>

        <p class="text-center text-sm text-gray-500 mt-12 max-w-2xl mx-auto">
          De fleste mønstrene er hentet fra
          <a href="https://urbanelementz.com" target="_blank" rel="noopener" class="underline hover:text-quilt-burgundy">urbanelementz.com</a>
          og
          <a href="https://intelligentquilting.com" target="_blank" rel="noopener" class="underline hover:text-quilt-burgundy">intelligentquilting.com</a>.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 bg-quilt-cream">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-serif text-quilt-burgundy mb-4">
          Funnet et mønster du liker?
        </h2>
        <p class="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Ta kontakt for å avtale levering av teppe og bestille quilting.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:95195088" class="btn-secondary">Ring 95 19 50 88</a>
          <RouterLink to="/kontakt" class="btn-primary">Ta kontakt</RouterLink>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="activePattern"
        class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        @click.self="closeLightbox"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          <div class="flex items-start justify-between p-4 border-b border-quilt-beige">
            <div>
              <p class="text-xs uppercase tracking-wider text-quilt-gold font-medium">
                Nr. {{ activePattern.nr }}
              </p>
              <h3 class="text-2xl font-serif text-quilt-burgundy">
                {{ activePattern.name }}
              </h3>
              <p class="text-sm text-gray-600 mt-1">
                kr {{ activePattern.price }} / m² (inkl. tråd)
              </p>
            </div>
            <button
              type="button"
              aria-label="Lukk"
              class="text-gray-500 hover:text-quilt-burgundy text-3xl leading-none px-2"
              @click="closeLightbox"
            >
              &times;
            </button>
          </div>
          <div class="overflow-auto bg-quilt-cream flex items-center justify-center">
            <img
              :src="activePattern.src"
              :alt="`Quiltemønster ${activePattern.name}`"
              class="max-w-full max-h-[70vh] object-contain"
            />
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
