'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { montagem } from '@/lib/site'
import { Embers } from '@/components/fx/Embers'

/* Sementes de gergelim no pão de cima */
function Sementes() {
  const pos = [
    { l: '28%', t: '42%', r: -18 },
    { l: '42%', t: '30%', r: 12 },
    { l: '56%', t: '30%', r: -8 },
    { l: '68%', t: '42%', r: 20 },
    { l: '48%', t: '52%', r: 0 },
  ]
  return (
    <>
      {pos.map((p, i) => (
        <span
          key={i}
          className="absolute h-1.5 w-[7px] rounded-full bg-[#f7e8c6]"
          style={{ left: p.l, top: p.t, transform: `rotate(${p.r}deg)` }}
        />
      ))}
    </>
  )
}

/* A pilha do hambúrguer (CSS puro). `idx` controla a montagem (build de baixo
   pra cima — pão de baixo + carne já no passo 1, sobre a brasa: nada flutua). */
function Pilha({ idx, estatico = false }: { idx: number; estatico?: boolean }) {
  const on = (passo: number) => (estatico ? true : idx >= passo)
  const cam = (visivel: boolean) =>
    `transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
      visivel ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
    }`
  const naBrasa = estatico || idx >= 1
  const montado = estatico || idx >= 5

  return (
    <div className="relative mx-auto w-[19rem] max-w-full">
      {/* Sunburst + halo CENTRALIZADOS atrás do burger (motivo da marca) */}
      <div
        aria-hidden
        className="raios pointer-events-none absolute left-1/2 top-[5.2rem] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 opacity-60"
      />
      <div
        aria-hidden
        className="halo-brasa pointer-events-none absolute left-1/2 top-[9.5rem] h-[15rem] w-[15rem] -translate-x-1/2 -translate-y-1/2 animate-brasapulse"
      />
      <Embers count={10} />

      {/* Pilha — fatias em slots fixos (sem reflow), revelam por opacidade/translate */}
      <div
        className={`relative z-10 flex flex-col items-center transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
          montado ? 'scale-[1.02]' : 'scale-100'
        }`}
      >
        {/* Pão de cima (passo 5) */}
        <div className={`w-full ${cam(on(4))}`}>
          <div
            className="relative mx-auto h-[4.1rem] w-full rounded-t-[100%] rounded-b-md"
            style={{ background: 'linear-gradient(180deg,#eab867,#d68a36 72%,#c2782b)', boxShadow: 'inset 0 6px 14px rgba(255,255,255,.28)' }}
          >
            <Sementes />
          </div>
        </div>

        {/* Maionese Baltazar (passo 4) */}
        <div
          className={`-mt-1 h-[0.7rem] w-[15.5rem] rounded-full ${cam(on(3))}`}
          style={{ background: 'linear-gradient(180deg,#fbf3df,#ecdcc0)', boxShadow: '0 2px 0 rgba(0,0,0,.12)' }}
        />

        {/* Queijo derretendo (passo 3) */}
        <div className={`relative -mt-[2px] w-[16.6rem] ${cam(on(2))}`}>
          <div className="h-[0.9rem] w-full rounded-md" style={{ background: 'linear-gradient(180deg,#f7b733,#e8902a)' }} />
          <span className="absolute -bottom-2 left-8 h-3 w-3 rounded-b-full" style={{ background: '#ef9d2b' }} />
          <span className="absolute -bottom-3 left-1/2 h-4 w-3 -translate-x-1/2 rounded-b-full" style={{ background: '#ef9d2b' }} />
          <span className="absolute -bottom-2 right-9 h-3 w-3 rounded-b-full" style={{ background: '#ef9d2b' }} />
        </div>

        {/* Carne — aparece já no passo 1; ganha brasa no passo 2 */}
        <div
          className={`-mt-[2px] h-[2.4rem] w-[16rem] rounded-[46%] ${cam(on(0))}`}
          style={{
            background: 'linear-gradient(180deg,#5a3320,#3a2014 58%,#26130b)',
            boxShadow: naBrasa
              ? '0 0 28px rgba(226,84,28,.55), inset 0 4px 7px rgba(244,162,60,.4), inset 0 -7px 12px rgba(0,0,0,.55)'
              : 'inset 0 -7px 12px rgba(0,0,0,.55)',
            transition: 'box-shadow .8s ease',
          }}
        />

        {/* Pão de baixo — a base, sobre a brasa (passo 1, junto da carne) */}
        <div
          className={`-mt-[2px] h-[1.7rem] w-[16.4rem] rounded-b-[1.4rem] rounded-t-sm ${cam(on(0))}`}
          style={{ background: 'linear-gradient(180deg,#d68a36,#b06a23)' }}
        />
      </div>

      {/* Cama de brasa — proporcional ao burger, logo abaixo dele */}
      <div aria-hidden className="relative -mt-1 h-14">
        <div
          className="absolute left-1/2 top-1 h-8 w-[15.5rem] max-w-full -translate-x-1/2 rounded-[50%] animate-brasapulse"
          style={{ background: 'radial-gradient(closest-side, rgba(244,162,60,0.7), rgba(226,84,28,0.3) 55%, transparent)', filter: 'blur(9px)' }}
        />
        <div className="absolute left-1/2 top-1 h-px w-[13rem] max-w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-ember/80 to-transparent" />
      </div>
    </div>
  )
}

