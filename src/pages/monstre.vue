<script setup lang="ts">
import { nextTick, ref, onMounted, onBeforeUnmount } from 'vue'
import { useHead } from '@vueuse/head'
import { quiltPatterns, type QuiltPattern } from '@/data/quiltPatterns'

useHead({
  title: 'Quiltemønstre og priser - Quiltefryd | Longarm-quilting i Tønsberg',
  meta: [
    {
      name: 'description',
      content:
        'Se quiltemønstre, priser og informasjon om longarm-quilting hos Quiltefryd. Pris per m² fra kr 300. Minimumspris kr 700,- per teppe eller løper. Tråd er inkludert.',
    },
    { name: 'keywords', content: 'quiltemønstre, priser, longarm-mønstre, quilting Tønsberg, E2E quilting, Quiltefryd' },
  ],
})

const activePattern = ref<QuiltPattern | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
const dialogPanel = ref<HTMLElement | null>(null)
const lastFocusedElement = ref<HTMLElement | null>(null)
const dialogTitleId = 'pattern-dialog-title'

const setBackgroundInert = (isInert: boolean) => {
  document.querySelectorAll<HTMLElement>('.skip-link, header, main, footer').forEach((element) => {
    if (isInert) {
      element.setAttribute('inert', '')
    } else {
      element.removeAttribute('inert')
    }
  })

  document.body.style.overflow = isInert ? 'hidden' : ''
}

const openLightbox = (pattern: QuiltPattern) => {
  lastFocusedElement.value = document.activeElement instanceof HTMLElement ? document.activeElement : null
  activePattern.value = pattern
  setBackgroundInert(true)
  void nextTick(() => closeButton.value?.focus())
}

const closeLightbox = () => {
  const returnFocusTo = lastFocusedElement.value
  activePattern.value = null
  setBackgroundInert(false)
  void nextTick(() => returnFocusTo?.focus())
}

const handleImgError = (e: Event) => {
  const target = e.target as HTMLImageElement
  const card = target.closest('[data-pattern-card]') as HTMLElement | null
  if (card) card.style.display = 'none'
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeLightbox()
}

