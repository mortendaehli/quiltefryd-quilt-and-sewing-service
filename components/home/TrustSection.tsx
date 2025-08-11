export default function TrustSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-quilt-cream to-quilt-beige rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-quilt-burgundy mb-6">
                Erfaring du kan stole på
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Gjennom over 10 år som driver av <strong>Quiltefryd</strong> i Tønsberg har jeg 
                  hjulpet hundrevis av kunder med deres sømprosjekter.
                </p>
                <p>
                  Med min profesjonelle <strong>Innova longarm-maskin</strong> kan jeg levere 
                  jevne, vakre quiltesømmer som holder i generasjoner.
                </p>
                <p>
                  Selv om butikken nå er stengt, fortsetter jeg å tilby mine tjenester 
                  med samme dedikasjon til kvalitet og kundeservice.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-quilt-burgundy">10+</div>
                  <div className="text-sm text-gray-600">År med erfaring</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-quilt-burgundy">100%</div>
                  <div className="text-sm text-gray-600">Fornøyde kunder</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Equipment highlight */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-serif text-quilt-forest mb-3">
                  Profesjonelt utstyr
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-quilt-burgundy mt-1">✓</span>
                    <span>Innova longarm quiltemaskin for store prosjekter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-quilt-burgundy mt-1">✓</span>
                    <span>Moderne symaskiner for presisjon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-quilt-burgundy mt-1">✓</span>
                    <span>Spesialverktøy for bunad og finarbeid</span>
                  </li>
                </ul>
              </div>

              {/* Testimonial placeholder */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-quilt-burgundy">
                <p className="italic text-gray-700 mb-3">
                  "Marit har hjulpet meg med flere quiltprosjekter gjennom årene. 
                  Alltid nøyaktig arbeid og levering til avtalt tid."
                </p>
                <p className="text-sm text-quilt-forest font-medium">
                  - Fornøyd kunde fra Tønsberg
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}