import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'cursor-pointer rounded-md font-medium transition-colors disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    variant: {
      primary:
        'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800',
      reset:
        'border border-rose-300 text-rose-700 hover:bg-rose-100 active:bg-rose-200',
    },
    size: {
      small: 'px-3 py-1 text-sm',
      medium: 'px-4 py-2',
      large: 'px-6 py-3 text-lg',
    },
  },
});

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>;

export const Button = ({ variant, size, ...props }: ButtonProps) => {
  return <button className={button({ variant, size })} {...props} />;
};
