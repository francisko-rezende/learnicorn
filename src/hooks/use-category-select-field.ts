import { courseClient } from '@/data-access/course-client';
import { useCourseFilters } from './use-course-filters';
import { ChangeEvent } from 'react';

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

  const handleSetCategoryFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const newCategoryFilter = e.target.value as typeof categoryFilter;
    setCategoryFilter(newCategoryFilter);
  };

  return {
    courseCategoryOptions,
    handleSetCategoryFilter,
    categoryFilter,
  };
};
