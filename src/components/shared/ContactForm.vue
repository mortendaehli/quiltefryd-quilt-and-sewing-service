<script setup lang="ts">
import { ref } from 'vue'

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
const errorMessage = ref('')

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  isSubmitting.value = true
  submitStatus.value = 'idle'
  errorMessage.value = ''

  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      submitStatus.value = 'success'
      form.reset()
    } else {
      const data = await response.json()
      errorMessage.value = data.error || 'Noe gikk galt. Vennligst prøv igjen.'
      submitStatus.value = 'error'
    }
  } catch (error) {
    errorMessage.value = 'Kunne ikke sende meldingen. Vennligst prøv igjen.'
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form @submit="handleSubmit" class="bg-white rounded-xl shadow-lg p-8">
    <!-- Honeypot field for spam protection -->
    <input 
      type="text" 
      name="_gotcha" 
      style="display: none"
      tabindex="-1"
      autocomplete="off"
    />
    
    <!-- Form fields -->
    <div class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
          Navn *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quilt-burgundy focus:border-transparent"
          placeholder="Ditt navn"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          E-post *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quilt-burgundy focus:border-transparent"
          placeholder="din@epost.no"
        />
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quilt-burgundy focus:border-transparent"
          placeholder="12 34 56 78"
        />
      </div>

      <div>
        <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
          Tjeneste
        </label>
        <select
          id="service"
          name="service"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quilt-burgundy focus:border-transparent"
        >
          <option value="">Velg tjeneste</option>
          <option value="longarm-quilting">Longarm-quilting</option>
          <option value="gardiner-puter">Gardiner og puter</option>
          <option value="bunad">Bunadsjustering</option>
          <option value="reparasjon">Reparasjon/omsøm</option>
          <option value="annet">Annet</option>
        </select>
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
          Beskrivelse *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="5"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quilt-burgundy focus:border-transparent resize-none"
          placeholder="Beskriv ditt prosjekt..."
        />
      </div>

      <div>
        <label for="timeframe" class="block text-sm font-medium text-gray-700 mb-2">
          Ønsket tidsramme
        </label>
        <input
          type="text"
          id="timeframe"
          name="timeframe"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quilt-burgundy focus:border-transparent"
          placeholder="F.eks. innen 2 uker"
        />
      </div>

      <div>
        <label class="flex items-start gap-2">
          <input
            type="checkbox"
            name="consent"
            required
            class="mt-1 rounded border-gray-300 text-quilt-burgundy focus:ring-quilt-burgundy"
          />
          <span class="text-sm text-gray-600">
            Jeg samtykker til at mine opplysninger brukes til å besvare denne henvendelsen. 
            Data behandles i henhold til vår <RouterLink to="/personvern" class="underline">personvernerklæring</RouterLink>.
          </span>
        </label>
      </div>
    </div>

    <!-- Submit button and status messages -->
    <div class="mt-8">
      <button
        type="submit"
        :disabled="isSubmitting"
        :class="[
          'w-full btn-primary',
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        ]"
      >
        {{ isSubmitting ? 'Sender...' : 'Send forespørsel' }}
      </button>

      <!-- Success message -->
      <div 
        v-if="submitStatus === 'success'" 
        class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg" 
        role="alert"
      >
        <p class="text-green-800">
          ✓ Takk for din henvendelse! Jeg svarer vanligvis innen 1-2 virkedager.
        </p>
      </div>

      <!-- Error message -->
      <div 
        v-if="submitStatus === 'error'" 
        class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg" 
        role="alert"
      >
        <p class="text-red-800">
          {{ errorMessage || 'Noe gikk galt. Vennligst prøv igjen.' }}
        </p>
        <p class="text-sm text-red-600 mt-2">
          Du kan også kontakte meg direkte på telefon 95 19 50 88 eller 
          e-post marit@quiltefryd.no
        </p>
      </div>
    </div>
  </form>
</template>