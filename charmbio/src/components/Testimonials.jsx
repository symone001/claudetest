const reviews = [
  {
    name: 'Aminata K.',
    rating: 5,
    text: "La machine Illustria 448 kHz est incroyable ! Après 4 séances Body Detox & Sculpt, j'ai perdu plusieurs centimètres de tour de taille. L'équipe est professionnelle et le cadre est apaisant.",
    soin: 'Illustria 448 kHz',
    avatar: '👩🏾',
    bg: 'bg-amber-50 border-amber-200',
  },
  {
    name: 'Cécile M.',
    rating: 5,
    text: "Le soin Hydra Anti-Âge Glow m'a transformé la peau ! En une séance, mon visage était repulpé et lumineux. Le Perfect Shape NEO donne vraiment un effet lifting naturel impressionnant.",
    soin: 'Hydra Spa 18-en-1',
    avatar: '👩🏽',
    bg: 'bg-blue-50 border-blue-200',
  },
  {
    name: 'Sandrine B.',
    rating: 5,
    text: "J'ai fait le Pack Silhouette Divine pour préparer mon mariage. Résultat spectaculaire ! La combinaison Perfect Shape + Pressothérapie a affiné ma silhouette de façon visible. Merci CharmBio !",
    soin: 'Pack Silhouette Divine',
    avatar: '👩🏿',
    bg: 'bg-pink-50 border-pink-200',
  },
  {
    name: 'Fatou D.',
    rating: 5,
    text: "Le combo Jambes Légères m'a sauvée ! Je souffre de jambes lourdes depuis des années. Après 3 séances de pressothérapie, je me sens légère comme une plume. Je recommande vivement !",
    soin: 'Pressothérapie',
    avatar: '👩🏾‍🦱',
    bg: 'bg-green-50 border-green-200',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#3d6e4f]">Témoignages</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2520] mt-3 mb-4">
            Ce que disent nos clientes
          </h2>
          <div className="w-16 h-1 bg-[#3d6e4f] mx-auto rounded-full mb-6" />
          <p className="text-[#4a5c52] text-lg">La satisfaction de nos clientes est notre plus belle récompense.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reviews.map(r => (
            <div key={r.name} className={`rounded-2xl border-2 p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 ${r.bg}`}>
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.rating }).map((_, i) => <span key={i} className="text-[#f59e0b] text-xl">★</span>)}
              </div>
              <p className="text-[#1a2520] leading-relaxed mb-6 text-base italic">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm">{r.avatar}</div>
                  <p className="font-bold text-[#1a2520]">{r.name}</p>
                </div>
                <span className="text-xs bg-[#3d6e4f] text-white px-3 py-1.5 rounded-full font-semibold">{r.soin}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="bg-[#edf5f0] rounded-3xl p-10 max-w-sm mx-auto text-center border border-[#d4e6da] shadow-sm">
          <p className="text-6xl font-bold text-[#3d6e4f]">4.9<span className="text-3xl">/5</span></p>
          <div className="flex justify-center gap-1 my-3">
            {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-[#f59e0b] text-2xl">★</span>)}
          </div>
          <p className="text-[#4a5c52] font-medium">Basé sur 127 avis clients</p>
        </div>
      </div>
    </section>
  )
}
