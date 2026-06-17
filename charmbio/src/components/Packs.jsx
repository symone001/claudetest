const packs = [
  {
    name: 'Pack Renaissance Éternelle',
    subtitle: 'Anti-Âge & Raffermissement',
    goal: 'Lisser rides et ridules, raffermir les contours et redonner éclat et vitalité au visage.',
    machines: 'Perfect Shape R NEO + Illustria 448 kHz + Hydra Spa 18-en-1',
    seances: '6 séances Perfect Shape NEO + 4 séances Illustria + 2 soins Hydra Spa Visage',
    bonus: 'Sérum anti-âge + 2 séances massage de votre choix',
    cible: 'Femmes et hommes à partir de 35 ans souhaitant préserver ou restaurer la jeunesse de leur peau.',
    price: 'Prix Premium',
    tag: 'Anti-Âge',
    tagColor: 'bg-purple-500',
    color: 'border-purple-200 bg-purple-50',
  },
  {
    name: 'Silhouette Divine',
    subtitle: 'Minceur & Remodelage',
    goal: 'Affiner la silhouette et remodeler le corps pour une apparence tonique et harmonieuse.',
    machines: 'Perfect Shape R NEO + Pressothérapie / Drainage',
    seances: '7 séances Perfect Shape NEO + 4 séances de drainage',
    bonus: 'Programme nutritionnel minceur (WhatsApp) + Suivi photos minceur',
    cible: 'Femmes et hommes souhaitant perdre des centimètres, tonifier leur corps et retrouver une silhouette élancée.',
    price: 'Prix Premium',
    tag: 'Minceur',
    tagColor: 'bg-rose-500',
    color: 'border-rose-200 bg-rose-50',
  },
  {
    name: 'Éclat de Lune',
    subtitle: 'Peau Parfaite Glow',
    goal: 'Sublimer et illuminer la peau pour un teint éclatant, uniforme et parfaitement hydraté.',
    machines: 'Hydra Spa 18-en-1 + Perfect Shape R NEO + LED Thérapie',
    seances: '3 soins Hydra Spa + 2 séances Illustria + 2 séances LED Thérapie',
    bonus: 'Masque hydratant offert',
    cible: 'Femmes et hommes souhaitant raviver l\'éclat naturel de leur peau et corriger les imperfections.',
    price: 'Prix Moyen-Haut',
    tag: 'Glow',
    tagColor: 'bg-amber-500',
    color: 'border-amber-200 bg-amber-50',
  },
  {
    name: "L'Essence du Mariage",
    subtitle: 'Préparation Mariée',
    goal: 'Préparer la peau et le corps de la mariée pour un éclat parfait et une silhouette harmonieuse le jour J.',
    machines: 'Hydra Spa 18-en-1 + Perfect Shape R NEO + LED Thérapie',
    seances: '4 soins Hydra Spa + 4 séances Illustria + 2 séances LED Thérapie',
    bonus: 'Massage détente offert + 1 soin onglerie au choix',
    cible: 'Femmes fiancées ou en préparation de mariage souhaitant rayonner pour leur cérémonie.',
    price: 'Prix Premium Événementiel',
    tag: 'Mariage',
    tagColor: 'bg-pink-500',
    color: 'border-pink-200 bg-pink-50',
  },
  {
    name: 'Première Rencontre',
    subtitle: 'Découverte Machine',
    goal: 'Découvrir et tester les bienfaits des machines haut de gamme pour le bien-être et la beauté.',
    machines: 'Hydra Spa 18-en-1 + Perfect Shape R NEO + Illustria 448 kHz',
    seances: '1 soin Hydra Spa + 1 séance Illustria + 1 séance Perfect Shape NEO',
    bonus: 'Soin cuir chevelu offert',
    cible: 'Toute personne curieuse souhaitant expérimenter les soins innovants avant de choisir un programme complet.',
    price: 'Prix Accessible',
    tag: 'Découverte',
    tagColor: 'bg-[#4a7c59]',
    color: 'border-green-200 bg-green-50',
  },
]

