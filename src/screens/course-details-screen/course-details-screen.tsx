import { LucideBookOpen } from 'lucide-react';
import { ViewTransitionPlaceholder } from '@/components/view-transition-placeholder';
import { Course } from '@/types/course';
import { CourseDetailsTitleSection } from '@/components/course-details-title-section';
import { CourseModulesListSection } from '@/components/course-modules-list-section';

type CourseDetailsScreenProps = {
  course: Course;
};

export const CourseDetailsScreen = ({ course }: CourseDetailsScreenProps) => {
  const { modules } = course;

  return (
    <>
      <CourseDetailsTitleSection course={course} />
      <CourseModulesListSection modules={modules} />
      <ViewTransitionPlaceholder />
    </>
  );
};
