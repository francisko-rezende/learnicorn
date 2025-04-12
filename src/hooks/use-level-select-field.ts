import { ChangeEvent } from 'react';
import { useCourseFilters } from './use-course-filters';
import { type DifficultyLevelFilter } from '@/types/difficulty-level-filter';

export const useLevelSelectField = () => {
  const { difficultyLevelFilter, setDifficultyLevelFilter } =
    useCourseFilters();

  const courseLevelOptions = [
    { value: 'iniciante', label: 'Iniciante' },
    { value: 'intermediario', label: 'Intermediário' },
    { value: 'avancado', label: 'Avançado' },
  ];

  const handleSetDifficultyLevelFilter = (
    e: ChangeEvent<HTMLSelectElement>,
  ) => {
    const newDifficultyLevelFilter = e.target.value as DifficultyLevelFilter;
    setDifficultyLevelFilter(newDifficultyLevelFilter);
  };

  return {
    difficultyLevelFilter,
    courseLevelOptions,
    handleSetDifficultyLevelFilter,
  };
};
