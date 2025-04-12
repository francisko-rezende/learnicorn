import { useFiltersStore } from '@/providers/filters-store-provider';

export const useLevelSelectField = () => {
  const { setDifficultyLevel, difficultyLevel } = useFiltersStore(
    state => state,
  );

  const courseLevelOptions = [
    { value: 'iniciante', label: 'Iniciante' },
    { value: 'intermediario', label: 'Intermediário' },
    { value: 'avancado', label: 'Avançado' },
  ];

  const handleSetDifficultyLevelFilter = (
    newDifficultyLevel: typeof difficultyLevel,
  ) => setDifficultyLevel(newDifficultyLevel);

  return {
    level: difficultyLevel,
    courseLevelOptions,
    handleSetLevelQueryParam: handleSetDifficultyLevelFilter,
  };
};
