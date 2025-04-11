import { courseClient } from '@/data-access/course-client';
import { coursesSearchParams } from '@/lib/nuqs/courses-search-params';
import { useQueryStates } from 'nuqs';

export const useCategorySelectField = () => {
  const [{ category }, setSearchParams] = useQueryStates(coursesSearchParams);

  const courses = courseClient.getAllCourses();

  const courseCategoryOptions = Array.from(
    new Set(courses.map(({ category }) => category)),
  )
    .map(category => ({ value: category, label: category }))
    .toSorted((a, b) => {
      return a.value.localeCompare(b.value);
    });

  const handleSetCategoryQueryParam = (newCategoryParam: typeof category) =>
    setSearchParams({ category: newCategoryParam });

  return { courseCategoryOptions, handleSetCategoryQueryParam, category };
};
