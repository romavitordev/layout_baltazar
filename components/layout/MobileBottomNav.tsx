'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Flame, Home, MapPin, UtensilsCrossed } from 'lucide-react'

import { abrirPedir } from '@/components/home/PedirModal'

const itens = [
  { href: '/', label: 'Início', Icon: Home },
  { href: '/cardapio', label: 'Cardápio', Icon: UtensilsCrossed },
  { href: '/brasa', label: 'A Brasa', Icon: Flame },
  { href: '/visite', label: 'Visite', Icon: MapPin },
]

/** Navegação inferior — só no mobile, ao alcance do polegar. */
export function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Navegação"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-osso/10 bg-carvao/95 backdrop-blur-md md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-5">
        {itens.map(({ href, label, Icon }) => {
          const ativo = pathname === href
          return (
            <Link
              key={href}
              href={href}
              aria-current={ativo ? 'page' : undefined}
              className={`flex flex-col items-center gap-1 py-2.5 transition-colors ${ativo ? 'text-brasa' : 'text-osso/55'}`}
            >
              <Icon size={20} strokeWidth={1.75} />
              <span className="text-[0.58rem] font-medium uppercase tracking-[0.1em]">{label}</span>
            </Link>
          )
        })}
        <button
          type="button"
          onClick={abrirPedir}
          className="flex flex-col items-center gap-1 py-2.5 text-brasa transition-colors"
        >
          <span className="grid h-7 w-7 -translate-y-0.5 place-items-center rounded-full bg-brasa text-osso">
            <Flame size={16} strokeWidth={2} />
          </span>
          <span className="text-[0.58rem] font-medium uppercase tracking-[0.1em]">Pedir</span>
        </button>
      </div>
    </nav>
  )
}
