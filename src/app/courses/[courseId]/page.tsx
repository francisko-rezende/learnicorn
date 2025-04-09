import { courses } from '@/data/courses';
import { notFound } from 'next/navigation';
import { LucideBookOpen } from 'lucide-react';
import { unstable_ViewTransition as ViewTransition } from 'react';

type CourseDetailsPageProps = {
  params: Promise<{
    courseId: string;
  }>;
};

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { courseId } = await params;

  const course = courses.find(({ id }) => id === Number(courseId));

  if (!course) {
    notFound();
  }

  const categoryColors = {
    Design: 'bg-purple-600',
    Desenvolvimento: 'bg-blue-600',
    Produto: 'bg-green-600',
    Dados: 'bg-yellow-600',
  };

  const levelColors = {
    iniciante: 'bg-green-100 text-green-800',
    intermediario: 'bg-yellow-100 text-yellow-800',
    avancado: 'bg-red-100 text-red-800',
  };

  const difficultyLabels = {
    iniciante: 'Iniciante',
    intermediario: 'Intermediário',
    avancado: 'Avançado',
  };

  return (
    <>
      <section className="space-y-2">
        <div className="mb-4 flex gap-1">
          <div
            className={`${categoryColors[course.category] || 'bg-slate-600'} rounded-full px-3 py-1 text-xs font-medium text-white`}
          >
            <span className="sr-only">Categoria: </span>
            {course.category}
          </div>

          <div
            className={`${levelColors[course.level] || 'bg-slate-100 text-gray-800'} rounded-full px-3 py-1 text-xs font-medium`}
          >
            <span className="sr-only">Nível de dificuldade:</span>
            {difficultyLabels[course.level] || course.level}
          </div>
        </div>

        <ViewTransition name={`card-${courseId}-title`}>
          <h2 className="text-4xl font-bold text-slate-700">{course.title}</h2>
        </ViewTransition>
        <h3 className="italic">{course.short_description}</h3>
        <p className="max-w-4xl text-lg">{course.full_description}</p>
        <dl className="flex gap-1">
          <dt className="font-semibold">Duração:</dt>
          <dd>
            <time dateTime={`PT${course.duration_hours}H`}>
              {course.duration_hours}h
            </time>
          </dd>
        </dl>
      </section>

      <section className="space-y-2">
        <h3 className="text-2xl font-bold">Módulos</h3>

        <ol className="grid max-w-4xl grid-cols-1 gap-5">
          {course.modules.map(module => {
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
      <ViewTransition name="transition">
        <span className="hidden">transition</span>
      </ViewTransition>
    </>
  );
}
