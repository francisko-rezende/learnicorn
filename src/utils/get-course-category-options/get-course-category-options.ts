import { Course } from '@/types/course';

export const getCourseCategoryOptions = (courses: Course[]) => {
  const courseCategoryOptions = Array.from(
    new Set(courses.map(({ category }) => category)),
  )
    .map(category => ({ value: category, label: category }))
    .toSorted((a, b) => {
      return a.value.localeCompare(b.value);
    });

  return courseCategoryOptions;
};
