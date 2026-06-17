export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#edf5f0] via-[#f5f0e8] to-[#faf7f2]">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3d6e4f]/8 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c9a84c]/8 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 border border-[#c9a84c]/40 text-[#3d6e4f] px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm backdrop-blur-sm">
          <span className="w-2 h-2 bg-[#c9a84c] rounded-full inline-block"></span>
          Institut Bien-être · Santé · Beauté
        </div>

        {/* Main title */}
        <h1 className="text-6xl md:text-8xl font-bold text-[#1a2520] mb-4 leading-[1.05] tracking-tight">
          Charm<span className="text-[#3d6e4f]">Bio</span>
        </h1>

        {/* Slogan */}
        <p className="text-xl md:text-2xl text-[#3d6e4f] font-semibold mb-6 tracking-wide">
          ✦ Révélez naturellement la beauté de votre corps ✦
        </p>

        <p className="text-lg text-[#4a5c52] max-w-xl mx-auto mb-10 leading-relaxed">
          L'alliance de la nature et de la science au service de votre beauté.
          Des soins high-tech certifiés et des produits biologiques pour révéler votre éclat naturel.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#booking" className="bg-[#3d6e4f] text-white px-9 py-4 rounded-full text-base font-bold hover:bg-[#2d5a3d] transition-all shadow-lg shadow-[#3d6e4f]/30 hover:shadow-xl hover:-translate-y-0.5">
            Prendre rendez-vous
          </a>
          <a href="#services" className="bg-white text-[#3d6e4f] border-2 border-[#3d6e4f] px-9 py-4 rounded-full text-base font-bold hover:bg-[#edf5f0] transition-all">
            Découvrir nos soins
          </a>
        </div>

        {/* Machine pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {['Illustria 448 kHz', 'Hydra Spa 18-en-1', 'Perfect Shape NEO', 'Pressothérapie', 'Cavitation Ultrasonique', 'Lumière Pulsée IPL'].map(m => (
            <span key={m} className="bg-white border border-[#d4e6da] text-[#3d6e4f] px-4 py-2 rounded-full text-xs font-semibold shadow-sm">
              🔬 {m}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          {[
            { value: '500+', label: 'Clientes satisfaites' },
            { value: '100%', label: 'Bio & certifié' },
            { value: '6', label: 'Machines high-tech' },
          ].map(s => (
            <div key={s.label} className="bg-white/70 backdrop-blur rounded-2xl py-5 px-3 shadow-sm border border-white">
              <p className="text-3xl font-bold text-[#3d6e4f]">{s.value}</p>
              <p className="text-xs text-[#4a5c52] mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
