import { SelectField } from '@/components/select-field';
import { useLevelSelectField } from '@/hooks/use-level-select-field';

export const LevelSelectField = () => {
  const { courseLevelOptions, handleSetLevelQueryParam, level } =
    useLevelSelectField();

  return (
    <SelectField
      label="Nível de dificuldade"
      id="level-filter"
      value={level || ''}
      onChange={e => {
        const newLevelParam = e.target.value as typeof level;
        handleSetLevelQueryParam(newLevelParam);
      }}
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
