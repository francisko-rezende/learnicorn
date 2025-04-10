import { motion } from 'motion/react';

export const CourseListNoResults = () => {
  const noResultsVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.3 },
  };

  return (
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
  );
};
