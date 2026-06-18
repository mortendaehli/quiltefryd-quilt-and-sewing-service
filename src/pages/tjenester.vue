<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { useRouter } from 'vue-router'

useHead({
  title: 'Quiltemønstre og priser - Quiltefryd | Longarm-quilting i Tønsberg',
  meta: [
    {
      name: 'description',
      content:
        'Tjenester, quiltemønstre og priser for longarm-quilting er samlet på én side hos Quiltefryd.',
    },
  ],
})

const router = useRouter()

onMounted(() => {
  void router.replace('/monstre')
})
</script>

<template>
  <div class="min-h-screen bg-quilt-cream flex items-center justify-center px-4 text-center">
    <div>
      <h1 class="text-3xl font-serif text-quilt-burgundy mb-4">
        Quiltemønstre og priser
      </h1>
      <p class="text-gray-700 mb-6">
        Tjenester og priser er samlet på siden for quiltemønstre.
      </p>
      <RouterLink to="/monstre" class="btn-primary inline-block">
        Gå til Quiltemønstre og priser
      </RouterLink>
    </div>
  </div>
</template>
