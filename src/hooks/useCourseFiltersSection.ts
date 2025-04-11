import { coursesSearchParams } from '@/lib/nuqs/courses-search-params';
import { useQueryStates } from 'nuqs';
import { useFilteredCourses } from './use-filtered-courses';
import { courseClient } from '@/data-access/course-client';

export const useCourseFiltersSection = () => {
  const [{ category, level }, setSearchParams] =
    useQueryStates(coursesSearchParams);

  const courses = courseClient.getAllCourses();

  const hasFiltered = !!category || !!level;
  const totalCourses = courses.length;

  const handleClearFilter = () => setSearchParams(null);

  const filteredCourses = useFilteredCourses();
  const numberOfFilteredCourses = filteredCourses.length;

  return {
    handleClearFilter,
    hasFiltered,
    numberOfFilteredCourses,
    totalCourses,
  };
};
