import { ComponentProps } from 'react';

type SelectProps = ComponentProps<'select'>;

export const Select = (props: SelectProps) => {
  return (
    <select
      className="border-primary-base focus:ring-primary-darkest w-full rounded text-sm capitalize focus:ring-2 sm:text-base"
      {...props}
    />
  );
};
