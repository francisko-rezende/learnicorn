import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { CategoryBadge } from '@/components/category-badge/category-badge';
import { LevelBadge } from '@/components/level-badge/level-badge';
import { Category } from '@/types/category';
import { Level } from '@/types/level';
import { motion } from 'motion/react';

type CourseCardProps = {
  courseCategory: Category;
  courseId: number;
  courseLevel: Level;
  courseTitle: string;
  courseShortDescription: string;
};

export const CourseCard = ({
  courseId,
  courseCategory,
  courseLevel,
  courseShortDescription,
  courseTitle,
}: CourseCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.li
      key={courseId}
      variants={cardVariants}
      layout
      className="border-primary-base shadow-primary-base bg-neutral-white flex h-full flex-col rounded-lg border shadow-md transition-shadow duration-300 hover:shadow-lg"
    >
      <Link href={`/courses/${courseId}`} className="rounded-lg">
        <div className="flex h-full flex-col p-4">
          <div className="mb-4 flex justify-between">
            <ViewTransition name={`card-${courseId}-category`}>
              <CategoryBadge category={courseCategory} />
            </ViewTransition>

            <ViewTransition name={`card-${courseId}-level`}>
              <LevelBadge level={courseLevel} />
            </ViewTransition>
          </div>

          <ViewTransition name={`card-${courseId}-title`}>
            <h3 className="text-primary-black mb-2 text-xl font-bold">
              {courseTitle}
            </h3>
          </ViewTransition>

          <ViewTransition name={`card-${courseId}-short-description`}>
            <p className="text-primary-dark flex-grow">
              {courseShortDescription}
            </p>
          </ViewTransition>
        </div>
      </Link>
    </motion.li>
  );
};
