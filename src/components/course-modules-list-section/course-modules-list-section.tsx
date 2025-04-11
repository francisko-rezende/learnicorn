import { CourseModule } from '@/types/course-module';
import { CourseModuleCard } from '@/components/course-module-card';

type CourseModulesListSectionProps = {
  modules: CourseModule[];
};

export const CourseModulesListSection = ({
  modules,
}: CourseModulesListSectionProps) => {
  return (
    <section className="motion-safe:animate-fade-in-up space-y-2">
      <h3 className="text-2xl font-bold">Módulos</h3>

      <ol className="grid max-w-4xl grid-cols-1 gap-5">
        {modules.map(module => {
          return <CourseModuleCard key={module.lessons} module={module} />;
        })}
      </ol>
    </section>
  );
};
