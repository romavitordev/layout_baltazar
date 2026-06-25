'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { brand } from '@/lib/site'
import { Embers } from '@/components/fx/Embers'
import { abrirPedir } from '@/components/home/PedirModal'

/**
 * Hero protagonista — palco de brasa (sem foto+zoom).
 * Wordmark gigante "BALTAZAR" sobre raios de calor (motivo da marca),
 * halo de brasa e uma cama de carvão incandescente embaixo, com fagulhas
 * subindo. Parallax sutil controlado por scroll (GSAP), pronto pra receber
 * um vídeo scrubbed em /media/hero.mp4 depois. Estático em reduced-motion.
 */
export function Hero() {
  const reduzir = useReducedMotion()
  const trilho = useRef<HTMLElement>(null)
  const wordmark = useRef<HTMLDivElement>(null)
  const conteudo = useRef<HTMLDivElement>(null)
  const brasaBed = useRef<HTMLDivElement>(null)
  const hint = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reduzir) return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: trilho.current, start: 'top top', end: 'bottom bottom', scrub: 1 },
      })
      tl.to(wordmark.current, { yPercent: -22, letterSpacing: '0.12em', ease: 'none' }, 0)
        .to(conteudo.current, { opacity: 0, y: -30, ease: 'none' }, 0)
        .to(hint.current, { opacity: 0, ease: 'none' }, 0)
        .fromTo(brasaBed.current, { opacity: 0.7, scaleY: 1 }, { opacity: 1, scaleY: 1.5, ease: 'none' }, 0)
    }, trilho)

    return () => ctx.revert()
  }, [reduzir])

  return (
    <section
      ref={trilho}
      aria-label="Baltazar Burger — burger artesanal na brasa"
      className={reduzir ? 'relative h-[100svh]' : 'relative h-[190vh]'}
    >
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden bg-carvao">
        {/* Motivo da marca: raios de calor */}
        <div
          aria-hidden
          className="raios absolute left-1/2 top-[42%] h-[150vmin] w-[150vmin] -translate-x-1/2 -translate-y-1/2 animate-[spin_120s_linear_infinite] motion-reduce:animate-none"
        />
        {/* Halo de brasa atrás do nome */}
        <div
          aria-hidden
          className="halo-brasa absolute left-1/2 top-[44%] h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 animate-brasapulse"
        />

        {/* Fagulhas */}
        <Embers count={20} />

        {/* Cama de brasa incandescente embaixo */}
        <div
          ref={brasaBed}
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-10 h-44 origin-bottom"
          style={{
            background:
              'radial-gradient(120% 100% at 50% 120%, rgba(244,162,60,0.55), rgba(226,84,28,0.35) 38%, transparent 70%)',
            filter: 'blur(6px)',
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-ember/70 to-transparent"
        />

        {/* Véu pra legibilidade */}
        <div aria-hidden className="absolute inset-0 z-20 bg-gradient-to-b from-carvao/40 via-transparent to-carvao/60" />

        {/* Conteúdo */}
        <div className="container-wide relative z-30 w-full">
          <div className="mx-auto max-w-4xl text-center">
            <p className="kicker mb-6">Sorocaba · grilled burger · desde 2017</p>

            <div ref={wordmark} className="will-change-transform">
              <h1 className="t-display font-anton uppercase leading-none text-osso [text-shadow:0_0_40px_rgba(226,84,28,0.35)]">
                Baltazar
              </h1>
              <p className="-mt-2 font-serif text-3xl italic texto-fogo md:-mt-4 md:text-5xl">na brasa.</p>
            </div>

            <div ref={conteudo}>
              <p className="mx-auto mt-7 max-w-xl text-balance text-base leading-7 text-osso/75 md:text-lg">
                {brand.promessa}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button type="button" onClick={abrirPedir} className="btn-fogo w-full sm:w-auto">
                  Peça agora
                </button>
                <Link href="/cardapio" className="btn-ghost group w-full sm:w-auto">
                  Ver o cardápio
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hint de scroll */}
        <div
          ref={hint}
          aria-hidden
          className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-2 text-osso/40"
        >
          <span className="label-mono">role e sinta o fogo</span>
          <span className="relative block h-9 w-px overflow-hidden bg-osso/15">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-descer bg-brasa" />
          </span>
        </div>
      </div>
    </section>
  )
}
