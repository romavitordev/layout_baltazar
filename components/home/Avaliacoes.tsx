'use client'

import { Star } from 'lucide-react'

import { Reveal } from '@/components/ui/Reveal'
import { avaliacoes, avaliacaoDestaque } from '@/lib/site'

function Estrelas({ nota }: { nota: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${nota} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < nota ? 'fill-brasa text-brasa' : 'text-osso/20'} />
      ))}
    </div>
  )
}

const loop = [...avaliacoes, ...avaliacoes]

export function Avaliacoes() {
  return (
    <section className="overflow-hidden bg-carvao py-24 md:py-32">
      <div className="container-wide">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">05 — Quem prova, volta</p>
            <h2 className="mt-5 max-w-xl text-balance font-serif text-4xl leading-[1.08] tracking-tight md:text-5xl">
              O que dizem depois da primeira mordida.
            </h2>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-anton text-5xl text-osso">{avaliacaoDestaque.media}</span>
            <span className="label-mono text-osso/50">★ · {avaliacaoDestaque.total}</span>
          </div>
        </Reveal>
      </div>

      {/* Marquee infinito — passa sozinho, pausa no hover */}
      <div className="group relative mt-12">
        <div className="flex w-max gap-5 pl-5 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((a, i) => (
            <figure
              key={i}
              aria-hidden={i >= avaliacoes.length}
              className="flex w-[78vw] shrink-0 flex-col rounded-2xl border border-osso/10 bg-grelha p-7 sm:w-[22rem]"
            >
              <Estrelas nota={a.nota} />
              <blockquote className="mt-4 flex-1 font-serif text-lg italic leading-8 text-osso/85">
                “{a.texto}”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between">
                <span className="font-serif text-base text-osso">{a.nome}</span>
                <span className="label-mono text-osso/40">{a.quando}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-carvao to-transparent md:w-28" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-carvao to-transparent md:w-28" />
      </div>
    </section>
  )
}
