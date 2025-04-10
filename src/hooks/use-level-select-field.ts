import { coursesSearchParams } from '@/lib/nuqs/courses-search-params';
import { useQueryStates } from 'nuqs';

export const useLevelSelectField = () => {
  const [{ level }, setSearchParams] = useQueryStates(coursesSearchParams);

  const courseLevelOptions = [
    { value: 'iniciante', label: 'Iniciante' },
    { value: 'intermediario', label: 'Intermediário' },
    { value: 'avancado', label: 'Avançado' },
  ];

  const handleSetLevelQueryParam = (newLevelParam: typeof level) =>
    setSearchParams({ level: newLevelParam });

  return { level, courseLevelOptions, handleSetLevelQueryParam };
};
