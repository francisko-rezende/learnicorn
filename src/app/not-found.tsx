import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-accent-base text-base font-semibold">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          Página não encontrada
        </h1>
        <p className="text-primary-medium mt-6 text-lg font-medium text-pretty sm:text-xl/8">
          Perdão, não localizamos a página que você estava buscando
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="bg-accent-base focus-visible:outline-accent-base text-neutral-white rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Voltar pra lista de cursos
          </Link>
        </div>
      </div>
    </main>
  );
}
