export default function Footer() {
  return (
    <footer className="bg-[#1a2b1c] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌿</span>
              <div>
                <p className="text-2xl font-bold text-[#7db88a]">CharmBio</p>
                <p className="text-xs text-[#9ab89e]">Institut Bien-être · Santé · Beauté</p>
              </div>
            </div>
            <p className="text-[#9ab89e] leading-relaxed mb-4 max-w-sm">
              L'alliance de la nature et de la science au service de votre beauté. Des soins high-tech certifiés et des produits biologiques pour révéler votre éclat naturel.
            </p>
            <p className="text-[#7db88a] font-semibold italic">"Révélez naturellement la beauté de votre corps."</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: '#about', label: 'Notre Histoire' },
                { href: '#services', label: 'Soins & Machines' },
                { href: '#packs', label: 'Packs & Combos' },
                { href: '#entreprises', label: 'Offre Entreprises' },
                { href: '#booking', label: 'Réservation' },
                { href: '#contact', label: 'Contact' },
              ].map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-[#9ab89e] hover:text-[#7db88a] transition-colors text-sm">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Machines */}
          <div>
            <h4 className="font-bold text-white mb-4">Nos Technologies</h4>
            <ul className="space-y-2 text-sm text-[#9ab89e]">
              {[
                'Illustria 448 kHz',
                'Hydra Spa 18-en-1',
                'Perfect Shape R NEO',
                'Pressothérapie',
                'Cavitation Ultrasonique',
                'Lumière Pulsée IPL',
                'Lipo Laser',
              ].map(t => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-[#4a7c59]">🔬</span> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2d4a30] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6a8a6d] text-sm">
            © {new Date().getFullYear()} CharmBio Institut Bien-être - Santé - Beauté. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            {['Instagram', 'Facebook', 'WhatsApp', 'TikTok'].map(s => (
              <a key={s} href="#" className="text-[#6a8a6d] hover:text-[#7db88a] text-sm transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
