'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { avaliacaoDestaque, brand, hero, pedido } from '@/lib/site'
import { Embers } from '@/components/fx/Embers'
import { abrirPedir } from '@/components/home/PedirModal'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const withBase = (p: string) => (p.startsWith('/') ? `${BASE}${p}` : p)

type Modo = 'carregando' | 'video' | 'estatico'

/**
 * Hero protagonista. Sem vídeo configurado (lib/site.ts → `hero`), é um palco
 * de brasa em CSS: wordmark "BALTAZAR" sobre raios de calor (motivo da marca),
 * halo de brasa e uma cama de carvão incandescente, com fagulhas subindo e
 * parallax sutil no scroll. Quando `hero.video` é preenchido, vira um vídeo
 * controlado por scroll (scrubbed via ScrollTrigger → currentTime), com poster
 * pro 1º paint. Estático em reduced-motion / economia de dados.
 */
export function Hero() {
  const reduzir = useReducedMotion()
  const trilho = useRef<HTMLElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const wordmark = useRef<HTMLDivElement>(null)
  const conteudo = useRef<HTMLDivElement>(null)
  const brasaBed = useRef<HTMLDivElement>(null)
  const hint = useRef<HTMLDivElement>(null)

  const [modo, setModo] = useState<Modo>(hero.video ? 'carregando' : 'estatico')
  const [src, setSrc] = useState(hero.video)
  const [videoPronto, setVideoPronto] = useState(false)

  // Decide entre vídeo e palco estático (cliente).
  useEffect(() => {
    if (!hero.video) return setModo('estatico')
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } }
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = !!nav.connection?.saveData
    if (reduz || saveData) return setModo('estatico')
    const mobile = window.matchMedia('(max-width: 768px)').matches
    setSrc(mobile && hero.videoMobile ? hero.videoMobile : hero.video)
    setModo('video')
  }, [])

  // Animações de scroll (parallax do palco OU scrub do vídeo).
  useEffect(() => {
    if (reduzir || modo === 'carregando') return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: trilho.current, start: 'top top', end: 'bottom bottom', scrub: 1 },
        onUpdate: () => {
          if (modo !== 'video') return
          const v = video.current
          if (v && v.duration && !Number.isNaN(v.duration)) v.currentTime = tl.progress() * (v.duration - 0.05)
        },
      })
      tl.to(wordmark.current, { yPercent: -22, letterSpacing: '0.12em', ease: 'none' }, 0)
        .to(conteudo.current, { opacity: 0, y: -30, ease: 'none' }, 0)
        .to(hint.current, { opacity: 0, ease: 'none' }, 0)
      if (modo === 'estatico' && brasaBed.current) {
        tl.fromTo(brasaBed.current, { opacity: 0.7, scaleY: 1 }, { opacity: 1, scaleY: 1.5, ease: 'none' }, 0)
      }
    }, trilho)

    return () => ctx.revert()
  }, [reduzir, modo])

  const alturaTrilho = reduzir ? 'h-[100svh]' : modo === 'video' ? 'h-[240vh]' : 'h-[185vh]'

  return (
    <section ref={trilho} aria-label="Baltazar Burger — burger artesanal na brasa" className={`relative ${alturaTrilho}`}>
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden bg-carvao">
        {modo === 'video' ? (
          <>
            {/* Vídeo controlado por scroll */}
            {hero.poster && (
              <Image
                src={withBase(hero.poster)}
                alt=""
                aria-hidden
                fill
                priority
                className={`object-cover transition-opacity duration-500 ${videoPronto ? 'opacity-0' : 'opacity-100'}`}
              />
            )}
            <video
              ref={video}
              muted
              playsInline
              preload="auto"
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
              onLoadedData={() => setVideoPronto(true)}
            >
              <source src={withBase(src)} type="video/mp4" />
            </video>
            <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-carvao/60 via-carvao/30 to-carvao/80" />
          </>
        ) : (
          <>
            {/* Palco de brasa em CSS (padrão) */}
            <div
              aria-hidden
              className="raios absolute left-1/2 top-[42%] h-[150vmin] w-[150vmin] -translate-x-1/2 -translate-y-1/2 animate-[spin_120s_linear_infinite] motion-reduce:animate-none"
            />
            <div
              aria-hidden
              className="halo-brasa absolute left-1/2 top-[44%] h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 animate-brasapulse"
            />
            <Embers count={18} />
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
            <div aria-hidden className="absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-ember/70 to-transparent" />
            <div aria-hidden className="absolute inset-0 z-20 bg-gradient-to-b from-carvao/40 via-transparent to-carvao/60" />
          </>
        )}

        {/* Conteúdo (em ambos os modos) */}
        <div className="container-wide relative z-30 w-full">
          <div className="mx-auto max-w-4xl text-center">
            <p className="kicker mb-6">Sorocaba · grilled burger · desde 2017</p>

            <div ref={wordmark} className="will-change-transform">
              <h1 className="t-display font-anton uppercase leading-none text-osso [text-shadow:0_0_45px_rgba(226,84,28,0.4)]">
                Baltazar
              </h1>
              <p className="mt-1 font-serif text-3xl italic texto-fogo md:text-5xl">na brasa.</p>
            </div>

            <div ref={conteudo}>
              <p className="mx-auto mt-7 max-w-xl text-balance text-base leading-7 text-osso/75 md:text-lg">
                {brand.promessa}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button type="button" onClick={abrirPedir} className="btn-fogo w-full sm:w-auto">
                  {pedido.ctaHero}
                </button>
                <Link href="/cardapio" className="btn-ghost group w-full sm:w-auto">
                  Ver o cardápio
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-osso/70">
                <span className="tracking-tight text-brasa" aria-hidden>★★★★★</span>
                <span className="font-medium text-osso">{avaliacaoDestaque.media}</span>
                <span className="text-osso/40" aria-hidden>·</span>
                <span>{brand.selo}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Hint de scroll */}
        <div
          ref={hint}
          aria-hidden
          className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-2 text-osso/45"
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
