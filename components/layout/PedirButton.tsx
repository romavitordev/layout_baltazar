'use client'

import type { ReactNode } from 'react'
import { abrirPedir } from '@/components/home/PedirModal'

/** Botão client que abre o modal de pedido — usável dentro de componentes server. */
export function PedirButton({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <button type="button" onClick={abrirPedir} className={className}>
      {children}
    </button>
  )
}
