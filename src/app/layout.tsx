import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { MainLayout } from '@/layouts/main-layout/main-layout';
import { NuqsAdapter } from 'nuqs/adapters/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Learnicorn',
  description:
    'Descubra a Learnicorn, a plataforma mágica para aprender novas habilidades com cursos envolventes e acessíveis. Comece a aprender hoje!',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦄</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} bg-slate-50 text-slate-600 antialiased`}
      >
        <NuqsAdapter>
          <MainLayout>{children}</MainLayout>
        </NuqsAdapter>
      </body>
    </html>
  );
}
