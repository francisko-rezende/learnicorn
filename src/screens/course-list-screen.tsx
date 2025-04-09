'use client';

import Link from 'next/link';
import { courses } from '@/data/courses';
import { useQueryStates } from 'nuqs';
import { coursesSearchParams } from '@/lib/nuqs/courses-search-params';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Select } from '@/components/select';
import { CategoryBadge } from '@/components/category-badge/category-badge';
import { LevelBadge } from '@/components/level-badge/level-badge';
import { Button } from '@/components/button';

export const CourseListScreen = () => {
  const [{ category, level }, setSearchParams] =
    useQueryStates(coursesSearchParams);

  const hasFiltered = !!category || !!level;

  const handleClearFilter = () => setSearchParams(null);

  const totalCourses = courses.length;

  const courseCategories = Array.from(
    new Set(courses.map(({ category }) => category)),
  );

  const courseLevels = Array.from(new Set(courses.map(({ level }) => level)));

  const filteredCourses = courses
    .filter(course => {
      if (!level) return true;

      return level === course.level;
    })
    .filter(course => {
      if (!category) return true;

      return category === course.category;
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

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
    <>
      <section className="space-y-2">
        <h2 className="text-4xl font-bold text-slate-700">Nossos cursos</h2>
        <h3>
          Desbloqueie o conhecimento que você precisa pra chegar no próximo
          nível da sua carreira
        </h3>
      </section>
      <section className="flex flex-wrap items-end justify-between gap-4">
        <form className="flex flex-wrap gap-2 sm:gap-4">
          <div className="grid flex-1 gap-1">
            <label htmlFor="category-filter" className="text-sm">
              Categoria
            </label>
            <Select
              id="category-filter"
              value={category || ''}
              onChange={e => {
                setSearchParams({
                  category: e.target.value as typeof category,
                });
              }}
            >
              <option value={''}>Todas</option>;
              {courseCategories.map(category => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              })}
            </Select>
          </div>

          <div className="grid flex-1 gap-1">
            <label htmlFor="level-filter" className="text-sm">
              Nível de dificuldade
            </label>
            <Select
              id="level-filter"
              value={level || ''}
              onChange={e => {
                setSearchParams({ level: e.target.value as typeof level });
              }}
            >
              <option value={''}>Todos</option>
              {courseLevels.map(category => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              })}
            </Select>
          </div>
        </form>
        <div className="space-y-0.5">
          <p className="text-sm text-slate-600">
            Mostrando {filteredCourses.length} de {totalCourses} cursos
          </p>

          <Button
            variant="reset"
            size="small"
            disabled={!hasFiltered}
            onClick={handleClearFilter}
          >
            Limpar filtros
          </Button>
        </div>
      </section>

      <section>
        <AnimatePresence mode="wait">
          {filteredCourses.length === 0 ? (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
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
                    <motion.li
                      key={id}
                      variants={cardVariants}
                      layout
                      className="flex h-full flex-col rounded-lg border border-slate-300 bg-white shadow-md shadow-slate-300 transition-shadow duration-300 hover:shadow-lg"
                    >
                      <Link href={`/courses/${id}`} className="rounded-lg">
                        <div className="flex h-full flex-col p-4">
                          <div className="mb-4 flex justify-between">
                            <ViewTransition name={`card-${id}-category`}>
                              <CategoryBadge category={category} />
                            </ViewTransition>

                            <ViewTransition name={`card-${id}-level`}>
                              <LevelBadge level={level} />
                            </ViewTransition>
                          </div>

                          <ViewTransition name={`card-${id}-title`}>
                            <h3 className="mb-2 text-xl font-bold text-slate-900">
                              {title}
                            </h3>
                          </ViewTransition>

                          <ViewTransition name={`card-${id}-short-description`}>
                            <p className="flex-grow text-slate-600">
                              {short_description}
                            </p>
                          </ViewTransition>
                        </div>
                      </Link>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </motion.ul>
          )}
        </AnimatePresence>
      </section>
      <ViewTransition name="transition">
        <span className="hidden">transition</span>
      </ViewTransition>
    </>
  );
};
