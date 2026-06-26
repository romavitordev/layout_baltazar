'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Flame, MapPin, MessageCircle, ShoppingBag, Ticket, X } from 'lucide-react'

import { brand, endereco, pedido, waLink, waMensagens } from '@/lib/site'
import { CopyCupom } from '@/components/ui/CopyCupom'

/** Abre o modal de pedido de qualquer lugar (header, hero, nav, CTAs). */
export function abrirPedir() {
  window.dispatchEvent(new Event('abrir-pedir'))
}

type Canal = {
  id: string
  nome: string
  detalhe: string
  href: string
  Icon: typeof Flame
  destaque?: boolean
}

const canais: Canal[] = [
  {
    id: 'site',
    nome: 'Peça no nosso site',
    detalhe: `${pedido.vantagemSite} · cupom ${pedido.cupom}`,
    href: pedido.site,
    Icon: Flame,
    destaque: true,
  },
  { id: 'ifood', nome: 'Peça no iFood', detalhe: 'Entrega pelo app', href: pedido.ifood, Icon: ShoppingBag },
  { id: 'whats', nome: 'Chama no WhatsApp', detalhe: 'Falar direto com a loja', href: waLink(waMensagens.pedido), Icon: MessageCircle },
  { id: 'maps', nome: 'Como chegar', detalhe: endereco.linha, href: endereco.mapsLink, Icon: MapPin },
]

export function PedirModal() {
  const [aberto, setAberto] = useState(false)
  const painel = useRef<HTMLDivElement>(null)
  const antesDoFoco = useRef<HTMLElement | null>(null)

  const fechar = useCallback(() => setAberto(false), [])

  useEffect(() => {
    const abrir = () => {
      antesDoFoco.current = document.activeElement as HTMLElement
      setAberto(true)
    }
    window.addEventListener('abrir-pedir', abrir)
    return () => window.removeEventListener('abrir-pedir', abrir)
  }, [])

  useEffect(() => {
    if (aberto) {
      document.documentElement.classList.add('trava-scroll')
      // foca o primeiro link ao abrir
      requestAnimationFrame(() => {
        painel.current?.querySelector<HTMLAnchorElement>('a')?.focus()
      })
    } else {
      document.documentElement.classList.remove('trava-scroll')
      antesDoFoco.current?.focus?.()
    }
  }, [aberto])

  useEffect(() => {
    if (!aberto) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fechar()
      if (e.key === 'Tab' && painel.current) {
        const foco = painel.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        )
        if (foco.length === 0) return
        const primeiro = foco[0]
        const ultimo = foco[foco.length - 1]
        if (e.shiftKey && document.activeElement === primeiro) {
          e.preventDefault()
          ultimo.focus()
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault()
          primeiro.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [aberto, fechar])

  if (!aberto) return null

  return (
    <div
      className="fixed inset-0 z-[160] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pedir-titulo"
    >
      <button
        type="button"
        aria-label="Fechar"
        onClick={fechar}
        className="absolute inset-0 bg-carvao/80 backdrop-blur-sm"
      />

      <div
        ref={painel}
        className="relative w-full max-w-lg rounded-t-3xl border border-osso/10 bg-grelha p-6 sm:rounded-3xl sm:p-8"
      >
        <div className="raios pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2" aria-hidden />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="kicker">Peça agora</p>
            <h2 id="pedir-titulo" className="mt-2 font-anton text-3xl uppercase tracking-tight text-osso">
              Do fogo pra sua mão
            </h2>
          </div>
          <button
            type="button"
            onClick={fechar}
            aria-label="Fechar"
            className="rounded-full border border-osso/20 p-2 text-osso/70 transition-colors hover:border-brasa hover:text-brasa"
          >
            <X size={18} />
          </button>
        </div>

        {/* Faixa do cupom */}
        <div className="relative mt-5 flex items-center gap-3 rounded-2xl border border-brasa/30 bg-brasa/10 px-4 py-3">
          <Ticket size={18} className="shrink-0 text-brasa" aria-hidden />
          <p className="flex flex-wrap items-center gap-x-1.5 text-sm text-osso/80">
            <CopyCupom /> <span>— {pedido.cupomTexto} no site. {pedido.cashback}.</span>
          </p>
        </div>

        <ul className="relative mt-5 grid gap-3">
          {canais.map(({ id, nome, detalhe, href, Icon, destaque }) => (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${
                  destaque
                    ? 'border-brasa/40 bg-brasa/10 hover:border-brasa'
                    : 'border-osso/12 bg-carvao/40 hover:border-osso/40'
                }`}
              >
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${
                    destaque ? 'bg-brasa text-osso' : 'bg-osso/10 text-osso'
                  }`}
                >
                  <Icon size={20} aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block font-medium text-osso">{nome}</span>
                  <span className="block truncate text-xs text-fumaca">{detalhe}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="relative mt-5 text-center text-xs text-fumaca">
          {brand.nomeCompleto} · {endereco.bairro}
        </p>
      </div>
    </div>
  )
}
