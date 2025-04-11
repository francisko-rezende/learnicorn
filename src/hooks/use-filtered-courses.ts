import { courseClient } from '@/data-access/course-client';
import { coursesSearchParams } from '@/lib/nuqs/courses-search-params';
import { useQueryStates } from 'nuqs';

export const useFilteredCourses = () => {
  const [{ category, level }] = useQueryStates(coursesSearchParams);

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
