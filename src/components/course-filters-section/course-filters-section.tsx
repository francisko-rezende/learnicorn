'use client';
import { courses } from '@/data/courses';
import { useQueryStates } from 'nuqs';
import { coursesSearchParams } from '@/lib/nuqs/courses-search-params';
import { Select } from '@/components/select';
import { Button } from '@/components/button';
import { useFilteredCourses } from '@/hooks/use-filtered-courses';

export const CourseFiltersSection = () => {
  const [{ category, level }, setSearchParams] =
    useQueryStates(coursesSearchParams);

  const hasFiltered = !!category || !!level;
  const totalCourses = courses.length;

  const handleClearFilter = () => setSearchParams(null);

  const courseCategoryOptions = Array.from(
    new Set(courses.map(({ category }) => category)),
  ).map(category => ({ value: category, label: category }));

  const courseLevelOptions = [
    { value: 'iniciante', label: 'Iniciante' },
    { value: 'intermediario', label: 'Intermediário' },
    { value: 'avancado', label: 'Avançado' },
  ];

  const filteredCourses = useFilteredCourses();

  return (
    <section className="flex flex-wrap items-end justify-between gap-4">
      <form className="flex flex-wrap gap-2 sm:gap-4">
        <div className="grid flex-1 gap-1">
          <label htmlFor="category-filter" className="text-sm">
            Categoria
          </label>
          <Select
            id="category-filter"
            value={category || ''}
            onChange={e => {
              setSearchParams({
                category: e.target.value as typeof category,
              });
            }}
          >
            <option value={''}>Todas</option>;
            {courseCategoryOptions.map(({ value, label }) => {
              return (
                <option key={value} value={value}>
                  {label}
                </option>
              );
            })}
          </Select>
        </div>

        <div className="grid flex-1 gap-1">
          <label htmlFor="level-filter" className="text-sm">
            Nível de dificuldade
          </label>
          <Select
            id="level-filter"
            value={level || ''}
            onChange={e => {
              setSearchParams({ level: e.target.value as typeof level });
            }}
          >
            <option value={''}>Todos</option>
            {courseLevelOptions.map(({ value, label }) => {
              return (
                <option key={value} value={value}>
                  {label}
                </option>
              );
            })}
          </Select>
        </div>
      </form>
      <div className="space-y-0.5">
        <p className="text-sm text-slate-600">
          Mostrando {filteredCourses.length} de {totalCourses} cursos
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
