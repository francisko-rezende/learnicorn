import { CourseFiltersSection } from '@/components/course-filters-section';
import { CourseListSection } from '@/components/course-list-section';
import { ViewTransitionPlaceholder } from '@/components/view-transition-placeholder';

export const CourseListScreen = () => {
  return (
    <>
      <section className="space-y-2">
        <h2 className="text-4xl font-bold text-slate-700">Nossos cursos</h2>
        <h3>
          Desbloqueie o conhecimento que você precisa pra chegar no próximo
          nível da sua carreira
        </h3>
      </section>

      <CourseFiltersSection />
      <CourseListSection />
      <ViewTransitionPlaceholder />
    </>
  );
};
