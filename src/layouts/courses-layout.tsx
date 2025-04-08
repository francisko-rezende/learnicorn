import Link from 'next/link';

type CoursesLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export const CoursesLayout = ({ children }: CoursesLayoutProps) => {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      <header className="border-b border-stone-300 py-3">
        <div className="container flex items-center justify-between">
          <h1 className="text-2xl font-extrabold">Learnicorn 🦄</h1>
          <nav>
            <ul>
              <li>
                <Link
                  href={'/'}
                  className="underline transition-colors hover:text-slate-600"
                >
                  Todos os cursos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container">{children}</main>
      <footer className="border-t border-stone-300 py-3">
        <p className="container">Learnicorn © Alguns direitos reservados.</p>
      </footer>
    </div>
  );
};
