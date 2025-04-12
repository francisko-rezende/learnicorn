import Link from 'next/link';

type MainLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      <header className="border-primary-base border-b py-3">
        <div className="container flex items-center justify-between">
          <Link
            className="group hover:text-primary-dark text-primary-darkest text-2xl font-extrabold transition-colors"
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
                  className="hover:text-primary-darkest transition-colors hover:underline"
                >
                  Todos os cursos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container space-y-6 py-8">{children}</main>
      <footer className="border-primary-base border-t py-3">
        <p className="container">Learnicorn © Alguns direitos reservados.</p>
      </footer>
    </div>
  );
};
