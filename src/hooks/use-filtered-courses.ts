import { courseClient } from '@/data-access/course-client';
import { useCourseFilters } from './use-course-filters';

export const useFilteredCourses = () => {
  const { difficultyLevelFilter, categoryFilter } = useCourseFilters();

  const courses = courseClient.getAllCourses();

  const filteredCourses = courses
    .filter(course => {
      if (!difficultyLevelFilter) return true;

      return difficultyLevelFilter === course.level;
    })
    .filter(course => {
      if (!categoryFilter) return true;

      return categoryFilter === course.category;
    });

  return filteredCourses;
};
