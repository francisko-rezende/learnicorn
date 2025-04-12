import { useFilteredCourses } from './use-filtered-courses';
import { courseClient } from '@/data-access/course-client';
import { useFiltersStore } from '@/providers/filters-store-provider';

export const useCourseFiltersSection = () => {
  const {
    category,
    difficultyLevel: level,
    setDifficultyLevel,
    setCategory,
  } = useFiltersStore(state => state);

  const courses = courseClient.getAllCourses();

  const hasFiltered = !!category || !!level;
  const totalCourses = courses.length;

  const handleClearFilters = () => {
    setCategory('');
    setDifficultyLevel('');
  };

  const filteredCourses = useFilteredCourses();
  const numberOfFilteredCourses = filteredCourses.length;

  return {
    handleClearFilters,
    hasFiltered,
    numberOfFilteredCourses,
    totalCourses,
  };
};
