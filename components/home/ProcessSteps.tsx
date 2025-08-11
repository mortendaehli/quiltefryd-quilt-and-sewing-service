import { PhoneIcon, ChatIcon, SparklesIcon } from '@/components/icons/ProcessIcons'

export default function ProcessSteps() {
  const steps = [
    {
      number: '1',
      title: 'Ta kontakt',
      description: 'Ring eller send meg en melding om ditt prosjekt',
      icon: PhoneIcon,
      delay: 'delay-0'
    },
    {
      number: '2',
      title: 'Avtale og pris',
      description: 'Vi avtaler detaljer og du får et prisoverslag',
      icon: ChatIcon,
      delay: 'delay-100'
    },
    {
      number: '3',
      title: 'Levering/utførelse',
      description: 'Jeg utfører arbeidet med omhu og kvalitet',
      icon: SparklesIcon,
      delay: 'delay-200'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-quilt-cream/30 to-white">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-quilt-gold uppercase tracking-[0.2em] text-sm font-medium">Prosess</span>
          <h2 className="text-4xl md:text-5xl font-serif text-quilt-forest mb-6 mt-3 font-light">
            Slik jobber jeg
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            En enkel og trygg prosess fra første kontakt til ferdig resultat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-quilt-gold/30 to-transparent"></div>
          
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className={`relative animate-slide-up ${step.delay}`}>
                <div className="text-center relative z-10 group">
                  {/* Icon Circle */}
                  <div className="mx-auto w-28 h-28 bg-gradient-to-br from-white to-quilt-cream rounded-full shadow-xl flex items-center justify-center mb-6 relative transform group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-12 h-12 text-quilt-forest" />
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-quilt-burgundy to-quilt-brown text-white rounded-full flex items-center justify-center font-bold shadow-lg animate-pulse-soft">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-serif text-quilt-brown mb-3 group-hover:text-quilt-burgundy transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-gray-700 mb-6">
            Klar for å komme i gang med ditt sømprosjekt?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:95195088" className="btn-secondary group">
              <span className="inline-flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                Ring 95 19 50 88
              </span>
            </a>
            <a href="/kontakt" className="btn-primary group">
              <span className="inline-flex items-center gap-2">
                Send melding
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}