export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#4a7c59] font-semibold text-sm uppercase tracking-widest">Contact</span>
          <h2 className="text-4xl font-bold text-[#2d3d2e] mt-3 mb-4">Nous trouver</h2>
          <p className="text-[#5c4a3a] text-lg">Venez nous rendre visite ou contactez-nous.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {[
              {
                icon: '📍',
                title: 'Adresse',
                lines: ['CharmBio Institut Bien-être · Santé · Beauté', 'Votre ville, Cameroun'],
              },
              {
                icon: '📞',
                title: 'Téléphone & WhatsApp',
                lines: ['+237 6XX XXX XXX'],
              },
              {
                icon: '📧',
                title: 'Email',
                lines: ['contact@charmbio.com'],
              },
              {
                icon: '🕐',
                title: 'Horaires',
                lines: ['Lundi – Vendredi : 09h00 – 18h00', 'Samedi : 09h00 – 17h00', 'Dimanche : Fermé'],
              },
            ].map(item => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 bg-[#e8f0e9] rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#2d3d2e] mb-1">{item.title}</h4>
                  {item.lines.map(l => <p key={l} className="text-[#5c4a3a]">{l}</p>)}
                </div>
              </div>
            ))}

            {/* Social */}
            <div>
              <h4 className="font-bold text-[#2d3d2e] mb-3">Suivez-nous</h4>
              <div className="flex gap-3">
                {[
                  { label: 'Instagram', icon: '📸' },
                  { label: 'Facebook', icon: '👍' },
                  { label: 'WhatsApp', icon: '💬' },
                  { label: 'TikTok', icon: '🎵' },
                ].map(s => (
                  <a key={s.label} href="#" className="flex items-center gap-2 bg-[#f5f0e8] px-4 py-2 rounded-xl text-sm font-medium text-[#3d3028] hover:bg-[#4a7c59] hover:text-white transition-all">
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map placeholder + CTA */}
          <div className="space-y-6">
            <div className="bg-[#e8f0e9] rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-[#4a7c59]">
                <div className="text-5xl mb-3">📍</div>
                <p className="font-semibold">CharmBio Institut</p>
                <p className="text-sm text-[#5c4a3a]">Carte disponible sur Google Maps</p>
              </div>
            </div>

            <div className="bg-[#f5f0e8] rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-[#2d3d2e] mb-3">Prêt(e) à révéler votre beauté ?</h3>
              <p className="text-[#5c4a3a] mb-5">Profitez d'un <strong>diagnostic de peau gratuit</strong> avec conseils beauté personnalisés à votre première visite.</p>
              <a href="#booking" className="inline-block bg-[#4a7c59] text-white px-8 py-4 rounded-full font-bold hover:bg-[#3d6b4a] transition-colors shadow-md">
                Réserver maintenant 🌿
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
