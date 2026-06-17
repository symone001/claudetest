const machines = [
  {
    icon: '⚡',
    name: 'Illustria 448 kHz',
    subtitle: 'Radiofrequence Deep Fat Removal',
    desc: "Radiofréquence précise et douce pour agir en profondeur comme en surface. Mode Résistif (jusqu'à 8 cm) pour stimuler la circulation et déstocker les graisses. Mode Capacitif pour raffermir, lisser et stimuler le collagène.",
    soins: [
      { name: 'Soin Visage Énergie Cellulaire – GlowLift 448', price: '25 000 XAF', duration: '30-40 min' },
      { name: 'Soin Silhouette – Body Detox & Sculpt 448', price: '25 000 XAF', duration: '45 min' },
      { name: 'Soin Fessiers & Cuisses – Sculpt & Drain 448', price: '25 000 XAF', duration: '40 min' },
      { name: 'Soin Cuir Chevelu – Hair Vital Boost 448', price: '25 000 XAF', duration: '30 min' },
    ],
    benefits: ['Remodelage de la silhouette', 'Réduction des graisses & cellulite', 'Raffermissement & lifting naturel', 'Récupération musculaire'],
    color: 'bg-amber-50 border-amber-200',
    badge: 'High-Tech',
    badgeColor: 'bg-amber-500',
  },
  {
    icon: '💧',
    name: 'Hydra Spa 18-en-1 Ultra Glow',
    subtitle: 'Soin complet peau éclatante',
    desc: "18 fonctions esthétiques avancées : Hydro Facial, photothérapie LED, radiofréquence, cryothérapie, microdermabrasion et oxygénation. Résultats visibles dès la première séance.",
    soins: [
      { name: 'Hydra Pur Glow', price: 'Sur devis', duration: '45 min' },
      { name: 'Hydra Anti-Âge Glow', price: 'Sur devis', duration: '60 min' },
      { name: 'Hydra Peau Sensible', price: 'Sur devis', duration: '45 min' },
      { name: 'Hydra Anti-Taches & Teint Éclat', price: 'Sur devis', duration: '45-60 min' },
      { name: 'Hydra Peeling Flash', price: 'Sur devis', duration: '30 min' },
    ],
    benefits: ['Hydratation intense en profondeur', 'Nettoyage des pores', 'Rides & ridules atténuées', 'Teint unifié & éclatant'],
    color: 'bg-blue-50 border-blue-200',
    badge: 'Best-seller',
    badgeColor: 'bg-blue-500',
  },
  {
    icon: '🏋️',
    name: 'Perfect Shaper R NEO',
    subtitle: 'Remodelage & Raffermissement',
    desc: "Radiofréquence multipolaire pour agir en profondeur sur la fermeté, la tonicité et le remodelage du corps et du visage. Effet lifting immédiat, action anti-âge globale.",
    soins: [
      { name: 'Soin Visage – Perfect Face Lift', price: 'Sur devis', duration: '25 min' },
      { name: 'Soin Corps – Perfect Sculpt Ventre & Taille', price: 'Sur devis', duration: '30 min' },
      { name: 'Soin Fessiers – Booty Up', price: 'Sur devis', duration: '30 min' },
      { name: 'Soin Bras & Dos – Tonic Arms & Back', price: 'Sur devis', duration: '30 min' },
      { name: 'Soin Post-Partum – Mommy Reset', price: 'Sur devis', duration: '30 min' },
      { name: 'Soin Intime – Perfect Intima Boost', price: 'Sur devis', duration: '20 min' },
    ],
    benefits: ['Raffermissement intense', 'Réduction graisses localisées', 'Lifting immédiat du visage', 'Effet sculptant anti-âge'],
    color: 'bg-purple-50 border-purple-200',
    badge: 'Premium',
    badgeColor: 'bg-purple-500',
  },
  {
    icon: '🌊',
    name: 'Pressothérapie',
    subtitle: 'Drainage lymphatique & légèreté',
    desc: "Technique de drainage lymphatique mécanique par pressions d'air contrôlées. Stimule la circulation, détoxifie l'organisme, réduit la cellulite aqueuse et procure légèreté et bien-être immédiat.",
    soins: [
      { name: 'Séance Drainage Corps', price: 'Sur devis', duration: '45 min' },
      { name: 'Programme Jambes Légères', price: 'Sur devis', duration: '45 min' },
    ],
    benefits: ['Drainage lymphatique efficace', 'Jambes légères & décongestionnées', 'Réduction cellulite aqueuse', 'Détoxification profonde'],
    color: 'bg-cyan-50 border-cyan-200',
    badge: 'Détox',
    badgeColor: 'bg-cyan-600',
  },
  {
    icon: '🎯',
    name: 'Soin Minceur ERIS – Lipo Cavitation',
    subtitle: 'Cavitation + Radiofréquence 9 en 1',
    desc: "Combine cavitation ultrasonique 40kHz, radiofréquence multipolaire, lipo laser et vacuum thérapie. Détruit les cellules graisseuses et les transforme en acides gras naturellement éliminés.",
    soins: [
      { name: 'Cavitation Ultrasonique – Remodelage & Perte de cm', price: 'Sur devis', duration: '30-40 min' },
      { name: 'Radiofréquence Visage – Effet Lifting Naturel', price: 'Sur devis', duration: '30-40 min' },
      { name: 'Radiofréquence Corps – Raffermissement Intense', price: 'Sur devis', duration: '30-45 min' },
      { name: 'Lipolaser – Déstockage Graisse Doux & Progressif', price: 'Sur devis', duration: '30-40 min' },
      { name: 'Vacuum Thérapie – Décongestion & Anti-Cellulite', price: 'Sur devis', duration: '20-30 min' },
    ],
    benefits: ['Réduction graisses localisées', 'Affinement de la silhouette', 'Diminution de la cellulite', 'Visible dès la 1ère séance'],
    color: 'bg-rose-50 border-rose-200',
    badge: 'Minceur',
    badgeColor: 'bg-rose-500',
  },
]

