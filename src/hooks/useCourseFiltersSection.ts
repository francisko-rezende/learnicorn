import { useFilteredCourses } from './use-filtered-courses';
import { courseClient } from '@/data-access/course-client';
import { useCourseFilters } from './use-course-filters';

export const useCourseFiltersSection = () => {
  const { categoryFilter, difficultyLevelFilter, clearFilters } =
    useCourseFilters();

  const courses = courseClient.getAllCourses();

  const hasFiltered = !!categoryFilter || !!difficultyLevelFilter;
  const totalCourses = courses.length;

  const filteredCourses = useFilteredCourses();
  const numberOfFilteredCourses = filteredCourses.length;

  return {
    handleClearFilters: clearFilters,
    hasFiltered,
    numberOfFilteredCourses,
    totalCourses,
  };
};
