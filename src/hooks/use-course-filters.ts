import { courseFiltersSearchParams } from '@/lib/nuqs/course-filters-search-params';
import { CategoryFilter } from '@/types/category-filter';
import { DifficultyLevelFilter } from '@/types/difficulty-level-filter';
import { useQueryStates } from 'nuqs';

export const useCourseFilters = () => {
  const [
    { category: categoryFilter, level: difficultyLevelFilter },
    setSearchParams,
  ] = useQueryStates(courseFiltersSearchParams);

  const setCategoryFilter = (newCategoryFilter: CategoryFilter) => {
    setSearchParams({ category: newCategoryFilter });
  };

  const setDifficultyLevelFilter = (
    newDifficultyLevelFilter: DifficultyLevelFilter,
  ) => {
    setSearchParams({ level: newDifficultyLevelFilter });
  };

  const clearFilters = () => {
    setSearchParams(null);
  };

  return {
    categoryFilter,
    setCategoryFilter,
    difficultyLevelFilter,
    setDifficultyLevelFilter,
    clearFilters,
  };
};
