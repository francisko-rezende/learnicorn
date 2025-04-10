import { ComponentProps } from 'react';
import { Select } from '@/components/select';

type SelectFieldProps = {
  label: string;
} & ComponentProps<typeof Select>;

export const SelectField = ({
  label,
  id,
  value,
  ...props
}: SelectFieldProps) => {
  return (
    <div className="grid flex-1 gap-1">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <Select id={id} value={value || ''} {...props} />
    </div>
  );
};
