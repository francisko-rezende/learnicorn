'use client';

import { Button } from '@/components/button';
import { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleResetErrorBoundary = () => reset();

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-red-600 sm:text-7xl">
          Oops!
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-slate-500 sm:text-xl/8">
          Houve um erro inesperado!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            variant="ghost"
            size="medium"
            onClick={handleResetErrorBoundary}
          >
            Tentar novamente
          </Button>
        </div>
      </div>
    </main>
  );
}
