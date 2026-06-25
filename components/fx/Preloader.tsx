'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * Preloader de marca — só na 1ª visita da sessão.
 * Fundo carvão, wordmark "BALTAZAR" (Anton) que "acende na brasa":
 * um gradiente de fogo varre as letras enquanto um contador mono sobe
 * 0→100. Sai com cortina pra cima revelando a hero.
 * Pulado em reduced-motion ou em visitas seguintes (sessionStorage).
 */
export function Preloader() {
  const [tocando, setTocando] = useState(false)
  const [n, setN] = useState(0)

  useEffect(() => {
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduz || sessionStorage.getItem('baltazar_intro')) return

    sessionStorage.setItem('baltazar_intro', '1')
    setTocando(true)
    document.documentElement.classList.add('trava-scroll')

    const dur = 1400
    const inicio = performance.now()
    let raf = 0
    const tick = (agora: number) => {
      const p = Math.min((agora - inicio) / dur, 1)
      setN(Math.round((1 - Math.pow(1 - p, 3)) * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setTocando(false), 300)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (!tocando) document.documentElement.classList.remove('trava-scroll')
  }, [tocando])

  return (
    <AnimatePresence>
      {tocando && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-carvao text-osso"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Raios de calor atrás do nome */}
          <div className="raios absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2" aria-hidden />
          <div className="halo-brasa absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2" aria-hidden />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <span
              className="font-anton text-6xl uppercase tracking-[0.04em] text-osso md:text-8xl"
              style={{
                backgroundImage: `linear-gradient(100deg, #F4ECE0 ${100 - n}%, #f4a23c ${Math.max(0, 104 - n)}%, #e2541c ${Math.max(0, 112 - n)}%)`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Baltazar
            </span>
          </motion.div>

          <div className="relative mt-6 h-px w-44 overflow-hidden bg-osso/15">
            <div
              className="h-full transition-[width] duration-100 ease-linear"
              style={{ width: `${n}%`, backgroundImage: 'linear-gradient(90deg, #f4a23c, #e2541c)' }}
            />
          </div>
          <span className="relative mt-3 label-mono text-osso/45">
            na brasa · {String(n).padStart(3, '0')}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
