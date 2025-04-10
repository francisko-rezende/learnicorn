'use client';

import { SelectField } from '@/components/select-field';
import { useCategorySelectField } from '@/hooks/use-category-select-field';

export const CategorySelectField = () => {
  const { courseCategoryOptions, handleSetCategoryQueryParam, category } =
    useCategorySelectField();

  return (
    <SelectField
      id="category-filter"
      label="Categoria"
      value={category || ''}
      onChange={e => {
        const newCategoryParam = e.target.value as typeof category;
        handleSetCategoryQueryParam(newCategoryParam);
      }}
    >
      <option value={''}>Todas</option>
      {courseCategoryOptions.map(({ value, label }) => {
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </SelectField>
  );
};
