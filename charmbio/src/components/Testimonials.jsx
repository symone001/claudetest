const reviews = [
  {
    name: 'Aminata K.',
    rating: 5,
    text: "La machine Illustria 448 kHz est incroyable ! Après 4 séances Body Detox & Sculpt, j'ai perdu plusieurs centimètres de tour de taille. L'équipe est professionnelle et le cadre est apaisant.",
    soin: 'Illustria 448 kHz',
    avatar: '👩🏾',
  },
  {
    name: 'Cécile M.',
    rating: 5,
    text: "Le soin Hydra Anti-Âge Glow m'a transformé la peau ! En une séance, mon visage était repulpé et lumineux. Le Perfect Shape NEO pour le visage donne vraiment un effet lifting naturel.",
    soin: 'Hydra Spa 18-en-1',
    avatar: '👩🏽',
  },
  {
    name: 'Sandrine B.',
    rating: 5,
    text: "J'ai fait le Pack Silhouette Divine pour préparer mon mariage. Résultat spectaculaire ! La combinaison Perfect Shape + Pressothérapie a affiné ma silhouette de façon visible. Merci CharmBio !",
    soin: 'Pack Silhouette Divine',
    avatar: '👩🏿',
  },
  {
    name: 'Fatou D.',
    rating: 5,
    text: "Le combo Jambes Légères m'a sauvée ! Je souffre de jambes lourdes depuis des années. Après 3 séances de pressothérapie, je me sens légère comme une plume. Je recommande vivement !",
    soin: 'Pressothérapie',
    avatar: '👩🏾‍🦱',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#e8f0e9]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#4a7c59] font-semibold text-sm uppercase tracking-widest">Témoignages</span>
          <h2 className="text-4xl font-bold text-[#2d3d2e] mt-3 mb-4">
            Ce que disent nos clientes
          </h2>
          <p className="text-[#5c4a3a] text-lg">La satisfaction de nos clientes est notre plus belle récompense.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reviews.map(r => (
            <div key={r.name} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => <span key={i} className="text-[#f59e0b] text-xl">★</span>)}
              </div>
              <p className="text-[#5c4a3a] leading-relaxed mb-6 italic">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#e8f0e9] rounded-full flex items-center justify-center text-2xl">{r.avatar}</div>
                  <p className="font-bold text-[#2d3d2e]">{r.name}</p>
                </div>
                <span className="text-xs bg-[#4a7c59]/10 text-[#4a7c59] px-3 py-1 rounded-full font-medium">{r.soin}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white rounded-2xl p-8 max-w-sm mx-auto shadow-sm">
          <p className="text-5xl font-bold text-[#4a7c59]">4.9/5</p>
          <div className="flex justify-center gap-1 my-2">
            {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-[#f59e0b] text-2xl">★</span>)}
          </div>
          <p className="text-[#5c4a3a] text-sm">Basé sur 127 avis clients</p>
        </div>
      </div>
    </section>
  )
}
