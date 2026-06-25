'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Em produção, aqui entraria o log num serviço de erros.
    console.error(error)
  }, [error])

  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-carvao px-6 text-center text-osso">
      <div className="halo-brasa pointer-events-none absolute left-1/2 top-1/2 h-[50vmin] w-[50vmin] -translate-x-1/2 -translate-y-1/2" aria-hidden />
      <p className="kicker relative">Queimou aqui</p>
      <h1 className="relative mt-6 max-w-md text-balance font-serif text-3xl tracking-tight md:text-5xl">
        Passou do ponto.
      </h1>
      <p className="relative mt-4 max-w-sm text-base leading-7 text-osso/60">
        Um erro inesperado aconteceu. Tenta de novo — quase sempre já resolve.
      </p>
      <div className="relative mt-9 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={reset} className="btn-fogo">
          Tentar de novo
        </button>
        <Link href="/" className="btn-ghost">
          Voltar pro início
        </Link>
      </div>
    </main>
  )
}
