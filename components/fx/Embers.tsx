'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Fagulhas subindo — partículas leves de brasa.
 * CSS puro (animação `fagulha`), pausadas quando saem da viewport
 * (IntersectionObserver) e totalmente desligadas em reduced-motion.
 */
export function Embers({ count = 16, className = '' }: { count?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [ativo, setAtivo] = useState(true)
  const [ligado, setLigado] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setLigado(true)

    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setAtivo(entry.isIntersecting),
      { threshold: 0 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  if (!ligado) return null

  const fagulhas = Array.from({ length: count })

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {fagulhas.map((_, i) => {
        const left = (i * 61) % 100
        const delay = (i % 7) * 0.7
        const dur = 3.6 + ((i * 13) % 30) / 10
        const size = 2 + (i % 3)
        return (
          <span
            key={i}
            className="absolute bottom-0 rounded-full"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              background: i % 3 === 0 ? '#f4a23c' : '#e2541c',
              boxShadow: '0 0 6px rgba(244,162,60,0.8)',
              animation: `fagulha ${dur}s linear ${delay}s infinite`,
              animationPlayState: ativo ? 'running' : 'paused',
            }}
          />
        )
      })}
    </div>
  )
}
