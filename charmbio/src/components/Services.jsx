const machines = [
  {
    icon: '⚡',
    name: 'Illustria 448 kHz',
    subtitle: 'Radiofrequence Deep Fat Removal',
    desc: "Radiofréquence précise et douce pour agir en profondeur comme en surface. Mode Résistif (jusqu'à 8 cm) pour déstocker les graisses. Mode Capacitif pour raffermir et stimuler le collagène.",
    soins: [
      { name: 'Soin Visage Énergie Cellulaire – GlowLift 448', price: '25 000 XAF', duration: '30-40 min' },
      { name: 'Soin Silhouette – Body Detox & Sculpt 448', price: '25 000 XAF', duration: '45 min' },
      { name: 'Soin Fessiers & Cuisses – Sculpt & Drain 448', price: '25 000 XAF', duration: '40 min' },
      { name: 'Soin Cuir Chevelu – Hair Vital Boost 448', price: '25 000 XAF', duration: '30 min' },
    ],
    benefits: ['Remodelage de la silhouette', 'Réduction des graisses & cellulite', 'Raffermissement & lifting naturel', 'Récupération musculaire'],
    headerBg: 'bg-amber-600',
    borderColor: 'border-amber-200',
    badge: 'High-Tech',
  },
  {
    icon: '💧',
    name: 'Hydra Spa 18-en-1 Ultra Glow',
    subtitle: 'Soin complet pour une peau éclatante',
    desc: "18 fonctions esthétiques avancées : Hydro Facial, photothérapie LED, radiofréquence, cryothérapie, microdermabrasion et oxygénation. Résultats visibles dès la première séance.",
    soins: [
      { name: 'Hydra Pur Glow', price: 'Sur devis', duration: '45 min' },
      { name: 'Hydra Anti-Âge Glow', price: 'Sur devis', duration: '60 min' },
      { name: 'Hydra Peau Sensible', price: 'Sur devis', duration: '45 min' },
      { name: 'Hydra Anti-Taches & Teint Éclat', price: 'Sur devis', duration: '45-60 min' },
      { name: 'Hydra Peeling Flash', price: 'Sur devis', duration: '30 min' },
    ],
    benefits: ['Hydratation intense en profondeur', 'Nettoyage profond des pores', 'Rides & ridules atténuées', 'Teint unifié & éclatant'],
    headerBg: 'bg-blue-600',
    borderColor: 'border-blue-200',
    badge: 'Best-seller',
  },
  {
    icon: '🏋️',
    name: 'Perfect Shaper R NEO',
    subtitle: 'Remodelage & Raffermissement Haute Performance',
    desc: "Radiofréquence multipolaire pour agir en profondeur sur la fermeté et le remodelage du corps et du visage. Effet lifting immédiat, action anti-âge globale, raffermissement intense.",
    soins: [
      { name: 'Perfect Face Lift – Soin Visage', price: 'Sur devis', duration: '25 min' },
      { name: 'Perfect Sculpt – Ventre & Taille', price: 'Sur devis', duration: '30 min' },
      { name: 'Booty Up – Soin Fessiers', price: 'Sur devis', duration: '30 min' },
      { name: 'Tonic Arms & Back – Bras & Dos', price: 'Sur devis', duration: '30 min' },
      { name: 'Mommy Reset – Soin Post-Partum', price: 'Sur devis', duration: '30 min' },
      { name: 'Perfect Intima Boost – Soin Intime', price: 'Sur devis', duration: '20 min' },
    ],
    benefits: ['Raffermissement intense', 'Réduction graisses localisées', 'Lifting immédiat du visage', 'Effet sculptant anti-âge'],
    headerBg: 'bg-purple-600',
    borderColor: 'border-purple-200',
    badge: 'Premium',
  },
  {
    icon: '🌊',
    name: 'Pressothérapie',
    subtitle: 'Drainage lymphatique & jambes légères',
    desc: "Drainage lymphatique mécanique par pressions d'air contrôlées. Stimule la circulation, détoxifie l'organisme et réduit la cellulite aqueuse pour une sensation de légèreté immédiate.",
    soins: [
      { name: 'Séance Drainage Corps', price: 'Sur devis', duration: '45 min' },
      { name: 'Programme Jambes Légères', price: 'Sur devis', duration: '45 min' },
    ],
    benefits: ['Drainage lymphatique efficace', 'Jambes légères & décongestionnées', 'Réduction cellulite aqueuse', 'Détoxification profonde'],
    headerBg: 'bg-teal-600',
    borderColor: 'border-teal-200',
    badge: 'Détox',
  },
  {
    icon: '🎯',
    name: 'Soin Minceur ERIS – Lipo Cavitation 9-en-1',
    subtitle: 'Cavitation + Radiofréquence + Vacuum + Laser',
    desc: "Combine cavitation ultrasonique 40kHz, radiofréquence multipolaire, lipo laser et vacuum thérapie. Détruit les cellules graisseuses et favorise leur élimination naturelle.",
    soins: [
      { name: 'Cavitation Ultrasonique – Remodelage & Perte de cm', price: 'Sur devis', duration: '30-40 min' },
      { name: 'Radiofréquence Visage – Lifting Naturel', price: 'Sur devis', duration: '30-40 min' },
      { name: 'Radiofréquence Corps – Raffermissement', price: 'Sur devis', duration: '30-45 min' },
      { name: 'Lipolaser – Déstockage Doux & Progressif', price: 'Sur devis', duration: '30-40 min' },
      { name: 'Vacuum Thérapie – Anti-Cellulite', price: 'Sur devis', duration: '20-30 min' },
    ],
    benefits: ['Réduction graisses localisées', 'Affinement de la silhouette', 'Diminution de la cellulite', 'Visible dès la 1ère séance'],
    headerBg: 'bg-rose-600',
    borderColor: 'border-rose-200',
    badge: 'Minceur',
  },
]