const combos = [
  {
    name: 'Combo Jambes Légères & Drainage Express',
    machines: 'Pressothérapie + Vacuum Thérapie',
    seances: '3 à 4 séances pressothérapie + 2 à 3 séances vacuum thérapie',
    bonus: '1 séance de gommage jambes offerte',
    cible: 'Personnes sujettes à la fatigue des jambes, femmes restant longtemps debout, sportives en récupération.',
  },
  {
    name: 'Combo Silhouette Affinée & Peau Tonique',
    machines: 'Cavitation Ultrason + Radiofréquence + Vacuum Thérapie',
    seances: '4 à 6 séances cavitation + 4 à 6 séances radiofréquence + 3 à 4 séances vacuum',
    bonus: '1 séance de pressothérapie offerte',
    cible: 'Personnes souhaitant sculpter leur silhouette après perte de poids ou post-grossesse.',
  },
  {
    name: 'Combo Éclat Visage & Anti-Âge Intensif',
    machines: 'Hydra Spa 18-en-1 + Radiofréquence Faciale',
    seances: '3 à 4 soins Hydra Spa + 4 à 6 séances radiofréquence visage',
    bonus: '1 gamme de soins selon la qualité de la peau',
    cible: 'Femmes et hommes souhaitant rajeunir visiblement leur peau, avant un événement ou pour un entretien régulier.',
  },
  {
    name: 'Combo Peau Lisse & Sans Imperfections',
    machines: 'Lumière Pulsée + Hydra Glow (nettoyage profond)',
    seances: '4 à 6 séances lumière pulsée + 2 à 3 séances Hydra Glow',
    bonus: 'Soin apaisant post-épilation offert',
    cible: 'Hommes et femmes recherchant une épilation durable et une peau douce.',
  },
]

export default function Packs() {
  return (
    <section id="packs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#4a7c59] font-semibold text-sm uppercase tracking-widest">Programmes personnalisés</span>
          <h2 className="text-4xl font-bold text-[#2d3d2e] mt-3 mb-4">
            Nos Packs & Combos
          </h2>
          <p className="text-[#5c4a3a] text-lg max-w-2xl mx-auto">
            Des programmes complets et sur-mesure pour atteindre vos objectifs beauté et bien-être.
          </p>
        </div>

        {/* Packs principaux */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packs.map(p => (
            <div key={p.name} className={`rounded-2xl border-2 p-6 ${p.color} shadow-sm hover:shadow-lg transition-all hover:-translate-y-1`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`text-xs text-white px-3 py-1 rounded-full font-bold ${p.tagColor}`}>{p.tag}</span>
                  <h3 className="text-xl font-bold text-[#2d3d2e] mt-2">{p.name}</h3>
                  <p className="text-[#7a6a5a] text-sm font-medium">{p.subtitle}</p>
                </div>
              </div>

              <p className="text-[#5c4a3a] text-sm leading-relaxed mb-4 italic">"{p.goal}"</p>

              <div className="space-y-3 mb-5 text-sm">
                <div>
                  <span className="font-semibold text-[#2d3d2e]">🔬 Machines :</span>
                  <p className="text-[#5c4a3a] mt-0.5">{p.machines}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#2d3d2e]">📅 Séances :</span>
                  <p className="text-[#5c4a3a] mt-0.5">{p.seances}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#2d3d2e]">🎁 Bonus :</span>
                  <p className="text-[#4a7c59] font-medium mt-0.5">{p.bonus}</p>
                </div>
              </div>

              <div className="border-t border-white/60 pt-4">
                <p className="text-xs text-[#7a6a5a] mb-3">👤 {p.cible}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#4a7c59] text-sm">{p.price}</span>
                  <a href="#booking" className="bg-[#4a7c59] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#3d6b4a] transition-colors">
                    Réserver
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Combos */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-[#2d3d2e]">Combos Express</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {combos.map(c => (
            <div key={c.name} className="bg-[#f5f0e8] rounded-2xl p-6 border border-[#e8e0d4] hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#2d3d2e] mb-1">{c.name}</h4>
              <p className="text-[#4a7c59] text-sm font-medium mb-3">🔬 {c.machines}</p>
              <p className="text-[#5c4a3a] text-sm mb-2">📅 {c.seances}</p>
              <p className="text-[#4a7c59] text-sm font-medium mb-3">🎁 {c.bonus}</p>
              <p className="text-xs text-[#7a6a5a] mb-4">👤 {c.cible}</p>
              <a href="#booking" className="inline-block bg-[#4a7c59]/10 text-[#4a7c59] px-5 py-2 rounded-xl text-sm font-semibold hover:bg-[#4a7c59] hover:text-white transition-all">
                Réserver ce combo →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
