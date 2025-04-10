import { courses } from '@/data/courses';
import { coursesSearchParams } from '@/lib/nuqs/courses-search-params';
import { useQueryStates } from 'nuqs';

export const useFilteredCourses = () => {
  const [{ category, level }] = useQueryStates(coursesSearchParams);

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
