import { ComponentProps } from 'react';

type SelectProps = ComponentProps<'select'>;

export const Select = (props: SelectProps) => {
  return (
    <select
      className="w-full rounded border-slate-300 text-sm capitalize focus:ring-2 focus:ring-slate-800 sm:text-base"
      {...props}
    />
  );
};
