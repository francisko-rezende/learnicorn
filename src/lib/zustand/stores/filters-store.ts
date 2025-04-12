import { type Category } from '@/types/category';
import { Level } from '@/types/level';
import { createStore } from 'zustand/vanilla';

type CategoryFilterValue = '' | Category;

type DifficultyLevelFilterValue = '' | Level;

export type FiltersState = {
  category: CategoryFilterValue;
  difficultyLevel: DifficultyLevelFilterValue;
};

export type FiltersActions = {
  setCategory: (newCategory: CategoryFilterValue) => void;
  setDifficultyLevel: (newDifficultyLevel: DifficultyLevelFilterValue) => void;
};

export type FiltersStore = FiltersState & FiltersActions;

export const initFiltersStore = (): FiltersState => {
  return {
    category: '',
    difficultyLevel: '',
  };
};

export const defaultInitState: FiltersState = {
  category: '',
  difficultyLevel: '',
};

export const createFiltersStore = (
  initState: FiltersState = defaultInitState,
) => {
  return createStore<FiltersStore>()(set => ({
    ...initState,
    setCategory: newCategory =>
      set(state => ({ ...state, category: newCategory })),
    setDifficultyLevel: newDifficultyLevel =>
      set(state => ({ ...state, difficultyLevel: newDifficultyLevel })),
  }));
};
