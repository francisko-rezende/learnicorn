'use client';

import { motion, AnimatePresence } from 'motion/react';
import { CourseCard } from '@/components/course-card';
import { courses } from '@/data/courses';
import { coursesSearchParams } from '@/lib/nuqs/courses-search-params';
import { useQueryStates } from 'nuqs';

export const CourseListSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

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

  const noResultsVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.3 },
  };

  return (
    <section>
      <AnimatePresence mode="wait">
        {filteredCourses.length === 0 ? (
          <motion.div
            key="no-results"
            initial={noResultsVariants.initial}
            animate={noResultsVariants.animate}
            exit={noResultsVariants.exit}
            transition={noResultsVariants.transition}
          >
            <div className="p-8 text-center">
              <p className="text-lg text-slate-600">
                Nenhum curso cumpre os critérios listados
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.ul
            className="grid grid-cols-[repeat(auto-fill,minmax(min(296px,100%),1fr))] gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            key="results-list"
          >
            <AnimatePresence>
              {filteredCourses.map(course => {
                const { id, title, short_description, category, level } =
                  course;

                return (
                  <CourseCard
                    key={id}
                    courseCategory={category}
                    courseId={id}
                    courseLevel={level}
                    courseShortDescription={short_description}
                    courseTitle={title}
                  />
                );
              })}
            </AnimatePresence>
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  );
};
