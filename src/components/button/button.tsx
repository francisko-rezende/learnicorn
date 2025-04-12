import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'cursor-pointer rounded-md font-medium transition-colors disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    variant: {
      primary:
        'bg-accent-base hover:bg-accent-dark active:bg-accent-darker text-neutral-white',
      reset:
        'hover:bg-highlight-light active:bg-highlight-base border-highlight-medium text-highlight-strong border',
      ghost:
        'hover:bg-primary-lighter active:bg-primary-light text-primary-darker',
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
