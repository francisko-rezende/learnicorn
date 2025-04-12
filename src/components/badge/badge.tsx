import { ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const badge = tv({
  base: 'rounded-full px-3 py-1 text-xs font-medium',
  variants: {
    variant: {
      design: 'text-neutral-white bg-purple-600',
      development: 'text-neutral-white bg-blue-600',
      product: 'text-neutral-white bg-green-600',
      data: 'text-neutral-white bg-yellow-600',
      beginner: 'bg-green-100 text-green-800',
      intermediate: 'bg-yellow-100 text-yellow-800',
      advanced: 'bg-red-100 text-red-800',
    },
  },
});

type BadgeProps = ComponentProps<'div'> & VariantProps<typeof badge>;

export const Badge = ({ variant, ...props }: BadgeProps) => {
  return <div className={badge({ variant })} {...props} />;
};
