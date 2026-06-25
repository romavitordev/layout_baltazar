'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { nav } from '@/lib/site'
import { abrirPedir } from '@/components/home/PedirModal'

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] border-b text-osso backdrop-blur-md transition-colors duration-500 ${
        scrolled ? 'border-osso/10 bg-carvao/85' : 'border-transparent bg-carvao/30'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="group flex items-baseline gap-2" aria-label="Baltazar Burger — página inicial">
          <span className="font-anton text-2xl uppercase tracking-[0.03em] md:text-[1.7rem]">Baltazar</span>
          <span className="hidden text-[0.58rem] uppercase tracking-[0.3em] text-osso/55 transition-colors group-hover:text-brasa sm:inline">
            grilled burger
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.76rem] uppercase tracking-[0.22em] transition-opacity hover:opacity-100 ${
                pathname === item.href ? 'opacity-100' : 'opacity-60'
              }`}
            >
              {item.label}
              {pathname === item.href && <span className="mt-1 block h-px w-full bg-brasa" aria-hidden />}
            </Link>
          ))}
          <button type="button" onClick={abrirPedir} className="btn-fogo !px-5 !py-2.5 text-[0.76rem]">
            Peça agora
          </button>
        </nav>

        <button type="button" onClick={abrirPedir} className="btn-fogo !px-4 !py-2 text-[0.7rem] md:hidden">
          Peça
        </button>
      </div>
    </header>
  )
}
