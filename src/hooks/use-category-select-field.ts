import { courseClient } from '@/data-access/course-client';
import { useCourseFilters } from './use-course-filters';
import { ChangeEvent } from 'react';
import { getCourseCategoryOptions } from '@/utils/get-course-category-options';

export const useCategorySelectField = () => {
  const { categoryFilter, setCategoryFilter } = useCourseFilters();

  const courses = courseClient.getAllCourses();

  const courseCategoryOptions = getCourseCategoryOptions(courses);

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
