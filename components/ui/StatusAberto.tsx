'use client'

import { useEffect, useState } from 'react'

import { funcionamento } from '@/lib/site'

/**
 * Selo "Aberto agora / Fechado" calculado no cliente a partir de
 * `funcionamento`. Só renderiza depois de montar pra evitar mismatch
 * de hidratação (o horário do servidor difere do cliente).
 */
export function StatusAberto({ className = '' }: { className?: string }) {
  const [estado, setEstado] = useState<{ aberto: boolean; texto: string } | null>(null)

  useEffect(() => {
    const agora = new Date()
    const dia = agora.getDay()
    const hora = agora.getHours() + agora.getMinutes() / 60
    const { diasAbertos, abre, fecha } = funcionamento

    const aberto = diasAbertos.includes(dia) && hora >= abre && hora < fecha
    let texto = 'Aberto agora'
    if (!aberto) {
      const abreHoje = diasAbertos.includes(dia) && hora < abre
      texto = abreHoje ? `Abrimos hoje às ${abre}h` : 'Fechado · qua a dom, 18h às 23h'
    }
    setEstado({ aberto, texto })
  }, [])

  if (!estado) {
    return <span className={`label-mono text-osso/40 ${className}`}>Horário de funcionamento</span>
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative flex h-2.5 w-2.5">
        {estado.aberto && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400/70" />
        )}
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${estado.aberto ? 'bg-green-400' : 'bg-fumaca'}`} />
      </span>
      <span className={`font-mono text-xs uppercase tracking-[0.18em] ${estado.aberto ? 'text-green-400' : 'text-fumaca'}`}>
        {estado.texto}
      </span>
    </span>
  )
}
