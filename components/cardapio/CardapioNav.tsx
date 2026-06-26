'use client'

import { useEffect, useRef, useState } from 'react'

import { cardapio } from '@/lib/site'
import { slug } from '@/lib/slug'

const cats = cardapio.map((c) => ({ nome: c.categoria, id: slug(c.categoria) }))

/**
 * Navegação sticky de categorias do cardápio (jump links) com destaque da
 * seção ativa (IntersectionObserver) e auto-scroll do chip ativo pra dentro
 * da barra no mobile. Âncoras nativas (#id) — funcionam sem JS.
 */
export function CardapioNav() {
  const [ativo, setAtivo] = useState(cats[0]?.id ?? '')
  const barra = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const secs = cats
      .map((c) => document.getElementById(c.id))
      .filter(Boolean) as HTMLElement[]
    if (!secs.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visivel = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visivel) setAtivo(visivel.target.id)
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    )
    secs.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    barra.current
      ?.querySelector<HTMLElement>('[aria-current="true"]')
      ?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
  }, [ativo])

  return (
    <nav
      aria-label="Categorias do cardápio"
      className="sticky top-16 z-30 border-b border-osso/10 bg-carvao/85 backdrop-blur-md md:top-20"
    >
      <div
        ref={barra}
        className="container-page flex gap-2 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cats.map((c) => {
          const on = ativo === c.id
          return (
            <a
              key={c.id}
              href={`#${c.id}`}
              aria-current={on ? 'true' : undefined}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] transition-colors ${
                on
                  ? 'border-brasa bg-brasa/15 text-brasa'
                  : 'border-osso/15 text-osso/60 hover:border-osso/40 hover:text-osso'
              }`}
            >
              {c.nome}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
