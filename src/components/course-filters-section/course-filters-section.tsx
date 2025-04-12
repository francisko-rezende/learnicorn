'use client';

import { Button } from '@/components/button';
import { CategorySelectField } from '@/components/category-select-field';
import { LevelSelectField } from '../level-select-field';
import { useCourseFiltersSection } from '@/hooks/useCourseFiltersSection';

export const CourseFiltersSection = () => {
  const {
    handleClearFilters,
    hasFiltered,
    numberOfFilteredCourses,
    totalCourses,
  } = useCourseFiltersSection();

  return (
    <section className="flex flex-wrap items-end justify-between gap-4">
      <form className="flex min-w-[344px] flex-wrap gap-2 sm:min-w-96 sm:gap-4">
        <CategorySelectField />

        <LevelSelectField />
      </form>
      <div className="space-y-0.5">
        <p className="text-sm text-slate-600">
          Mostrando {numberOfFilteredCourses} de {totalCourses} cursos
        </p>

        <Button
          variant="reset"
          size="small"
          disabled={!hasFiltered}
          onClick={handleClearFilters}
        >
          Limpar filtros
        </Button>
      </div>
    </section>
  );
};
