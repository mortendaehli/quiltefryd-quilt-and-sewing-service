import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Quiltefryd - Quilt- og sømtjenester i Tønsberg | Marit Aslesen',
  description: 'Longarm-quilting, gardiner og puter, bunadsjustering og små reparasjoner. Erfaren quilter med over 10 års erfaring fra Quiltefryd.',
  keywords: 'quilting Tønsberg, longarm quilting, bunad alterasjon Vestfold, gardiner sying, quiltefryd, Marit Aslesen',
  authors: [{ name: 'Marit Aslesen' }],
  openGraph: {
    title: 'Quiltefryd - Quilt- og sømtjenester i Tønsberg',
    description: 'Longarm-quilting, gardiner og puter, bunadsjustering og små reparasjoner.',
    url: 'https://quiltefryd.no',
    siteName: 'Quiltefryd',
    locale: 'nb_NO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Quiltefryd – Quilt og Søm ved Marit Aslesen',
    image: 'https://quiltefryd.no/images/hero.png',
    email: 'marit@quiltefryd.no',
    telephone: '+4795195088',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tønsberg',
      addressCountry: 'NO'
    },
    areaServed: 'NO',
    url: 'https://quiltefryd.no',
    description: 'Longarm-quilting, interiørsøm (gardiner, puter) og enkle bunadsjobber. Erfaren quilter, tidligere driver av Quiltefryd.',
    priceRange: 'NOK',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:00'
    }
  }

  return (
    <html lang="nb">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}