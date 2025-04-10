import { unstable_ViewTransition as ViewTransition } from 'react';

export const ViewTransitionPlaceholder = () => {
  return (
    <ViewTransition name="transition-placeholder">
      <span className="hidden" />
    </ViewTransition>
  );
};
