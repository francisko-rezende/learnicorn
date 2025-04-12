import { useCourseFilters } from './use-course-filters';

export const useLevelSelectField = () => {
  const { difficultyLevelFilter, setDifficultyLevelFilter } =
    useCourseFilters();

  const courseLevelOptions = [
    { value: 'iniciante', label: 'Iniciante' },
    { value: 'intermediario', label: 'Intermediário' },
    { value: 'avancado', label: 'Avançado' },
  ];

  return {
    difficultyLevelFilter,
    courseLevelOptions,
    handleSetDifficultyLevelFilter: setDifficultyLevelFilter,
  };
};
