import { Star } from 'lucide-react'

import { avaliacaoDestaque, contadores } from '@/lib/site'
import { Counter } from '@/components/ui/Counter'
import { Reveal } from '@/components/ui/Reveal'

/** Faixa de números — anos, gramatura, seguidores + a nota 5.0. */
export function Numeros() {
  return (
    <section aria-labelledby="numeros-h2" className="relative overflow-hidden bg-grelha py-20 md:py-28">
      <h2 id="numeros-h2" className="sr-only">Baltazar em números</h2>
      <div className="raios pointer-events-none absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 opacity-60" aria-hidden />

      <div className="container-page relative grid gap-12 md:grid-cols-4 md:gap-8">
        {contadores.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08} className="text-center md:text-left">
            <p className="font-anton text-6xl uppercase leading-none text-osso md:text-7xl">
              <Counter valor={c.valor} sufixo={c.sufixo} />
            </p>
            <p className="mt-3 text-sm leading-6 text-fumaca">{c.label}</p>
          </Reveal>
        ))}

        <Reveal delay={0.24} className="text-center md:text-left">
          <p className="flex items-center justify-center gap-2 font-anton text-6xl uppercase leading-none text-osso md:justify-start md:text-7xl">
            {avaliacaoDestaque.media}
            <Star size={28} className="fill-brasa text-brasa" aria-hidden />
          </p>
          <p className="mt-3 text-sm leading-6 text-fumaca">nota dos clientes · {avaliacaoDestaque.total}</p>
        </Reveal>
      </div>
    </section>
  )
}
