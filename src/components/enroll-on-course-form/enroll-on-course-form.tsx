'use client';

import { Button } from '@/components/button';
import { useEnrollOnCourseForm } from '@/hooks/use-enroll-on-course-form';
import { LucideLoaderCircle } from 'lucide-react';
import { EnrollOnCourseFormProps } from './enroll-on-course-form.types';

export const EnrollOnCourseForm = ({
  courseId,
  courseTitle,
}: EnrollOnCourseFormProps) => {
  const { formAction, isPending } = useEnrollOnCourseForm({
    courseId,
    courseTitle,
  });

  return (
    <form
      className="motion-safe:animate-fade-in-up flex items-center"
      action={formAction}
    >
      <Button
        variant="primary"
        size="medium"
        disabled={isPending}
        className="flex min-w-[128.85px] justify-center disabled:py-3"
      >
        {isPending ? (
          <>
            <span className="sr-only">Processando...</span>
            <LucideLoaderCircle className={'h-4 w-4 animate-spin'} />
          </>
        ) : (
          'Matricular-se'
        )}
      </Button>
    </form>
  );
};
