import { CourseModule } from '@/types/course-module';
import { LucideBookOpen } from 'lucide-react';

type CourseModuleCard = {
  module: CourseModule;
};

export const CourseModuleCard = ({ module }: CourseModuleCard) => {
  const { title, lessons } = module;
  return (
    <li
      key={title}
      className="flex h-full items-start rounded-lg border border-slate-300 bg-white px-4 shadow-md shadow-slate-300"
    >
      <div className="mt-4.5 rounded-full bg-slate-600/10 p-1">
        <LucideBookOpen size={14} />
      </div>
      <div className="flex h-full flex-col p-4">
        <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
        <p>{lessons} aulas</p>
      </div>
    </li>
  );
};
