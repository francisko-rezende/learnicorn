import Link from 'next/link';

type CoursesLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export const CoursesLayout = ({ children }: CoursesLayoutProps) => {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      <header className="border-b border-stone-300 py-3">
        <div className="container flex items-center justify-between">
          <Link
            className="group text-2xl font-extrabold text-slate-800 transition-colors hover:text-slate-600"
            href={'/'}
          >
            <h1>
              <span className="group-hover:underline">Learnicorn </span>🦄{' '}
            </h1>
          </Link>

          <nav>
            <ul>
              <li>
                <Link
                  href={'/'}
                  className="transition-colors hover:text-slate-800 hover:underline"
                >
                  Todos os cursos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container space-y-6 py-8">{children}</main>
      <footer className="border-t border-stone-300 py-3">
        <p className="container">Learnicorn © Alguns direitos reservados.</p>
      </footer>
    </div>
  );
};
