'use client';
import { courses } from '@/data/courses';
import { useQueryStates } from 'nuqs';
import { coursesSearchParams } from '@/lib/nuqs/courses-search-params';
import { Button } from '@/components/button';
import { useFilteredCourses } from '@/hooks/use-filtered-courses';
import { CategorySelectField } from '@/components/category-select-field';
import { LevelSelectField } from '../level-select-field';

export const CourseFiltersSection = () => {
  const [{ category, level }, setSearchParams] =
    useQueryStates(coursesSearchParams);

  const hasFiltered = !!category || !!level;
  const totalCourses = courses.length;

  const handleClearFilter = () => setSearchParams(null);

  const filteredCourses = useFilteredCourses();
  const numberOfFilteredCourses = filteredCourses.length;

  return (
    <section className="flex flex-wrap items-end justify-between gap-4">
      <form className="flex flex-wrap gap-2 sm:gap-4">
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
          onClick={handleClearFilter}
        >
          Limpar filtros
        </Button>
      </div>
    </section>
  );
};
