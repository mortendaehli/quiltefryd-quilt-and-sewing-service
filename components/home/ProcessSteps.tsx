export default function ProcessSteps() {
  const steps = [
    {
      number: '1',
      title: 'Ta kontakt',
      description: 'Ring eller send meg en melding om ditt prosjekt',
      icon: '📞'
    },
    {
      number: '2',
      title: 'Avtale og pris',
      description: 'Vi avtaler detaljer og du får et prisoverslag',
      icon: '💬'
    },
    {
      number: '3',
      title: 'Levering/utførelse',
      description: 'Jeg utfører arbeidet med omhu og kvalitet',
      icon: '✨'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-quilt-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-quilt-burgundy mb-4">
            Slik jobber jeg
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            En enkel og trygg prosess fra første kontakt til ferdig resultat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-quilt-burgundy to-transparent"></div>
              )}
              
              <div className="text-center relative z-10">
                {/* Icon Circle */}
                <div className="mx-auto w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 relative">
                  <span className="text-3xl">{step.icon}</span>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-quilt-burgundy text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-serif text-quilt-forest mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Klar for å komme i gang med ditt sømprosjekt?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:95195088" className="btn-secondary">
              Ring 95 19 50 88
            </a>
            <a href="/kontakt" className="btn-primary">
              Send melding
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}