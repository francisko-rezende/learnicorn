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
      className="border-primary-base shadow-primary-base bg-neutral-white flex h-full items-start rounded-lg border px-4 shadow-md"
    >
      <div className="bg-transparent-primary mt-4.5 rounded-full p-1">
        <LucideBookOpen size={14} />
      </div>
      <div className="flex h-full flex-col p-4">
        <h3 className="text-primary-black mb-2 text-xl font-bold">{title}</h3>
        <p>{lessons} aulas</p>
      </div>
    </li>
  );
};
