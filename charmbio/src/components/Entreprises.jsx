const packEntreprises = [
  {
    name: 'Pack Vitalité Posturale',
    price: '180 000 FCFA',
    period: '/ 2 personnes / mois',
    goal: 'Corriger les tensions & améliorer la posture',
    desc: 'Idéal pour corriger et soulager les tensions dues aux longues heures de bureau.',
    inclus: [
      '2 séances Illustria 448 kHz (décontraction musculaire profonde)',
      '1 massage thérapeutique ciblé dos & nuque',
      'Conseils personnalisés sur la posture au travail',
    ],
    color: 'border-amber-300 bg-amber-50',
    tag: 'Posture',
  },
  {
    name: "Pack Énergie Durable",
    price: '200 000 FCFA',
    period: '/ 2 personnes / mois',
    goal: "Booster l'énergie et réduire la fatigue",
    desc: 'Pour booster la concentration et réduire la fatigue chronique.',
    inclus: [
      '2 séances de cryothérapie corps entier (activation circulation & énergie)',
      '1 soin Perfect Shape® NEO',
      'Coaching express : alimentation & micro-siestes efficaces',
    ],
    color: 'border-blue-300 bg-blue-50',
    tag: 'Énergie',
  },
  {
    name: 'Pack Performance Globale',
    price: '300 000 FCFA',
    period: '/ 2 personnes / mois',
    goal: 'Optimisation du corps & métabolisme',
    desc: 'Programme complet santé, posture et énergie. Équilibre physique et mental, prévention stress.',
    inclus: [
      '2 séances Perfect Shape® NEO',
      '2 séances Illustria 448 kHz',
      '1 massage thérapeutique décontractant',
    ],
    color: 'border-purple-300 bg-purple-50',
    tag: '⭐ Premium',
  },
  {
    name: 'Combo Anti-Stress & Récupération Express',
    price: '160 000 FCFA',
    period: '/ 2 personnes / mois',
    goal: 'Réduire le stress & optimiser la récupération',
    desc: 'Réduire le stress, soulager les tensions physiques, optimiser la récupération mentale et physique.',
    inclus: [
      '2 séances de pressothérapie',
      '2 séances Illustria 448 kHz',
      '2 séances massages tonifiants',
    ],
    color: 'border-green-300 bg-green-50',
    tag: 'Anti-Stress',
  },
]

export default function Entreprises() {
  return (
    <section id="entreprises" className="py-24 bg-[#2d3d2e] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <span className="text-[#7db88a] font-semibold text-sm uppercase tracking-widest">Offre B2B</span>
          <h2 className="text-4xl font-bold mt-3 mb-4 text-white">
            CharmBio pour les Entreprises
          </h2>
          <p className="text-[#b5c9b8] text-lg max-w-2xl mx-auto">
            Santé, Posture & Énergie pour Cadres et Managers
          </p>
        </div>

        {/* Avantages */}
        <div className="bg-[#3a5040] rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-6 text-[#a8d5b5]">Pourquoi c'est stratégique pour votre entreprise ?</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '📉', title: "Moins d'absentéisme", desc: 'Prévention des douleurs chroniques (nuque, dos, épaules).' },
              { icon: '⚡', title: 'Plus de productivité', desc: "Regain d'énergie et meilleure concentration." },
              { icon: '🏆', title: 'Image Premium', desc: "Vos talents profitent d'un avantage exclusif valorisant." },
            ].map(a => (
              <div key={a.title} className="text-center">
                <div className="text-4xl mb-2">{a.icon}</div>
                <h4 className="font-bold text-white mb-1">{a.title}</h4>
                <p className="text-[#b5c9b8] text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-[#4a6550] text-center">
            <p className="text-[#7db88a] font-semibold text-lg">
              🎁 15% de remise dès 10 managers inscrits + Intervention sur site incluse
            </p>
          </div>
        </div>

        {/* Packs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packEntreprises.map(p => (
            <div key={p.name} className={`rounded-2xl border-2 p-6 ${p.color} text-[#2d3d2e] hover:shadow-xl transition-all hover:-translate-y-1`}>
              <span className="text-xs bg-[#2d3d2e] text-white px-3 py-1 rounded-full font-bold">{p.tag}</span>
              <h3 className="text-lg font-bold mt-3 mb-1">{p.name}</h3>
              <p className="text-[#4a7c59] font-bold text-2xl">{p.price}</p>
              <p className="text-[#7a6a5a] text-xs mb-3">{p.period}</p>
              <p className="text-sm font-semibold text-[#2d3d2e] mb-1 italic">"{p.goal}"</p>
              <p className="text-[#5c4a3a] text-xs mb-4">{p.desc}</p>
              <div className="space-y-1.5">
                {p.inclus.map(i => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#3d3028]">
                    <span className="text-[#4a7c59] font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{i}</span>
                  </div>
                ))}
              </div>
              <a href="#booking" className="mt-5 block text-center bg-[#2d3d2e] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#4a7c59] transition-colors">
                Demander un devis
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#b5c9b8] mb-4">Vous souhaitez un programme personnalisé pour votre entreprise ?</p>
          <a href="#booking" className="inline-block bg-[#4a7c59] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#5d9b70] transition-colors shadow-lg">
            Contactez-nous pour un devis sur mesure
          </a>
        </div>
      </div>
    </section>
  )
}
