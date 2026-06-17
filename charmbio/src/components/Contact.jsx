export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#3d6e4f]">Nous trouver</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2520] mt-3 mb-4">Contact</h2>
          <div className="w-16 h-1 bg-[#3d6e4f] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-5">
            {[
              { icon: '📍', title: 'Adresse', lines: ['CharmBio Institut Bien-être · Santé · Beauté', 'Votre ville, Cameroun'] },
              { icon: '📞', title: 'Téléphone & WhatsApp', lines: ['+237 6XX XXX XXX'] },
              { icon: '📧', title: 'Email', lines: ['contact@charmbio.com'] },
              { icon: '🕐', title: 'Horaires', lines: ['Lundi – Vendredi : 09h00 – 18h00', 'Samedi : 09h00 – 17h00', 'Dimanche : Fermé'] },
            ].map(item => (
              <div key={item.title} className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm border border-[#e8e0d4]">
                <div className="w-12 h-12 bg-[#edf5f0] rounded-xl flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-[#1a2520] mb-1">{item.title}</h4>
                  {item.lines.map(l => <p key={l} className="text-[#4a5c52] text-sm">{l}</p>)}
                </div>
              </div>
            ))}

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e8e0d4]">
              <h4 className="font-bold text-[#1a2520] mb-3">Suivez-nous</h4>
              <div className="flex flex-wrap gap-2">
                {[{ label: 'Instagram', icon: '📸' }, { label: 'Facebook', icon: '👍' }, { label: 'WhatsApp', icon: '💬' }, { label: 'TikTok', icon: '🎵' }].map(s => (
                  <a key={s.label} href="#" className="flex items-center gap-2 bg-[#edf5f0] border border-[#d4e6da] px-4 py-2 rounded-xl text-sm font-semibold text-[#3d6e4f] hover:bg-[#3d6e4f] hover:text-white transition-all">
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map + CTA */}
          <div className="space-y-6">
            <div className="bg-[#edf5f0] rounded-3xl h-64 flex items-center justify-center border border-[#d4e6da] shadow-sm">
              <div className="text-center">
                <div className="text-5xl mb-3">📍</div>
                <p className="font-bold text-[#1a2520]">CharmBio Institut</p>
                <p className="text-sm text-[#4a5c52]">Localisation disponible sur Google Maps</p>
              </div>
            </div>

            <div className="bg-[#1a2520] rounded-3xl p-8 text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-white mb-3">Prêt(e) à révéler votre beauté ?</h3>
              <p className="text-[#b5c9b8] mb-6 text-sm leading-relaxed">
                Profitez d'un <strong className="text-[#c9a84c]">diagnostic de peau gratuit</strong> avec conseils beauté personnalisés à votre première visite.
              </p>
              <a href="#booking" className="inline-block bg-[#3d6e4f] text-white px-8 py-4 rounded-full font-bold hover:bg-[#2d5a3d] transition-colors shadow-lg shadow-black/30">
                Réserver maintenant →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
