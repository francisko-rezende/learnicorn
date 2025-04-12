import { SelectField } from '@/components/select-field';
import { useLevelSelectField } from '@/hooks/use-level-select-field';

export const LevelSelectField = () => {
  const {
    courseLevelOptions,
    handleSetDifficultyLevelFilter,
    difficultyLevelFilter,
  } = useLevelSelectField();

  return (
    <SelectField
      label="Nível de dificuldade"
      id="level-filter"
      value={difficultyLevelFilter || ''}
      onChange={handleSetDifficultyLevelFilter}
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
  );
};