const handleDialogKeydown = (e: KeyboardEvent) => {
  if (e.key !== 'Tab') return

  const focusableElements = dialogPanel.value
    ? Array.from(
        dialogPanel.value.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      )
    : []

  if (focusableElements.length === 0) return

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  if (e.shiftKey && document.activeElement === firstElement) {
    e.preventDefault()
    lastElement.focus()
  } else if (!e.shiftKey && document.activeElement === lastElement) {
    e.preventDefault()
    firstElement.focus()
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  setBackgroundInert(false)
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-quilt-cream to-quilt-beige py-12">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-serif text-quilt-burgundy mb-4">
          Quiltemønstre og priser
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl">
          Her finner du informasjon om longarm-quilting, priser og et utvalg av
          mønstrene jeg tilbyr for kant-til-kant quilting.
        </p>
      </div>
    </section>

    <nav class="bg-white border-b border-quilt-beige py-4" aria-label="Innhold på siden">
      <div class="container-custom flex flex-wrap gap-3">
        <RouterLink :to="{ path: '/monstre', hash: '#longarm-quilting' }" class="btn-text">
          Longarm-quilting
        </RouterLink>
        <RouterLink :to="{ path: '/monstre', hash: '#priser' }" class="btn-text">
          Priser
        </RouterLink>
        <RouterLink :to="{ path: '/monstre', hash: '#quiltemonstre' }" class="btn-text">
          Quiltemønstre
        </RouterLink>
        <RouterLink :to="{ path: '/monstre', hash: '#faq' }" class="btn-text">
          Spørsmål
        </RouterLink>
        <RouterLink :to="{ path: '/monstre', hash: '#bestilling' }" class="btn-text">
          Kontakt
        </RouterLink>
      </div>
    </nav>

    <!-- Service and pricing overview -->
    <section class="py-16 bg-white">
      <div class="container-custom">
        <div id="longarm-quilting" class="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p class="text-quilt-bronze text-sm font-medium mb-3">
              Longarm-quilting
            </p>
            <h2 class="text-3xl font-serif text-quilt-burgundy mb-4">
              Quilting av tepper
            </h2>
            <div class="text-gray-700 space-y-4">
              <p>
                Jeg quilter teppene dine på min profesjonelle longarm-maskin.
                Alle oppdrag utføres med omhu og fokus på kvalitet.
              </p>

              <div>
                <h3 class="text-xl font-serif text-quilt-forest mb-3">
                  E2E-quilting (heldekkende mønster)
                </h3>
                <ul class="space-y-2">
                  <li>Mange mønstre å velge mellom</li>
                  <li>Tråd er inkludert i prisen</li>
                  <li>Jeg har vatt til tepper</li>
                  <li>Profesjonell finish og kvalitet</li>
                  <li>Minimumspris kr 700,- per teppe eller løper</li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-serif text-quilt-forest mb-3">
                  Levering og henting
                </h3>
                <p>
                  Vi avtaler via SMS eller telefon for henting/levering i
                  bunadsbutikken i
                  <strong> Øvre Langgate 71 (Gjesdal bunad søm og håndverk)</strong>.
                </p>
              </div>
            </div>

            <RouterLink to="/kontakt" class="btn-primary inline-block mt-6">
              Ta kontakt
            </RouterLink>
          </div>

          <div class="bg-quilt-cream rounded-xl p-6 md:p-8">
            <div class="aspect-[4/3] rounded-lg overflow-hidden mb-6">
              <img
                src="/images/IMG_2087.jpg"
                alt="Profesjonell longarm-quilting - gul og grå moderne quilt"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div class="bg-white rounded-lg p-4">
                <p class="text-sm text-quilt-bronze font-medium mb-2">
                  Minimumspris
                </p>
                <p class="text-2xl font-serif text-quilt-burgundy">
                  kr 700,-
                </p>
                <p class="text-sm text-gray-600 mt-1">per teppe eller løper</p>
              </div>
              <div class="bg-white rounded-lg p-4">
                <p class="text-sm text-quilt-bronze font-medium mb-2">
                  Pris per m²
                </p>
                <p class="text-2xl font-serif text-quilt-burgundy">
                  fra kr 300
                </p>
                <p class="text-sm text-gray-600 mt-1">tråd er inkludert</p>
              </div>
              <div class="bg-white rounded-lg p-4">
                <p class="text-sm text-quilt-bronze font-medium mb-2">
                  Vatt
                </p>
                <p class="text-2xl font-serif text-quilt-burgundy">
                  Etter avtale
                </p>
                <p class="text-sm text-gray-600 mt-1">pris på forespørsel</p>
              </div>
            </div>
          </div>
        </div>

        <div id="priser" class="mt-12 scroll-mt-24">
          <h2 class="text-2xl md:text-3xl font-serif text-quilt-burgundy mb-6">
            Prisliste
          </h2>
          <div class="overflow-hidden rounded-xl border border-quilt-beige bg-white shadow-lg">
            <div
              class="hidden grid-cols-[1fr_auto] bg-quilt-cream sm:grid"
              aria-hidden="true"
            >
              <p class="px-6 py-4 font-serif text-quilt-forest">Tjeneste</p>
              <p class="px-6 py-4 text-right font-serif text-quilt-forest">Pris</p>
            </div>
            <dl class="divide-y divide-gray-200">
              <div class="grid gap-3 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6 sm:px-6 sm:py-4">
                <dt>
                  <p class="font-medium">E2E-quilting (heldekkende mønster)</p>
                  <p class="text-sm text-gray-600">
                    Inkluderer tråd. Prisen varierer med valg av mønster.
                  </p>
                </dt>
                <dd class="font-medium sm:text-right">
                  <span class="block text-sm font-semibold uppercase text-quilt-bronze sm:hidden">
                    Pris
                  </span>
                  <span class="block">300-390 kr pr. m²</span>
                </dd>
              </div>
              <div class="grid gap-3 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6 sm:px-6 sm:py-4">
                <dt>
                  <p class="font-medium">Minimumspris</p>
                  <p class="text-sm text-gray-600">Per teppe eller løper.</p>
                </dt>
                <dd class="font-medium sm:text-right">
                  <span class="block text-sm font-semibold uppercase text-quilt-bronze sm:hidden">
                    Pris
                  </span>
                  <span class="block">700,- kr</span>
                </dd>
              </div>
              <div class="grid gap-3 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6 sm:px-6 sm:py-4">
                <dt>
                  <p class="font-medium">Vatt til tepper</p>
                  <p class="text-sm text-gray-600">
                    Jeg har vatt tilgjengelig for dine prosjekter.
                  </p>
                </dt>
                <dd class="font-medium sm:text-right">
                  <span class="block text-sm font-semibold uppercase text-quilt-bronze sm:hidden">
                    Pris
                  </span>
                  <span class="block">Pris på forespørsel</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- Pattern Gallery -->
    <section id="quiltemonstre" class="py-16 scroll-mt-24">
      <div class="container-custom">
        <div class="mb-8">
          <h2 class="text-3xl font-serif text-quilt-burgundy mb-3">
            Quiltemønstre
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl">
            Klikk på et mønster for å se det i stort format. Pris per m² står
            på hvert mønster.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <button
            v-for="pattern in quiltPatterns"
            :key="pattern.filename"
            type="button"
            data-pattern-card
            :aria-label="`Åpne mønster ${pattern.name}, nr. ${pattern.nr}, kr ${pattern.price} per kvadratmeter`"
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

    <!-- FAQ Section -->
    <section id="faq" class="py-16 bg-quilt-cream scroll-mt-24">
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
              Nei, du kan sende quiltetopper per post.
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

    <!-- CTA -->
    <section id="bestilling" class="py-12 bg-quilt-cream scroll-mt-24">
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
        :aria-labelledby="dialogTitleId"
        @click.self="closeLightbox"
        @keydown="handleDialogKeydown"
      >
        <div ref="dialogPanel" class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          <div class="flex items-start justify-between p-4 border-b border-quilt-beige">
            <div>
              <p class="text-xs uppercase tracking-wider text-quilt-bronze font-medium">
                Nr. {{ activePattern.nr }}
              </p>
              <h3 :id="dialogTitleId" class="text-2xl font-serif text-quilt-burgundy">
                {{ activePattern.name }}
              </h3>
              <p class="text-sm text-gray-600 mt-1">
                kr {{ activePattern.price }} / m² (inkl. tråd)
              </p>
            </div>
            <button
              ref="closeButton"
              type="button"
              aria-label="Lukk mønstervisning"
              class="text-gray-500 hover:text-quilt-burgundy text-3xl leading-none px-2 rounded"
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
