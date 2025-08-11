import Link from 'next/link'
import Image from 'next/image'

export default function ServiceCards() {
  const services = [
    {
      title: 'Longarm-quilting',
      description: 'Profesjonell quilting med longarm-maskin. Kant-til-kant mønster, vatt og bakstykke.',
      link: '/tjenester#longarm-quilting',
      icon: '🧵',
      image: '/images/quilt.png'
    },
    {
      title: 'Gardiner og puter',
      description: 'Skreddersydde gardiner, puter og annen interiørsøm etter dine mål og ønsker.',
      link: '/tjenester#interiorsom',
      icon: '🪟',
      image: '/images/image.png'
    },
    {
      title: 'Bunad og festdrakt',
      description: 'Justering og tilpasning av bunad. Inn/ut, opplegg og små reparasjoner.',
      link: '/tjenester#bunad',
      icon: '👗',
      image: '/images/contact-page-image.png'
    },
    {
      title: 'Reparasjon og omsøm',
      description: 'Bukseopplegg, glidelåsbytte, innsving og andre justeringer av klær.',
      link: '/tjenester#reparasjon-omsom',
      icon: '✂️',
      image: '/images/quilt2.png'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-quilt-burgundy mb-4">
            Mine tjenester
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Jeg tilbyr et bredt spekter av sømtjenester med fokus på kvalitet og håndverk
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.link}
              className="group card hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-quilt-cream rounded-lg flex items-center justify-center text-2xl group-hover:bg-quilt-beige transition-colors">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-serif text-quilt-burgundy mb-2 group-hover:text-quilt-forest transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-quilt-forest font-medium group-hover:gap-2 transition-all">
                    Les mer 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/tjenester" className="btn-primary">
            Se alle tjenester
          </Link>
        </div>
      </div>
    </section>
  )
}