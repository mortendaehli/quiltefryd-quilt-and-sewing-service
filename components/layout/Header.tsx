'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex flex-col">
                <span className="text-2xl font-serif text-quilt-burgundy">Quiltefryd</span>
                <span className="text-sm text-quilt-forest">Marit Aslesen</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <Navigation />
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:95195088" className="text-quilt-forest hover:text-quilt-burgundy transition-colors">
                <span className="font-medium">95 19 50 88</span>
              </a>
              <Link href="/kontakt" className="btn-primary">
                Kontakt meg
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Meny"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="container-custom py-4">
              <Navigation mobile onItemClick={() => setIsMenuOpen(false)} />
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a href="tel:95195088" className="block py-2 text-quilt-forest font-medium">
                  📞 Ring: 95 19 50 88
                </a>
                <Link 
                  href="/kontakt" 
                  className="block mt-2 btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontakt meg
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky Contact Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-quilt-burgundy text-white z-40">
        <div className="flex">
          <a href="tel:95195088" className="flex-1 py-3 text-center border-r border-white/20">
            <span className="text-sm">Ring</span>
            <span className="block font-medium">95 19 50 88</span>
          </a>
          <a href="mailto:marit@quiltefryd.no" className="flex-1 py-3 text-center">
            <span className="text-sm">Send</span>
            <span className="block font-medium">E-post</span>
          </a>
        </div>
      </div>
    </>
  )
}