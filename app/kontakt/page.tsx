import type { Metadata } from 'next'
import ContactForm from '@/components/shared/ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt - Quiltefryd | Ta kontakt for pristilbud',
  description: 'Kontakt Marit Aslesen for quilting og sømtjenester i Tønsberg. Ring 95 19 50 88 eller send melding.',
}

export default function Kontakt() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-quilt-cream to-quilt-beige py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif text-quilt-burgundy mb-4">
            Kontakt meg
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Har du et prosjekt på gang? Send meg en melding eller ring – 
            så finner vi en god løsning sammen.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-quilt-burgundy mb-6">
                Kontaktinformasjon
              </h2>
              
              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                <a href="tel:95195088" className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-quilt-cream rounded-full flex items-center justify-center text-2xl">
                      📞
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Telefon</p>
                      <p className="text-lg font-medium text-quilt-forest">95 19 50 88</p>
                    </div>
                  </div>
                </a>

                <a href="mailto:marit@quiltefryd.no" className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-quilt-cream rounded-full flex items-center justify-center text-2xl">
                      ✉️
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">E-post</p>
                      <p className="text-lg font-medium text-quilt-forest">marit@quiltefryd.no</p>
                    </div>
                  </div>
                </a>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-quilt-cream rounded-full flex items-center justify-center text-2xl">
                      📍
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Lokasjon</p>
                      <p className="text-lg font-medium text-quilt-forest">Tønsberg</p>
                      <p className="text-sm text-gray-600 mt-1">Adresse oppgis ved avtale</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-quilt-cream rounded-full flex items-center justify-center text-2xl">
                      🕐
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Tilgjengelighet</p>
                      <p className="text-lg font-medium text-quilt-forest">Hverdager kl. 10-18</p>
                      <p className="text-sm text-gray-600 mt-1">Etter avtale</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-quilt-cream to-white rounded-xl p-6">
                <h3 className="text-xl font-serif text-quilt-forest mb-3">
                  Slik jobber vi sammen
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-quilt-burgundy mt-1">1.</span>
                    <span>Du tar kontakt og beskriver ditt prosjekt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-quilt-burgundy mt-1">2.</span>
                    <span>Jeg gir deg et uforpliktende pristilbud</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-quilt-burgundy mt-1">3.</span>
                    <span>Vi avtaler levering/henting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-quilt-burgundy mt-1">4.</span>
                    <span>Jeg utfører arbeidet til avtalt tid</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-quilt-burgundy mb-6">
                Send melding
              </h2>
              
              <ContactForm />
              
              <div className="mt-6 p-4 bg-quilt-cream rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Tips:</strong> Beskriv gjerne prosjektet ditt så detaljert som mulig, 
                  inkludert størrelse, type stoff, og ønsket leveringstid. 
                  Dette hjelper meg å gi deg et nøyaktig pristilbud.
                </p>
              </div>
            </div>
          </div>

          {/* Map/Directions Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-serif text-quilt-burgundy mb-4">
              Besøksadresse
            </h2>
            <p className="text-gray-700 mb-4">
              Jeg holder til i Tønsberg. Nøyaktig adresse oppgis når vi har avtalt 
              tid for levering eller henting av ditt prosjekt.
            </p>
            <p className="text-gray-600">
              For levering av større prosjekter eller quiltetopper kan vi også avtale 
              forsendelse per post.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}