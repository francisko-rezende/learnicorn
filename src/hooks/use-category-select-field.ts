import { courseClient } from '@/data-access/course-client';
import { useCourseFilters } from './use-course-filters';

export const useCategorySelectField = () => {
  const { categoryFilter, setCategoryFilter } = useCourseFilters();

  const courses = courseClient.getAllCourses();

  const courseCategoryOptions = Array.from(
    new Set(courses.map(({ category }) => category)),
  )
    .map(category => ({ value: category, label: category }))
    .toSorted((a, b) => {
      return a.value.localeCompare(b.value);
    });

  return {
    courseCategoryOptions,
    handleSetCategoryFilter: setCategoryFilter,
    categoryFilter,
  };
};
