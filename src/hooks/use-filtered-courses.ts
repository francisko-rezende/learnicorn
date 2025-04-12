import { courseClient } from '@/data-access/course-client';
import { useFiltersStore } from '@/providers/filters-store-provider';

export const useFilteredCourses = () => {
  const { category, difficultyLevel: level } = useFiltersStore(state => state);

  const courses = courseClient.getAllCourses();

  const filteredCourses = courses
    .filter(course => {
      if (!level) return true;

      return level === course.level;
    })
    .filter(course => {
      if (!category) return true;

      return category === course.category;
    });

  return filteredCourses;
};