/**
 * "Da brasa ao pão" — seção pinada. Conforme o scroll avança, o hambúrguer
 * se monta camada por camada e os passos cruzam em fade.
 * Em reduced-motion vira uma versão estática: burger montado + lista de passos.
 */
export function Montagem() {
  const reduzir = useReducedMotion()
  const trilho = useRef<HTMLElement>(null)
  const barra = useRef<HTMLDivElement>(null)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (reduzir) return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: trilho.current,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          setIdx(Math.min(montagem.length - 1, Math.floor(self.progress * montagem.length)))
          if (barra.current) gsap.set(barra.current, { scaleY: self.progress })
        },
      })
    }, trilho)

    return () => ctx.revert()
  }, [reduzir])

  if (reduzir) {
    return (
      <section className="border-y border-osso/10 bg-carvao py-24 text-osso">
        <div className="container-page">
          <p className="kicker">02 — Da brasa ao pão</p>
          <h2 className="mt-6 max-w-2xl font-serif text-3xl tracking-tight md:text-5xl">
            Como a gente monta um Baltazar.
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-center">
            <Pilha idx={5} estatico />
            <ol className="space-y-6">
              {montagem.map((p) => (
                <li key={p.numero} className="border-l-2 border-brasa/40 pl-5">
                  <p className="font-mono text-sm text-brasa">
                    {p.numero} · {p.ingrediente}
                  </p>
                  <p className="mt-1 font-serif text-xl text-osso">{p.titulo}</p>
                  <p className="mt-1 text-sm leading-7 text-osso/65">{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={trilho}
      aria-label="02 — Da brasa ao pão"
      className="relative h-[320vh] border-y border-osso/10 bg-carvao text-osso"
    >
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        {/* barra de progresso vertical */}
        <div aria-hidden className="absolute left-6 top-1/2 hidden h-40 w-px -translate-y-1/2 bg-osso/15 md:left-10 md:block">
          <div ref={barra} className="h-full w-full origin-top bg-brasa" style={{ transform: 'scaleY(0)' }} />
        </div>

        <div className="container-page grid w-full items-center gap-10 md:grid-cols-2">
          {/* Texto do passo */}
          <div className="order-2 md:order-1">
            <p className="kicker">02 — Da brasa ao pão</p>
            <div className="relative mt-6 h-[16rem] md:h-[17rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="flex items-baseline gap-3 font-anton text-7xl leading-none text-brasa/80 md:text-8xl">
                    {montagem[idx].numero}
                    <span className="text-2xl text-osso/30">/ 0{montagem.length}</span>
                  </p>
                  <p className="mt-4 label-mono text-osso/45">{montagem[idx].ingrediente}</p>
                  <h3 className="mt-2 font-serif text-4xl tracking-tight md:text-5xl">{montagem[idx].titulo}</h3>
                  <p className="mt-4 max-w-md text-base leading-8 text-osso/70">{montagem[idx].texto}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* indicador de passos */}
            <div className="mt-6 flex gap-2" aria-hidden>
              {montagem.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${i === idx ? 'w-8 bg-brasa' : 'w-3 bg-osso/20'}`}
                />
              ))}
            </div>
          </div>

          {/* A pilha */}
          <div className="order-1 flex justify-center md:order-2">
            <Pilha idx={idx} />
          </div>
        </div>
      </div>
    </section>
  )
}
