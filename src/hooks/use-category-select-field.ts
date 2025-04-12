import { courseClient } from '@/data-access/course-client';
import { useFiltersStore } from '@/providers/filters-store-provider';

export const useCategorySelectField = () => {
  const { category, setCategory } = useFiltersStore(state => state);

  const courses = courseClient.getAllCourses();

  const courseCategoryOptions = Array.from(
    new Set(courses.map(({ category }) => category)),
  )
    .map(category => ({ value: category, label: category }))
    .toSorted((a, b) => {
      return a.value.localeCompare(b.value);
    });

  const handleSetCategoryFilter = (newCategory: typeof category) =>
    setCategory(newCategory);

  return {
    courseCategoryOptions,
    handleSetCategoryQueryParam: handleSetCategoryFilter,
    category,
  };
};
