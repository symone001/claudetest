import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: 'Notre Histoire' },
    { href: '#services', label: 'Soins & Machines' },
    { href: '#packs', label: 'Packs' },
    { href: '#entreprises', label: 'Entreprises' },
    { href: '#booking', label: 'Réservation' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-[#e8e0d4] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-[#4a7c59] font-bold text-xl tracking-tight">
          <span className="text-2xl">🌿</span>
          <span>
            CharmBio
            <span className="hidden sm:inline text-xs font-normal text-[#7a6a5a] block leading-none">Institut Bien-être · Santé · Beauté</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-[#5c4a3a] hover:text-[#4a7c59] font-medium transition-colors text-sm">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#booking" className="bg-[#4a7c59] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#3d6b4a] transition-colors shadow-sm">
              Prendre RDV
            </a>
          </li>
        </ul>

        <button className="lg:hidden text-[#4a7c59]" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#faf8f5] border-t border-[#e8e0d4] px-4 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[#5c4a3a] hover:text-[#4a7c59] font-medium py-1">
              {l.label}
            </a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)} className="bg-[#4a7c59] text-white px-5 py-2 rounded-full text-center font-semibold">
            Prendre RDV
          </a>
        </div>
      )}
    </nav>
  )
}
