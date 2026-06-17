const values = [
  { icon: '🌿', title: 'Authenticité', desc: "Ingrédients naturels purs et technologies de pointe pour une peau saine, éclatante et durable." },
  { icon: '🌍', title: 'Responsabilité', desc: "Ingrédients biologiques issus de sources durables, impact minimal sur l'environnement." },
  { icon: '🔬', title: 'Innovation & Tradition', desc: "Recettes naturelles ancestrales alliées aux dernières avancées scientifiques et technologiques." },
  { icon: '⚖️', title: 'Bien-être & Équilibre', desc: "Soins qui restaurent l'équilibre naturel de la peau et procurent une détente inégalée." },
  { icon: '💎', title: 'Excellence', desc: "Produits de qualité supérieure, technologies certifiées et soins personnalisés pour des résultats durables." },
  { icon: '🤝', title: 'Éthique & Transparence', desc: "Transparence totale sur les ingrédients, méthodes et technologies utilisées." },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#3d6e4f]">Notre Histoire</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2520] mt-3 mb-4">
            Née d'une passion pour<br />la beauté authentique
          </h2>
          <div className="w-16 h-1 bg-[#3d6e4f] mx-auto rounded-full" />
        </div>

        {/* Story + Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-5">
            <p className="text-[#4a5c52] text-lg leading-relaxed">
              L'histoire de CharmBio commence par une expérience personnelle de lutte contre les problèmes de peau dès l'adolescence. Confrontée à des boutons récurrents et à une peau complexe, la fondatrice a traversé des années de frustration, cherchant une solution pour retrouver une peau saine et éclatante.
            </p>
            <p className="text-[#4a5c52] text-lg leading-relaxed">
              Au fil du temps, elle a découvert les recettes maison inspirées par la nature. Ces solutions naturelles, combinées à des machines certifiées par des laboratoires internationaux, ont permis des résultats précis et durables.
            </p>
            <p className="text-[#4a5c52] text-lg leading-relaxed">
              Ce cheminement personnel a conduit à la naissance de <strong className="text-[#1a2520]">CharmBio Institut Bien-être - Santé - Beauté</strong>.
            </p>
            <blockquote className="border-l-4 border-[#c9a84c] pl-6 py-2 bg-[#fdf9f0] rounded-r-xl">
              <p className="text-[#1a2520] font-semibold italic text-lg">
                "Révélez naturellement la beauté de votre corps."
              </p>
              <p className="text-[#7a8f80] text-sm mt-2">— La fondatrice de CharmBio</p>
            </blockquote>
          </div>

          <div className="bg-[#edf5f0] rounded-3xl p-8">
            <h3 className="text-xl font-bold text-[#1a2520] mb-6">Notre Mission</h3>
            <p className="text-[#4a5c52] leading-relaxed mb-6">
              Révolutionner l'expérience beauté en offrant des soins adaptés aux besoins spécifiques de chaque peau, combinant efficacité naturelle et technologies de pointe.
            </p>
            <div className="space-y-4">
              {[
                "Soins personnalisés selon votre type de peau",
                "Machines haute technologie certifiées",
                "Produits 100% naturels et biologiques",
                "Résultats visibles dès la première séance",
                "Accompagnement et conseils beauté sur mesure",
                "Diagnostic de peau gratuit à la 1ère visite",
              ].map(item => (
                <div key={item} className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                  <span className="w-5 h-5 bg-[#3d6e4f] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </span>
                  <p className="text-[#1a2520] font-medium text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#3d6e4f]">Ce en quoi nous croyons</span>
          <h3 className="text-3xl font-bold text-[#1a2520] mt-2">Nos Valeurs</h3>
          <div className="w-12 h-1 bg-[#c9a84c] mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map(v => (
            <div key={v.title} className="bg-[#faf7f2] border border-[#e8e0d4] rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h4 className="font-bold text-[#1a2520] mb-2 text-lg">{v.title}</h4>
              <p className="text-[#4a5c52] text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
