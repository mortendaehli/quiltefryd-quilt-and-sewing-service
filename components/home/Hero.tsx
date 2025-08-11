import Image from 'next/image'
import Link from 'next/link'
import { QuiltPattern } from '@/components/shared/DecorativeBorder'
import { ThreadIcon, ButtonIcon } from '@/components/icons/SewingIcons'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-quilt-cream via-white to-quilt-beige overflow-hidden min-h-[80vh] flex items-center">
      {/* Pattern overlay */}
      <QuiltPattern className="text-quilt-moss pointer-events-none opacity-50" />
      
      <div className="container-custom py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in space-y-6">
            <div className="inline-block">
              <span className="text-quilt-gold uppercase tracking-[0.2em] text-sm font-medium">Velkommen til</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-quilt-burgundy leading-[1.1] font-light">
              Quilt- og sømtjenester
              <span className="block text-3xl md:text-4xl lg:text-5xl text-quilt-forest mt-2">i Tønsberg</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
              Longarm-quilting, gardiner og puter, bunadsjustering og små reparasjoner. 
              Med over 10 års erfaring fra Quiltefryd hjelper jeg deg med dine sømprosjekter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/kontakt" className="btn-primary text-center inline-flex items-center justify-center gap-2 group">
                <ButtonIcon className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                Kontakt meg
              </Link>
              <Link href="/tjenester" className="btn-secondary text-center inline-flex items-center justify-center gap-2 group">
                <ThreadIcon className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                Se tjenester
              </Link>
            </div>

            {/* Quick Info */}
            <div className="mt-12 flex flex-wrap gap-8 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-quilt-burgundy/10 flex items-center justify-center">
                  <span className="text-quilt-burgundy text-lg">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Erfaren quilter</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-quilt-burgundy/10 flex items-center justify-center">
                  <span className="text-quilt-burgundy text-lg">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Longarm-maskin</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-quilt-burgundy/10 flex items-center justify-center">
                  <span className="text-quilt-burgundy text-lg">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Rask levering</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl animate-slide-up transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/hero.png"
                alt="Quilting og sømarbeid"
                fill
                className="object-cover"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <span className="text-quilt-forest font-serif text-lg">Quiltefryd</span>
              </div>
            </div>
            {/* Decorative corner accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-quilt-gold/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-quilt-burgundy/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}