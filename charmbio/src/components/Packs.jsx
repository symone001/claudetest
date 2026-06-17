const packs = [
  {
    name: 'Pack Renaissance Éternelle',
    subtitle: 'Anti-Âge & Raffermissement',
    goal: 'Lisser rides et ridules, raffermir les contours et redonner éclat et vitalité au visage.',
    machines: 'Perfect Shape R NEO + Illustria 448 kHz + Hydra Spa 18-en-1',
    seances: '6 séances Perfect Shape NEO + 4 séances Illustria + 2 soins Hydra Spa Visage',
    bonus: 'Sérum anti-âge + 2 séances massage au choix',
    cible: 'Femmes et hommes à partir de 35 ans souhaitant préserver ou restaurer la jeunesse de leur peau.',
    price: 'Prix Premium',
    headerBg: 'bg-gradient-to-r from-purple-600 to-purple-800',
    tag: 'Anti-Âge',
  },
  {
    name: 'Silhouette Divine',
    subtitle: 'Minceur & Remodelage',
    goal: 'Affiner la silhouette et remodeler le corps pour une apparence tonique et harmonieuse.',
    machines: 'Perfect Shape R NEO + Pressothérapie / Drainage',
    seances: '7 séances Perfect Shape NEO + 4 séances de drainage',
    bonus: 'Programme nutritionnel minceur (WhatsApp) + Suivi photos minceur',
    cible: 'Femmes et hommes souhaitant perdre des centimètres et retrouver une silhouette élancée.',
    price: 'Prix Premium',
    headerBg: 'bg-gradient-to-r from-rose-500 to-rose-700',
    tag: 'Minceur',
  },
  {
    name: 'Éclat de Lune',
    subtitle: 'Peau Parfaite Glow',
    goal: 'Sublimer et illuminer la peau pour un teint éclatant, uniforme et parfaitement hydraté.',
    machines: 'Hydra Spa 18-en-1 + Perfect Shape R NEO + LED Thérapie',
    seances: '3 soins Hydra Spa + 2 séances Illustria + 2 séances LED Thérapie',
    bonus: 'Masque hydratant offert',
    cible: 'Femmes et hommes souhaitant raviver l\'éclat naturel de leur peau.',
    price: 'Prix Moyen-Haut',
    headerBg: 'bg-gradient-to-r from-amber-500 to-amber-600',
    tag: 'Glow ✨',
  },
  {
    name: "L'Essence du Mariage",
    subtitle: 'Préparation Mariée',
    goal: 'Préparer la peau et le corps de la mariée pour un éclat parfait le jour J.',
    machines: 'Hydra Spa 18-en-1 + Perfect Shape R NEO + LED Thérapie',
    seances: '4 soins Hydra Spa + 4 séances Illustria + 2 séances LED Thérapie',
    bonus: 'Massage détente offert + 1 soin onglerie au choix',
    cible: 'Femmes fiancées souhaitant rayonner pour leur cérémonie.',
    price: 'Prix Événementiel',
    headerBg: 'bg-gradient-to-r from-pink-500 to-pink-700',
    tag: 'Mariage 💍',
  },
  {
    name: 'Première Rencontre',
    subtitle: 'Découverte Machine',
    goal: 'Découvrir et tester les bienfaits des machines haut de gamme.',
    machines: 'Hydra Spa 18-en-1 + Perfect Shape R NEO + Illustria 448 kHz',
    seances: '1 soin Hydra Spa + 1 séance Illustria + 1 séance Perfect Shape NEO',
    bonus: 'Soin cuir chevelu offert',
    cible: 'Toute personne curieuse souhaitant expérimenter les soins innovants avant de choisir un programme.',
    price: 'Prix Accessible',
    headerBg: 'bg-gradient-to-r from-[#3d6e4f] to-[#2d5a3d]',
    tag: 'Découverte',
  },
]

