'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

import { pedido } from '@/lib/site'

/**
 * Cupom copiável com feedback (CRO): clica → copia BALTA10 → vira "copiado".
 * Acessível (aria-label + região aria-live). Degrada se clipboard indisponível.
 */
export function CopyCupom({ className = '' }: { className?: string }) {
  const [copiado, setCopiado] = useState(false)

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(pedido.cupom)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2200)
    } catch {
      /* clipboard indisponível — sem feedback, mas sem erro */
    }
  }

  return (
    <button
      type="button"
      onClick={copiar}
      aria-label={`Copiar cupom ${pedido.cupom}`}
      className={`group inline-flex items-center gap-1.5 rounded-full border border-dashed border-brasa/50 bg-brasa/10 px-3 py-1 font-mono text-sm font-semibold text-brasa transition-colors hover:border-brasa hover:bg-brasa/20 ${className}`}
    >
      {pedido.cupom}
      {copiado ? (
        <Check size={14} className="text-brasa" aria-hidden />
      ) : (
        <Copy size={14} className="opacity-60 transition-opacity group-hover:opacity-100" aria-hidden />
      )}
      <span aria-live="polite" className="sr-only">
        {copiado ? 'Cupom copiado' : ''}
      </span>
    </button>
  )
}
