import { type Category } from '@/types/category';
import { Level } from '@/types/level';
import { createStore } from 'zustand/vanilla';

type CategoryFilterValue = '' | Category;

type DifficultyLevelFilterValue = '' | Level;

export type FiltersState = {
  categoryFilter: CategoryFilterValue;
  difficultyLevelFilter: DifficultyLevelFilterValue;
};

export type FiltersActions = {
  setCategoryFilter: (newCategory: CategoryFilterValue) => void;
  setDifficultyLevelFilter: (
    newDifficultyLevel: DifficultyLevelFilterValue,
  ) => void;
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
