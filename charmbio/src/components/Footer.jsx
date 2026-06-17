export default function Footer() {
  return (
    <footer className="bg-[#0f1a11] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#3d6e4f] rounded-xl flex items-center justify-center text-xl">🌿</div>
              <div>
                <p className="text-xl font-bold text-white">CharmBio</p>
                <p className="text-xs text-[#7db88a]">Institut Bien-être · Santé · Beauté</p>
              </div>
            </div>
            <p className="text-[#8aa88d] leading-relaxed mb-5 max-w-sm text-sm">
              L'alliance de la nature et de la science au service de votre beauté. Des soins high-tech certifiés et des produits biologiques pour révéler votre éclat naturel.
            </p>
            <p className="text-[#c9a84c] font-semibold italic text-sm">
              "Révélez naturellement la beauté de votre corps."
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '#about', label: 'Notre Histoire' },
                { href: '#services', label: 'Soins & Machines' },
                { href: '#packs', label: 'Packs & Combos' },
                { href: '#entreprises', label: 'Offre Entreprises' },
                { href: '#booking', label: 'Réservation' },
                { href: '#contact', label: 'Contact' },
              ].map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-[#8aa88d] hover:text-[#7db88a] transition-colors text-sm">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Technologies</h4>
            <ul className="space-y-2.5">
              {['Illustria 448 kHz', 'Hydra Spa 18-en-1', 'Perfect Shape R NEO', 'Pressothérapie', 'Cavitation Ultrasonique', 'Lumière Pulsée IPL', 'Lipo Laser'].map(t => (
                <li key={t} className="flex items-center gap-2 text-[#8aa88d] text-sm">
                  <span className="w-1.5 h-1.5 bg-[#3d6e4f] rounded-full flex-shrink-0"></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e3320] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#4a6050] text-sm">
            © {new Date().getFullYear()} CharmBio Institut Bien-être - Santé - Beauté. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            {['Instagram', 'Facebook', 'WhatsApp', 'TikTok'].map(s => (
              <a key={s} href="#" className="text-[#4a6050] hover:text-[#7db88a] text-sm transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
