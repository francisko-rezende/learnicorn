import { ViewTransitionPlaceholder } from '@/components/view-transition-placeholder';
import { Course } from '@/types/course';
import { CourseDetailsTitleSection } from '@/components/course-details-title-section';
import { CourseModulesListSection } from '@/components/course-modules-list-section';

type CourseDetailsScreenProps = {
  course: Course;
};

export const CourseDetailsScreen = ({ course }: CourseDetailsScreenProps) => {
  const { modules, ...courseWithoutModules } = course;

  return (
    <>
      <CourseDetailsTitleSection courseWithoutModules={courseWithoutModules} />
      <CourseModulesListSection modules={modules} />
      <ViewTransitionPlaceholder />
    </>
  );
};
