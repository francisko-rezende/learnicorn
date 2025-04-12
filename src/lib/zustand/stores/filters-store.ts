import { CategoryFilter } from '@/types/category-filter';
import { DifficultyLevelFilter } from '@/types/difficulty-level-filter';
import { createStore } from 'zustand/vanilla';

export type FiltersState = {
  categoryFilter: CategoryFilter;
  difficultyLevelFilter: DifficultyLevelFilter;
};

export type FiltersActions = {
  setCategoryFilter: (newCategory: CategoryFilter) => void;
  setDifficultyLevelFilter: (newDifficultyLevel: DifficultyLevelFilter) => void;
};

export type FiltersStore = FiltersState & FiltersActions;

export const initFiltersStore = (): FiltersState => {
  return {
    categoryFilter: '',
    difficultyLevelFilter: '',
  };
};

export const defaultInitState: FiltersState = {
  categoryFilter: '',
  difficultyLevelFilter: '',
};

export const createFiltersStore = (
  initState: FiltersState = defaultInitState,
) => {
  return createStore<FiltersStore>()(set => ({
    ...initState,
    setCategoryFilter: newCategory =>
      set(state => ({ ...state, categoryFilter: newCategory })),
    setDifficultyLevelFilter: newDifficultyLevel =>
      set(state => ({ ...state, difficultyLevelFilter: newDifficultyLevel })),
  }));
};
