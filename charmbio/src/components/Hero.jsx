export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ddeee2] via-[#f5f0e8] to-[#faf8f5]" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#4a7c59]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#8b6914]/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-[#4a7c59]/10 text-[#4a7c59] px-5 py-2 rounded-full text-sm font-medium mb-8">
          <span>✨</span>
          <span>Institut Bien-être · Santé · Beauté</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#2d3d2e] mb-4 leading-tight">
          <span className="text-[#4a7c59]">CharmBio</span>
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-[#5c4a3a] mb-6">
          Révélez naturellement la beauté de votre corps
        </p>

        <p className="text-lg md:text-xl text-[#6b5a4a] max-w-2xl mx-auto mb-10 leading-relaxed">
          L'alliance de la nature et de la science au service de votre beauté. Des soins high-tech certifiés,
          des produits bio et une expertise personnalisée pour révéler votre éclat naturel.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#booking" className="bg-[#4a7c59] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#3d6b4a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Prendre rendez-vous
          </a>
          <a href="#services" className="bg-white text-[#4a7c59] border-2 border-[#4a7c59] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#4a7c59]/5 transition-all">
            Découvrir nos soins
          </a>
        </div>

        {/* Machines pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {['Illustria 448 kHz', 'Hydra Spa 18-en-1', 'Perfect Shape NEO', 'Pressothérapie', 'Cavitation Ultrasonique', 'Lumière Pulsée'].map(m => (
            <span key={m} className="bg-white/80 border border-[#c8d8c8] text-[#4a7c59] px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
              🔬 {m}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[
            { value: '500+', label: 'Clientes satisfaites' },
            { value: '100%', label: 'Certifié bio & naturel' },
            { value: '6', label: 'Machines high-tech' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-[#4a7c59]">{s.value}</p>
              <p className="text-xs text-[#5c4a3a] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
