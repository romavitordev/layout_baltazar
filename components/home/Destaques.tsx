'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { destaquesCardapio } from '@/lib/site'
import { Reveal } from '@/components/ui/Reveal'
import { abrirPedir } from '@/components/home/PedirModal'

/** Os burgers de assinatura — cards com hover lift, abrem o modal de pedido. */
export function Destaques() {
  return (
    <section className="relative overflow-hidden bg-carvao py-24 md:py-32">
      <div className="container-wide relative">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">03 — Os queridinhos</p>
            <h2 className="mt-5 max-w-xl text-balance font-serif text-4xl leading-[1.08] tracking-tight md:text-5xl">
              Os que saem da brasa primeiro.
            </h2>
          </div>
          <Link href="/cardapio" className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-osso/70 transition-colors hover:text-brasa">
            Ver cardápio completo
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destaquesCardapio.map((b, i) => (
            <Reveal key={b.nome} delay={i * 0.07}>
              <button
                type="button"
                onClick={abrirPedir}
                aria-label={`Peça ${b.nome} — ${b.preco}`}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-osso/10 bg-grelha text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-brasa/40 hover:shadow-[0_24px_60px_-30px_rgba(226,84,28,0.6)]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={b.imagem}
                    alt={b.imagemAlt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-grelha via-grelha/10 to-transparent" />
                  <span className="absolute left-3 top-3 chip border-transparent bg-brasa/90 text-osso">{b.tag}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-serif text-xl tracking-tight text-osso">{b.nome}</h3>
                    <span className="font-mono text-sm font-medium text-brasa">{b.preco}</span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-6 text-osso/60">{b.descricao}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-osso/45 transition-colors group-hover:text-brasa">
                    Peça agora
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
