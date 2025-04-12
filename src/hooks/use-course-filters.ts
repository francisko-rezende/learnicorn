import { useFiltersStore } from '@/providers/filters-store-provider';

export const useCourseFilters = () => {
  const {
    categoryFilter,
    setCategoryFilter,
    difficultyLevelFilter,
    setDifficultyLevelFilter,
  } = useFiltersStore(state => state);
  const clearFilters = () => {
    setCategoryFilter('');
    setDifficultyLevelFilter('');
  };

  return {
    categoryFilter,
    setCategoryFilter,
    difficultyLevelFilter,
    setDifficultyLevelFilter,
    clearFilters,
  };
};
