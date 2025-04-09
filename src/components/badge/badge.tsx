import { ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const badge = tv({
  base: 'rounded-full px-3 py-1 text-xs font-medium',
  variants: {
    variant: {
      design: 'bg-purple-600 text-white',
      development: 'bg-blue-600 text-white',
      product: 'bg-green-600 text-white',
      data: 'bg-yellow-600 text-white',
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
