'use client';

import { motion, AnimatePresence } from 'motion/react';
import { CourseCard } from '@/components/course-card';
import { Course } from '@/types/course';

type CourseListProps = {
  filteredCourses: Course[];
};

export const CourseList = ({ filteredCourses }: CourseListProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <motion.ul
      className="grid grid-cols-[repeat(auto-fill,minmax(min(296px,100%),1fr))] gap-5"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      key="results-list"
    >
      <AnimatePresence>
        {filteredCourses.map(course => {
          const { id, title, short_description, category, level } = course;

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
  );
};
