import { useState } from 'react'

const serviceOptions = [
  '— Machines High-Tech —',
  'Illustria 448 kHz – Soin Visage GlowLift (25 000 XAF)',
  'Illustria 448 kHz – Body Detox & Sculpt (25 000 XAF)',
  'Illustria 448 kHz – Sculpt & Drain Fessiers/Cuisses (25 000 XAF)',
  'Illustria 448 kHz – Hair Vital Boost Cuir Chevelu (25 000 XAF)',
  'Hydra Spa 18-en-1 – Hydra Pur Glow',
  'Hydra Spa 18-en-1 – Hydra Anti-Âge Glow',
  'Hydra Spa 18-en-1 – Hydra Peau Sensible',
  'Hydra Spa 18-en-1 – Hydra Anti-Taches & Teint Éclat',
  'Perfect Shape R NEO – Perfect Face Lift',
  'Perfect Shape R NEO – Sculpt Ventre & Taille',
  'Perfect Shape R NEO – Booty Up Fessiers',
  'Perfect Shape R NEO – Mommy Reset (Post-Partum)',
  'Pressothérapie – Séance Drainage Corps',
  'Lipo Cavitation ERIS – Remodelage Silhouette',
  '— Massages —',
  'Massage Tonifiant – Énergie & Vitalité',
  'Massage Relaxant – Sérénité & Bien-être',
  'Massage Pierres Chaudes – Chaleur & Harmonie',
  '— Épilations —',
  'Gommage Corps',
  'Épilation Cire – Corps complet',
  'Épilation Cire – Zone ciblée',
  'Épilation Lumière Pulsée',
  '— Ongles —',
  'Manucure Classique',
  'Manucure Spa',
  'Semi-Permanent',
  'Résine (Acrylique)',
  'Gel – Brillance & Longue Durée',
  'Pédicure Classique',
  'Soin Paraffine – Mains & Pieds',
  '— Packs —',
  'Pack Renaissance Éternelle (Anti-Âge)',
  'Pack Silhouette Divine (Minceur)',
  "Pack Éclat de Lune (Glow)",
  "Pack L'Essence du Mariage",
  'Pack Première Rencontre (Découverte)',
  'Combo Jambes Légères & Drainage Express',
  'Combo Silhouette Affinée & Peau Tonique',
  '— Entreprises —',
  'Pack Entreprise – Vitalité Posturale',
  'Pack Entreprise – Énergie Durable',
  'Pack Entreprise – Performance Globale',
  'Combo Entreprise – Anti-Stress Express',
  'Blanchiment Dentaire LED',
]

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
]

export default function Booking() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', date: '', time: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputCls = "w-full border border-[#e8e0d4] rounded-xl px-4 py-3 bg-white text-[#2d3d2e] focus:outline-none focus:border-[#4a7c59] focus:ring-2 focus:ring-[#4a7c59]/20 transition-all"

  return (
    <section id="booking" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#4a7c59] font-semibold text-sm uppercase tracking-widest">Réservation en ligne</span>
          <h2 className="text-4xl font-bold text-[#2d3d2e] mt-3 mb-4">
            Prenez rendez-vous
          </h2>
          <p className="text-[#5c4a3a] text-lg">
            Réservez votre moment de bien-être en ligne, simple et rapide.
            Nous vous confirmons sous 24h.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#e8f0e9] border border-[#4a7c59]/30 rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">🌿</div>
            <h3 className="text-2xl font-bold text-[#2d3d2e] mb-3">Demande envoyée !</h3>
            <p className="text-[#5c4a3a] mb-2">
              Merci <strong>{form.name}</strong> ! Nous vous contacterons pour confirmer votre rendez-vous.
            </p>
            <p className="text-[#5c4a3a] mb-6 text-sm">Un email de confirmation vous sera envoyé à <strong>{form.email}</strong>.</p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' }) }}
              className="text-[#4a7c59] font-semibold underline"
            >
              Faire une nouvelle réservation
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e0d4] space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#2d3d2e] mb-2">Nom complet *</label>
                <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Marie Dupont" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2d3d2e] mb-2">Email *</label>
                <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="marie@email.com" className={inputCls} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#2d3d2e] mb-2">Téléphone *</label>
                <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+237 6XX XXX XXX" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2d3d2e] mb-2">Soin / Pack souhaité *</label>
                <select name="service" required value={form.service} onChange={handleChange} className={inputCls}>
                  <option value="">Choisir un soin...</option>
                  {serviceOptions.map(o => (
                    o.startsWith('—')
                      ? <option key={o} value="" disabled className="font-bold text-gray-400">{o}</option>
                      : <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#2d3d2e] mb-2">Date souhaitée *</label>
                <input type="date" name="date" required value={form.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2d3d2e] mb-2">Heure souhaitée *</label>
                <select name="time" required value={form.time} onChange={handleChange} className={inputCls}>
                  <option value="">Choisir une heure...</option>
                  {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2d3d2e] mb-2">Message ou précisions (optionnel)</label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="Précisez vos besoins, allergies, objectifs ou toute question..."
                rows={4} className={`${inputCls} resize-none`}
              />
            </div>

            <button type="submit" className="w-full bg-[#4a7c59] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#3d6b4a] transition-colors shadow-md hover:shadow-lg">
              Confirmer ma réservation 🌿
            </button>

            <p className="text-center text-xs text-[#7a6a5a]">
              Nous vous contacterons dans les 24h pour confirmer votre rendez-vous. Horaires : Lun-Sam 09h00–18h00.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
