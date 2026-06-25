import type { Metadata } from 'next'
import { Ticket } from 'lucide-react'

import { brand, pedido } from '@/lib/site'
import { CardapioCompleto } from '@/components/cardapio/CardapioCompleto'
import { Pedir } from '@/components/home/Pedir'
import { StatusAberto } from '@/components/ui/StatusAberto'
import { PedirButton } from '@/components/layout/PedirButton'

export const metadata: Metadata = {
  title: 'Cardápio',
  description:
    'O cardápio completo da Baltazar Burger: burgers de 150g na brasa, costelinha, porções, milk shakes, drinks e sobremesas. Peça com o cupom BALTA10.',
  alternates: { canonical: '/cardapio' },
}

export default function CardapioPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-osso/10 bg-carvao pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="raios pointer-events-none absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2" aria-hidden />
        <div className="container-page relative">
          <p className="kicker">O cardápio</p>
          <h1 className="mt-5 max-w-3xl font-anton text-5xl uppercase leading-[0.95] tracking-tight text-osso md:text-7xl">
            Tudo que sai <span className="texto-fogo">da brasa.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-osso/65">{brand.descricao}</p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <StatusAberto />
            <span className="inline-flex items-center gap-2 text-sm text-osso/70">
              <Ticket size={16} className="text-brasa" aria-hidden />
              Cupom <span className="font-mono font-semibold text-brasa">{pedido.cupom}</span> — {pedido.cupomTexto}
            </span>
          </div>

          <PedirButton className="btn-fogo mt-8">Peça agora</PedirButton>
        </div>
      </header>

      <div className="container-page py-20 md:py-28">
        <CardapioCompleto />
      </div>

      <Pedir />
    </>
  )
}
