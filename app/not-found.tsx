import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-carvao px-6 text-center text-osso">
      <div className="raios pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2" aria-hidden />
      <p className="kicker relative">Erro 404</p>
      <p className="t-num relative font-anton leading-none texto-fogo">404</p>
      <h1 className="relative mt-6 max-w-md text-balance font-serif text-3xl tracking-tight md:text-5xl">
        Essa brasa apagou.
      </h1>
      <p className="relative mt-4 max-w-sm text-base leading-7 text-osso/60">
        A página que você procurava não está no fogo — mas a grelha continua acesa lá no início.
      </p>
      <Link href="/" className="btn-fogo relative mt-9">
        Voltar pro início
      </Link>
    </main>
  )
}
