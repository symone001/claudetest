const values = [
  { icon: '🌿', title: 'Authenticité', desc: "Nos soins associent ingrédients naturels purs et technologies de pointe pour révéler une peau saine, éclatante et durable." },
  { icon: '🌍', title: 'Responsabilité', desc: "Nous sélectionnons des ingrédients biologiques issus de sources durables, avec un impact minimal sur l'environnement." },
  { icon: '🔬', title: 'Innovation & Tradition', desc: "CharmBio marie les recettes naturelles ancestrales avec les dernières avancées scientifiques et technologiques." },
  { icon: '⚖️', title: 'Bien-être & Équilibre', desc: "Nos soins restaurent l'équilibre naturel de la peau et procurent une expérience de détente inégalée." },
  { icon: '💎', title: 'Excellence', desc: "Produits naturels de qualité supérieure, technologies certifiées et soins personnalisés pour des résultats visibles et durables." },
  { icon: '🤝', title: 'Éthique & Transparence', desc: "Nous garantissons une transparence totale sur les ingrédients, méthodes et technologies utilisées." },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <span className="text-[#4a7c59] font-semibold text-sm uppercase tracking-widest">Notre Histoire</span>
            <h2 className="text-4xl font-bold text-[#2d3d2e] mt-3 mb-6 leading-tight">
              Née d'une passion<br />pour la beauté authentique
            </h2>
            <p className="text-[#5c4a3a] text-lg leading-relaxed mb-5">
              L'histoire de CharmBio commence par une expérience personnelle de lutte contre les problèmes de peau dès l'adolescence. Confrontée à des boutons récurrents et à une peau complexe, la fondatrice a traversé des années de frustration, cherchant une solution pour retrouver une peau saine et éclatante.
            </p>
            <p className="text-[#5c4a3a] text-lg leading-relaxed mb-5">
              Au fil du temps, elle a découvert les recettes maison inspirées par la nature, qui ont commencé à transformer sa peau. Ces solutions naturelles, associées à la rigueur scientifique et à l'utilisation de machines certifiées par des laboratoires internationaux, ont permis des résultats précis et durables.
            </p>
            <p className="text-[#5c4a3a] text-lg leading-relaxed mb-8">
              Ce cheminement personnel a conduit à la naissance de <strong>CharmBio Institut Bien-être - Santé - Beauté</strong>, une marque qui propose des solutions naturelles et technologiques pour révéler la beauté de chaque peau.
            </p>
            <div className="bg-[#e8f0e9] rounded-2xl p-6 border-l-4 border-[#4a7c59]">
              <p className="text-[#2d3d2e] font-semibold italic text-lg">
                "Révélez naturellement la beauté de votre corps."
              </p>
              <p className="text-[#7a6a5a] text-sm mt-2">— Notre mission</p>
            </div>
          </div>

          <div>
            <span className="text-[#4a7c59] font-semibold text-sm uppercase tracking-widest">Notre Mission</span>
            <h3 className="text-2xl font-bold text-[#2d3d2e] mt-3 mb-5">
              Révolutionner l'expérience beauté
            </h3>
            <p className="text-[#5c4a3a] leading-relaxed mb-6">
              La mission de CharmBio est de révolutionner l'expérience beauté en offrant des soins adaptés aux besoins spécifiques de chaque peau, combinant efficacité naturelle et technologies de pointe. Nous aidons chacun à retrouver la beauté naturelle de sa peau grâce à des ingrédients naturels, sains et puissants, ainsi que des appareils certifiés issus des meilleurs laboratoires du monde.
            </p>
            <div className="space-y-3">
              {[
                "Soins personnalisés selon votre type de peau",
                "Machines haute technologie certifiées",
                "Produits naturels et biologiques",
                "Résultats visibles dès la première séance",
                "Accompagnement et conseils beauté sur mesure",
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[#4a7c59] font-bold mt-0.5">✓</span>
                  <p className="text-[#5c4a3a]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#2d3d2e]">Nos Valeurs</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(v => (
            <div key={v.title} className="bg-[#f5f0e8] rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h4 className="font-bold text-[#2d3d2e] mb-2">{v.title}</h4>
              <p className="text-[#5c4a3a] text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
