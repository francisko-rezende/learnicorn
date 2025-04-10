'use client';
import { courses } from '@/data/courses';
import { useQueryStates } from 'nuqs';
import { coursesSearchParams } from '@/lib/nuqs/courses-search-params';
import { Button } from '@/components/button';
import { useFilteredCourses } from '@/hooks/use-filtered-courses';
import { SelectField } from '@/components/select-field';

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

  const handleSetCategoryQueryParam = (newCategoryParam: typeof category) =>
    setSearchParams({ category: newCategoryParam });

  const handleSetLevelQueryParam = (newLevelParam: typeof level) =>
    setSearchParams({ level: newLevelParam });

  return (
    <section className="flex flex-wrap items-end justify-between gap-4">
      <form className="flex flex-wrap gap-2 sm:gap-4">
        <SelectField
          id="category-filter"
          label="Categoria"
          value={category || ''}
          onChange={e => {
            const newCategoryParam = e.target.value as typeof category;
            handleSetCategoryQueryParam(newCategoryParam);
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
        </SelectField>

        <SelectField
          label="Nível de dificuldade"
          id="level-filter"
          value={level || ''}
          onChange={e => {
            const newLevelParam = e.target.value as typeof level;
            handleSetLevelQueryParam(newLevelParam);
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
        </SelectField>
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
