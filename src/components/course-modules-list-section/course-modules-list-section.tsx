import { CourseModule } from '@/types/course-module';
import { LucideBookOpen } from 'lucide-react';

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
          const { title, lessons } = module;

          return (
            <li
              key={title}
              className="flex h-full items-start rounded-lg border border-slate-300 bg-white px-4 shadow-md shadow-slate-300 transition-shadow duration-300"
            >
              <div className="mt-4.5 rounded-full bg-slate-600/10 p-1">
                <LucideBookOpen size={14} />
              </div>
              <div className="flex h-full flex-col p-4">
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {title}
                </h3>
                <p>{lessons} aulas</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
