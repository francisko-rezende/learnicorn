import { CourseFiltersSection } from '@/components/course-filters-section';
import { CourseListSection } from '@/components/course-list-section';
import { CourseListTitleSection } from '@/components/course-list-title-section';
import { ViewTransitionPlaceholder } from '@/components/view-transition-placeholder';

export const CourseListScreen = () => {
  return (
    <>
      <CourseListTitleSection />
      <CourseFiltersSection />
      <CourseListSection />
      <ViewTransitionPlaceholder />
    </>
  );
};
