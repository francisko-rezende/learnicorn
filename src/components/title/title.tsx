import { ComponentProps } from 'react';

type TitleProps = ComponentProps<'h2'>;
export const Title = (props: TitleProps) => {
  return <h2 className="text-primary-darker text-4xl font-bold" {...props} />;
};