const autresSoins = [
  {
    category: 'Massages',
    icon: '🤲',
    items: [
      { name: 'Massage Tonifiant – Énergie & Vitalité', duration: '45-60 min' },
      { name: 'Massage Relaxant – Sérénité & Bien-être', duration: '45-75 min' },
      { name: 'Massage aux Pierres Chaudes – Chaleur & Harmonie', duration: '60 min' },
    ],
  },
  {
    category: 'Épilations & Gommage',
    icon: '✨',
    items: [
      { name: 'Gommage Corps – Éclat de Peau', duration: '30-45 min' },
      { name: 'Épilation à la Cire – Corps complet', duration: '15-45 min' },
      { name: 'Épilation Cire – Zone ciblée', duration: '10-30 min' },
      { name: 'Épilation Lumière Pulsée – Corps', duration: '15-60 min' },
    ],
  },
  {
    category: 'Manucure & Pédicure',
    icon: '💅',
    items: [
      { name: 'Manucure Classique', duration: '30-45 min' },
      { name: 'Manucure Spa', duration: '45-60 min' },
      { name: 'Semi-Permanent', duration: '45-60 min' },
      { name: 'Résine (Acrylique)', duration: '1h30-2h' },
      { name: 'Gel – Brillance & Longue Durée', duration: '1h-1h30' },
      { name: 'Pédicure Classique', duration: '45-60 min' },
      { name: 'Soin à la Paraffine – Mains & Pieds', duration: '30-45 min' },
    ],
  },
  {
    category: 'Blanchiment Dentaire',
    icon: '🦷',
    items: [
      { name: 'Blanchiment LED Professionnel – Sourire Éclatant', duration: '1 séance' },
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#4a7c59] font-semibold text-sm uppercase tracking-widest">Soins & Technologies</span>
          <h2 className="text-4xl font-bold text-[#2d3d2e] mt-3 mb-4">
            Nos Machines & Soins High-Tech
          </h2>
          <p className="text-[#5c4a3a] text-lg max-w-2xl mx-auto">
            Des équipements haut de gamme de dernière génération, conçus par des experts internationaux de la santé, de l'esthétique et du bien-être.
          </p>
        </div>

        {/* Machines */}
        <div className="space-y-8 mb-20">
          {machines.map(m => (
            <div key={m.name} className={`rounded-2xl border-2 p-8 ${m.color} shadow-sm`}>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{m.icon}</span>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl font-bold text-[#2d3d2e]">{m.name}</h3>
                      <span className={`text-xs text-white px-3 py-1 rounded-full font-bold ${m.badgeColor}`}>{m.badge}</span>
                    </div>
                    <p className="text-[#7a6a5a] font-medium">{m.subtitle}</p>
                  </div>
                </div>
              </div>

              <p className="text-[#5c4a3a] leading-relaxed mb-6">{m.desc}</p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Soins */}
                <div>
                  <h4 className="font-bold text-[#2d3d2e] mb-3">Soins disponibles</h4>
                  <div className="space-y-2">
                    {m.soins.map(s => (
                      <div key={s.name} className="flex items-center justify-between bg-white/70 rounded-xl px-4 py-2.5">
                        <span className="text-[#3d3028] text-sm font-medium">{s.name}</span>
                        <div className="text-right flex-shrink-0 ml-4">
                          <span className="text-[#4a7c59] font-bold text-sm block">{s.price}</span>
                          <span className="text-[#9a8a7a] text-xs">{s.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-bold text-[#2d3d2e] mb-3">Bienfaits</h4>
                  <div className="space-y-2">
                    {m.benefits.map(b => (
                      <div key={b} className="flex items-center gap-2">
                        <span className="text-[#4a7c59]">✔</span>
                        <span className="text-[#5c4a3a] text-sm">{b}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#booking" className="mt-5 inline-block bg-[#4a7c59] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#3d6b4a] transition-colors">
                    Réserver ce soin →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Autres soins */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#2d3d2e]">Autres Soins & Services</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {autresSoins.map(cat => (
            <div key={cat.category} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h4 className="font-bold text-[#2d3d2e] mb-4">{cat.category}</h4>
              <div className="space-y-2">
                {cat.items.map(item => (
                  <div key={item.name} className="border-b border-[#f0ebe3] pb-2 last:border-0">
                    <p className="text-[#3d3028] text-sm font-medium">{item.name}</p>
                    <p className="text-[#9a8a7a] text-xs">⏱ {item.duration}</p>
                  </div>
                ))}
              </div>
              <a href="#booking" className="mt-4 block text-center text-[#4a7c59] text-sm font-semibold hover:underline">
                Réserver →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
