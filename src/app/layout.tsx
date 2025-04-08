import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { CoursesLayout } from '@/layouts/courses-layout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Learnicorn - Aprenda com cursos incríveis e práticos',
  description:
    'Descubra a Learnicorn, a plataforma mágica para aprender novas habilidades com cursos envolventes e acessíveis. Comece a aprender hoje!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} text-slate-800 antialiased`}>
        <CoursesLayout>{children}</CoursesLayout>
      </body>
    </html>
  );
}
