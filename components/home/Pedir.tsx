import { Flame, MessageCircle, ShoppingBag, Ticket } from 'lucide-react'

import { endereco, pedido, waLink, waMensagens } from '@/lib/site'
import { Reveal } from '@/components/ui/Reveal'
import { PedirButton } from '@/components/layout/PedirButton'

/** Bloco de conversão — cupom BALTA10 + canais de pedido. */
export function Pedir() {
  return (
    <section id="pedir" className="bg-carvao py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-brasa/30 bg-grelha p-8 md:p-14">
            <div className="raios pointer-events-none absolute -right-20 -top-20 h-96 w-96 opacity-70" aria-hidden />
            <div
              aria-hidden
              className="halo-brasa absolute -bottom-24 -left-10 h-80 w-80"
            />

            <div className="relative grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div>
                <p className="kicker">07 — Bateu a fome?</p>
                <h2 className="mt-5 max-w-md text-balance font-serif text-4xl leading-[1.08] tracking-tight md:text-5xl">
                  Acende a brasa. <span className="texto-fogo">A gente entrega.</span>
                </h2>

                <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-brasa/40 bg-brasa/10 px-5 py-3">
                  <Ticket size={20} className="shrink-0 text-brasa" aria-hidden />
                  <p className="text-sm text-osso/85">
                    Use <span className="font-mono font-semibold text-brasa">{pedido.cupom}</span> e ganhe{' '}
                    {pedido.cupomTexto}. {pedido.vantagemSite}.
                  </p>
                </div>
                <p className="mt-3 text-xs text-fumaca">{pedido.cashback}.</p>
              </div>

              <div className="grid gap-3">
                <a href={pedido.site} target="_blank" rel="noopener noreferrer" className="btn-fogo w-full justify-between">
                  <span className="inline-flex items-center gap-2">
                    <Flame size={18} /> Peça no nosso site
                  </span>
                  <span className="text-xs font-normal opacity-80">15% + barato</span>
                </a>
                <a href={pedido.ifood} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full justify-start gap-2">
                  <ShoppingBag size={18} /> Peça no iFood
                </a>
                <a
                  href={waLink(waMensagens.pedido)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full justify-start gap-2"
                >
                  <MessageCircle size={18} /> Chama no WhatsApp
                </a>
                <PedirButton className="mt-1 text-center text-xs uppercase tracking-[0.18em] text-osso/50 transition-colors hover:text-brasa">
                  ver todas as opções →
                </PedirButton>
                <p className="mt-1 text-center text-[0.7rem] text-fumaca">{endereco.bairro} · {endereco.cidade}/{endereco.uf}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