const autresSoins = [
  {
    category: 'Massages',
    icon: '🤲',
    bg: 'bg-green-50 border-green-200',
    items: ['Massage Tonifiant – Énergie & Vitalité (45-60 min)', 'Massage Relaxant – Sérénité & Bien-être (45-75 min)', 'Massage aux Pierres Chaudes – Chaleur & Harmonie (60 min)'],
  },
  {
    category: 'Épilation & Gommage',
    icon: '✨',
    bg: 'bg-pink-50 border-pink-200',
    items: ['Gommage Corps – Éclat de Peau (30-45 min)', 'Épilation à la Cire – Corps complet (15-45 min)', 'Épilation Cire – Zone ciblée (10-30 min)', 'Lumière Pulsée IPL – Corps (15-60 min)'],
  },
  {
    category: 'Manucure & Pédicure',
    icon: '💅',
    bg: 'bg-purple-50 border-purple-200',
    items: ['Manucure Classique (30-45 min)', 'Manucure Spa (45-60 min)', 'Semi-Permanent (45-60 min)', 'Résine Acrylique (1h30-2h)', 'Gel – Longue Durée (1h-1h30)', 'Pédicure Classique (45-60 min)', 'Soin Paraffine Mains & Pieds (30-45 min)'],
  },
  {
    category: 'Blanchiment Dentaire',
    icon: '🦷',
    bg: 'bg-blue-50 border-blue-200',
    items: ['Blanchiment LED Professionnel', 'Résultat visible dès la 1ère séance', 'Jusqu\'à 9 teintes gagnées', 'Méthode non invasive & sans douleur'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#f0f7f3]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#3d6e4f]">Soins & Technologies</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2520] mt-3 mb-4">
            Nos Machines & Soins High-Tech
          </h2>
          <div className="w-16 h-1 bg-[#3d6e4f] mx-auto rounded-full mb-6" />
          <p className="text-[#4a5c52] text-lg max-w-2xl mx-auto">
            Des équipements haut de gamme de dernière génération, conçus par des experts internationaux de la santé, de l'esthétique et du bien-être.
          </p>
        </div>

        {/* Machine cards */}
        <div className="space-y-6 mb-20">
          {machines.map(m => (
            <div key={m.name} className={`bg-white rounded-3xl border ${m.borderColor} shadow-md overflow-hidden hover:shadow-xl transition-shadow`}>
              {/* Colored header band */}
              <div className={`${m.headerBg} px-8 py-5 flex items-center justify-between`}>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{m.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{m.name}</h3>
                    <p className="text-white/80 text-sm">{m.subtitle}</p>
                  </div>
                </div>
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/30">
                  {m.badge}
                </span>
              </div>

              {/* Body */}
              <div className="p-8">
                <p className="text-[#4a5c52] leading-relaxed mb-8">{m.desc}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Soins */}
                  <div>
                    <h4 className="font-bold text-[#1a2520] mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-[#3d6e4f] rounded-full inline-block"></span>
                      Soins disponibles
                    </h4>
                    <div className="space-y-2.5">
                      {m.soins.map(s => (
                        <div key={s.name} className="flex items-center justify-between bg-[#f8fbf9] border border-[#d4e6da] rounded-xl px-4 py-3">
                          <span className="text-[#1a2520] text-sm font-medium pr-4">{s.name}</span>
                          <div className="text-right flex-shrink-0">
                            <p className="text-[#3d6e4f] font-bold text-sm">{s.price}</p>
                            <p className="text-[#7a8f80] text-xs">{s.duration}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-bold text-[#1a2520] mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-[#c9a84c] rounded-full inline-block"></span>
                      Bienfaits
                    </h4>
                    <div className="space-y-3">
                      {m.benefits.map(b => (
                        <div key={b} className="flex items-center gap-3">
                          <span className="w-6 h-6 bg-[#edf5f0] rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-[#3d6e4f] text-xs font-bold">✓</span>
                          </span>
                          <span className="text-[#4a5c52] text-sm">{b}</span>
                        </div>
                      ))}
                    </div>
                    <a href="#booking" className="mt-6 inline-block bg-[#3d6e4f] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#2d5a3d] transition-colors shadow-sm">
                      Réserver ce soin →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Autres soins */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#3d6e4f]">Également disponibles</span>
          <h3 className="text-3xl font-bold text-[#1a2520] mt-2">Autres Soins & Services</h3>
          <div className="w-12 h-1 bg-[#c9a84c] mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {autresSoins.map(cat => (
            <div key={cat.category} className={`bg-white border ${cat.bg} rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow`}>
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h4 className="font-bold text-[#1a2520] mb-4 text-base">{cat.category}</h4>
              <ul className="space-y-2">
                {cat.items.map(item => (
                  <li key={item} className="text-[#4a5c52] text-sm flex items-start gap-2">
                    <span className="text-[#3d6e4f] font-bold mt-0.5 flex-shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#booking" className="mt-5 block text-center text-[#3d6e4f] text-sm font-bold hover:underline">
                Réserver →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
