'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        const data = await response.json()
        setErrorMessage(data.error || 'Noe gikk galt. Vennligst prøv igjen.')
        setSubmitStatus('error')
      }
    } catch (error) {
      setErrorMessage('Kunne ikke sende meldingen. Vennligst prøv igjen.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
      {/* Honeypot field for spam protection */}
      <input 
        type="text" 
        name="_gotcha" 
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />
      
      {/* Form fields */}
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Navn *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quilt-burgundy focus:border-transparent"
            placeholder="Ditt navn"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-post *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quilt-burgundy focus:border-transparent"
            placeholder="din@epost.no"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quilt-burgundy focus:border-transparent"
            placeholder="12 34 56 78"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Tjeneste
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quilt-burgundy focus:border-transparent"
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
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Beskrivelse *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quilt-burgundy focus:border-transparent resize-none"
            placeholder="Beskriv ditt prosjekt..."
          />
        </div>

        <div>
          <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-2">
            Ønsket tidsramme
          </label>
          <input
            type="text"
            id="timeframe"
            name="timeframe"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quilt-burgundy focus:border-transparent"
            placeholder="F.eks. innen 2 uker"
          />
        </div>

        <div>
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 rounded border-gray-300 text-quilt-burgundy focus:ring-quilt-burgundy"
            />
            <span className="text-sm text-gray-600">
              Jeg samtykker til at mine opplysninger brukes til å besvare denne henvendelsen. 
              Data behandles i henhold til vår <a href="/personvern" className="underline">personvernerklæring</a>.
            </span>
          </label>
        </div>
      </div>

      {/* Submit button and status messages */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Sender...' : 'Send forespørsel'}
        </button>

        {/* Success message */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg" role="alert">
            <p className="text-green-800">
              ✓ Takk for din henvendelse! Jeg svarer vanligvis innen 1-2 virkedager.
            </p>
          </div>
        )}

        {/* Error message */}
        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
            <p className="text-red-800">
              {errorMessage || 'Noe gikk galt. Vennligst prøv igjen.'}
            </p>
            <p className="text-sm text-red-600 mt-2">
              Du kan også kontakte meg direkte på telefon 95 19 50 88 eller 
              e-post marit@quiltefryd.no
            </p>
          </div>
        )}
      </div>
    </form>
  )
}