const combos = [
  {
    name: 'Combo Jambes Légères & Drainage Express',
    machines: 'Pressothérapie + Vacuum Thérapie',
    seances: '3-4 séances pressothérapie + 2-3 séances vacuum thérapie',
    bonus: '1 séance gommage jambes offerte',
    cible: 'Personnes sujettes à la fatigue des jambes, sportives en récupération.',
  },
  {
    name: 'Combo Silhouette Affinée & Peau Tonique',
    machines: 'Cavitation Ultrason + Radiofréquence + Vacuum Thérapie',
    seances: '4-6 séances cavitation + 4-6 séances RF + 3-4 séances vacuum',
    bonus: '1 séance pressothérapie offerte',
    cible: 'Personnes souhaitant sculpter leur silhouette après perte de poids ou post-grossesse.',
  },
  {
    name: 'Combo Éclat Visage & Anti-Âge Intensif',
    machines: 'Hydra Spa 18-en-1 + Radiofréquence Faciale',
    seances: '3-4 soins Hydra Spa + 4-6 séances radiofréquence visage',
    bonus: '1 gamme de soins selon type de peau',
    cible: 'Femmes et hommes souhaitant rajeunir visiblement leur peau.',
  },
  {
    name: 'Combo Peau Lisse & Sans Imperfections',
    machines: 'Lumière Pulsée + Hydra Glow',
    seances: '4-6 séances lumière pulsée + 2-3 séances Hydra Glow',
    bonus: 'Soin apaisant post-épilation offert',
    cible: 'Hommes et femmes recherchant une épilation durable et une peau douce.',
  },
]

export default function Packs() {
  return (
    <section id="packs" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#3d6e4f]">Programmes personnalisés</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2520] mt-3 mb-4">
            Nos Packs & Combos
          </h2>
          <div className="w-16 h-1 bg-[#3d6e4f] mx-auto rounded-full mb-6" />
          <p className="text-[#4a5c52] text-lg max-w-xl mx-auto">
            Des programmes complets et sur-mesure pour atteindre vos objectifs beauté et bien-être.
          </p>
        </div>

        {/* Pack cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {packs.map(p => (
            <div key={p.name} className="bg-white rounded-3xl border border-[#d4e6da] shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
              {/* Header band */}
              <div className={`${p.headerBg} px-6 py-5`}>
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">{p.tag}</span>
                <h3 className="text-lg font-bold text-white mt-2">{p.name}</h3>
                <p className="text-white/80 text-sm">{p.subtitle}</p>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <p className="text-[#4a5c52] text-sm italic border-l-2 border-[#c9a84c] pl-3">"{p.goal}"</p>

                <div className="space-y-3 text-sm">
                  <div className="bg-[#f8fbf9] rounded-xl p-3">
                    <p className="text-xs font-bold text-[#3d6e4f] uppercase tracking-wide mb-1">🔬 Machines</p>
                    <p className="text-[#1a2520]">{p.machines}</p>
                  </div>
                  <div className="bg-[#f8fbf9] rounded-xl p-3">
                    <p className="text-xs font-bold text-[#3d6e4f] uppercase tracking-wide mb-1">📅 Séances incluses</p>
                    <p className="text-[#1a2520]">{p.seances}</p>
                  </div>
                  <div className="bg-[#fdf9f0] border border-[#c9a84c]/30 rounded-xl p-3">
                    <p className="text-xs font-bold text-[#c9a84c] uppercase tracking-wide mb-1">🎁 Bonus offerts</p>
                    <p className="text-[#1a2520] font-medium">{p.bonus}</p>
                  </div>
                </div>

                <p className="text-xs text-[#7a8f80]">👤 {p.cible}</p>

                <div className="flex items-center justify-between pt-2 border-t border-[#e8f0e8]">
                  <span className="font-bold text-[#3d6e4f] text-sm">{p.price}</span>
                  <a href="#booking" className="bg-[#3d6e4f] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#2d5a3d] transition-colors shadow-sm">
                    Réserver
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Combos */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#3d6e4f]">Solutions ciblées</span>
          <h3 className="text-3xl font-bold text-[#1a2520] mt-2">Combos Express</h3>
          <div className="w-12 h-1 bg-[#c9a84c] mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {combos.map(c => (
            <div key={c.name} className="bg-[#f0f7f3] border border-[#d4e6da] rounded-2xl p-6 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#1a2520] mb-2 text-base">{c.name}</h4>
              <p className="text-[#3d6e4f] text-sm font-semibold mb-2">🔬 {c.machines}</p>
              <p className="text-[#4a5c52] text-sm mb-2">📅 {c.seances}</p>
              <p className="text-[#c9a84c] text-sm font-semibold mb-3">🎁 {c.bonus}</p>
              <p className="text-xs text-[#7a8f80] mb-4">👤 {c.cible}</p>
              <a href="#booking" className="inline-block bg-white border border-[#3d6e4f] text-[#3d6e4f] px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#3d6e4f] hover:text-white transition-all">
                Réserver ce combo →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
