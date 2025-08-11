import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-quilt-forest text-white mt-16 pb-20 md:pb-0">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kontakt Info */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-quilt-cream">Kontakt</h3>
            <div className="space-y-2">
              <p>
                <a href="tel:95195088" className="hover:text-quilt-cream transition-colors">
                  📞 95 19 50 88
                </a>
              </p>
              <p>
                <a href="mailto:marit@quiltefryd.no" className="hover:text-quilt-cream transition-colors">
                  ✉️ marit@quiltefryd.no
                </a>
              </p>
              <p>📍 Tønsberg</p>
              <p className="text-sm opacity-90">Adresse oppgis ved avtale</p>
            </div>
          </div>

          {/* Tjenester */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-quilt-cream">Tjenester</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tjenester#longarm-quilting" className="hover:text-quilt-cream transition-colors">
                  Longarm-quilting
                </Link>
              </li>
              <li>
                <Link href="/tjenester#interiorsom" className="hover:text-quilt-cream transition-colors">
                  Gardiner og puter
                </Link>
              </li>
              <li>
                <Link href="/tjenester#bunad" className="hover:text-quilt-cream transition-colors">
                  Bunadsjustering
                </Link>
              </li>
              <li>
                <Link href="/tjenester#reparasjon-omsom" className="hover:text-quilt-cream transition-colors">
                  Reparasjon og omsøm
                </Link>
              </li>
            </ul>
          </div>

          {/* Åpningstider */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-quilt-cream">Åpningstider</h3>
            <p>Hverdager: 10:00 - 18:00</p>
            <p className="text-sm opacity-90 mt-2">Etter avtale</p>
            <div className="mt-4">
              <Link href="/kontakt" className="inline-block bg-quilt-burgundy text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all">
                Bestill time
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p>&copy; {currentYear} Quiltefryd - Marit Aslesen</p>
              <p className="text-sm opacity-90">Quilt- og sømtjenester i Tønsberg</p>
            </div>
            <div className="flex space-x-4 text-sm">
              <Link href="/personvern" className="hover:text-quilt-cream transition-colors">
                Personvern
              </Link>
              <span className="opacity-50">|</span>
              <Link href="/cookies" className="hover:text-quilt-cream transition-colors">
                Informasjonskapsler
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}