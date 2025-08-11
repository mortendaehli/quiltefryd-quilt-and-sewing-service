import Link from 'next/link'
import Image from 'next/image'
import { QuiltIcon, CurtainIcon, DressIcon, ScissorsIcon } from '@/components/icons/SewingIcons'

export default function ServiceCards() {
  const services = [
    {
      title: 'Longarm-quilting',
      description: 'Profesjonell quilting med longarm-maskin. Kant-til-kant mønster, vatt og bakstykke.',
      link: '/tjenester#longarm-quilting',
      icon: QuiltIcon,
      image: '/images/quilt.png'
    },
    {
      title: 'Gardiner og puter',
      description: 'Skreddersydde gardiner, puter og annen interiørsøm etter dine mål og ønsker.',
      link: '/tjenester#interiorsom',
      icon: CurtainIcon,
      image: '/images/image.png'
    },
    {
      title: 'Bunad og festdrakt',
      description: 'Justering og tilpasning av bunad. Inn/ut, opplegg og små reparasjoner.',
      link: '/tjenester#bunad',
      icon: DressIcon,
      image: '/images/contact-page-image.png'
    },
    {
      title: 'Reparasjon og omsøm',
      description: 'Bukseopplegg, glidelåsbytte, innsving og andre justeringer av klær.',
      link: '/tjenester#reparasjon-omsom',
      icon: ScissorsIcon,
      image: '/images/quilt2.png'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-quilt-cream/30">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-quilt-gold uppercase tracking-[0.2em] text-sm font-medium">Tjenester</span>
          <h2 className="text-4xl md:text-5xl font-serif text-quilt-forest mb-6 mt-3 font-light">
            Mine sømtjenester
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Jeg tilbyr et bredt spekter av sømtjenester med fokus på kvalitet og håndverk
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Link 
                key={index} 
                href={service.link}
                className="group card hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-quilt-gold/5 to-transparent rounded-bl-full" />
                
                <div className="flex gap-6 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-quilt-cream to-quilt-beige/50 rounded-2xl flex items-center justify-center text-quilt-forest group-hover:from-quilt-beige group-hover:to-quilt-gold/20 group-hover:text-quilt-burgundy transition-all shadow-sm">
                      <IconComponent className="w-10 h-10" />
                    </div>
                  </div>
                <div className="flex-grow space-y-3">
                  <h3 className="text-xl font-serif text-quilt-brown group-hover:text-quilt-burgundy transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-quilt-burgundy font-medium pt-1 group-hover:gap-3 transition-all">
                    Les mer 
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Link href="/tjenester" className="btn-primary inline-flex items-center gap-2 group">
            <span>Se alle tjenester</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}