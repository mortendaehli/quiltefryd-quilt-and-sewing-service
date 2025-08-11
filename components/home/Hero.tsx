import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-quilt-cream to-quilt-beige overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-dots pointer-events-none"></div>
      
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-quilt-burgundy mb-4">
              Quilt- og sømtjenester i Tønsberg
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Longarm-quilting, gardiner og puter, bunadsjustering og små reparasjoner. 
              Med over 10 års erfaring fra Quiltefryd hjelper jeg deg med dine sømprosjekter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="btn-primary text-center">
                Kontakt meg
              </Link>
              <Link href="/tjenester" className="btn-secondary text-center">
                Se tjenester
              </Link>
            </div>

            {/* Quick Info */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-quilt-burgundy">✓</span>
                <span>Erfaren quilter</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-quilt-burgundy">✓</span>
                <span>Longarm-maskin</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-quilt-burgundy">✓</span>
                <span>Rask levering</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-slide-up">
            <Image
              src="/images/hero.png"
              alt="Quilting og sømarbeid"
              fill
              className="object-cover"
              priority
            />
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-quilt-forest font-medium">Quiltefryd</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}