'use client';

import { AnimatePresence } from 'motion/react';
import { CourseListNoResults } from '@/components/course-list-no-results';
import { CourseList } from '@/components/course-list';
import { useFilteredCourses } from '@/hooks/use-filtered-courses';

export const CourseListSection = () => {
  const filteredCourses = useFilteredCourses();

  return (
    <section>
      <AnimatePresence mode="wait">
        {filteredCourses.length === 0 ? (
          <CourseListNoResults />
        ) : (
          <CourseList filteredCourses={filteredCourses} />
        )}
      </AnimatePresence>
    </section>
  );
};
