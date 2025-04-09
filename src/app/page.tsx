import Link from 'next/link';
import { courses } from '@/data/courses';
import { type SearchParams } from 'nuqs/server';
import { loadFilters } from '@/lib/nuqs/courses-search-params';
import { CourseListScreen } from '@/screens/course-list-screen';
import { Suspense } from 'react';

type HomePageProps = Readonly<{
  searchParams: Promise<SearchParams>;
}>;

export default async function Home({ searchParams }: HomePageProps) {
  // const { category, level } = await loadFilters(searchParams);

  return (
    <Suspense>
      <CourseListScreen />
    </Suspense>
  );

  // const [selectedCategory, setSelectedCategory] = useQueryState(
  //   'category',
  //   parseAsString.withDefault(''),
  // );
  // const totalCourses = courses.length;
  // const courseCategories = Array.from(
  //   new Set(courses.map(({ category }) => category)),
  // );
  //
  // const courseLevels = Array.from(
  //   new Set(
  //     courses.map(
  //       ({ level }) => level.charAt(0).toUpperCase() + level.slice(1),
  //     ),
  //   ),
  // );
  //
  // const difficultyLabels = {
  //   iniciante: 'Iniciante',
  //   intermediario: 'Intermediário',
  //   avancado: 'Avançado',
  // };
  //
  // const categoryColors = {
  //   Design: 'bg-purple-600',
  //   Desenvolvimento: 'bg-blue-600',
  //   Produto: 'bg-green-600',
  //   Dados: 'bg-yellow-600',
  // };
  //
  // const levelColors = {
  //   iniciante: 'bg-green-100 text-green-800',
  //   intermediario: 'bg-yellow-100 text-yellow-800',
  //   avancado: 'bg-red-100 text-red-800',
  // };
  //
  // return (
  //   <>
  //     <section className="space-y-2">
  //       <h2 className="text-4xl font-bold text-slate-700">Nossos cursos</h2>
  //       <h3>
  //         Desbloqueie o conhecimento que você precisa pra chegar no próximo
  //         nível da sua carreira
  //       </h3>
  //     </section>
  //     <section className="flex flex-wrap items-end justify-between gap-4">
  //       <form className="flex flex-wrap gap-2 sm:gap-4">
  //         <div className="grid flex-1 gap-1">
  //           <label htmlFor="category-filter" className="text-sm">
  //             Categoria
  //           </label>
  //           <select
  //             className="w-full rounded border-slate-300 capitalize focus:ring-2 focus:ring-slate-800"
  //             id="category-filter"
  //           >
  //             {courseCategories.map(category => {
  //               return (
  //                 <option key={category} value={category}>
  //                   {category}
  //                 </option>
  //               );
  //             })}
  //           </select>
  //         </div>
  //
  //         <div className="grid flex-1 gap-1">
  //           <label htmlFor="level-filter" className="text-sm">
  //             Nível de dificuldade
  //           </label>
  //           <select
  //             className="w-full rounded border-slate-300 capitalize focus:ring-2 focus:ring-slate-800"
  //             id="level-filter"
  //           >
  //             {courseLevels.map(category => {
  //               return (
  //                 <option key={category} value={category}>
  //                   {category}
  //                 </option>
  //               );
  //             })}
  //           </select>
  //         </div>
  //       </form>
  //       <p className="text-sm text-slate-600">
  //         Mostrando {totalCourses} cursos
  //       </p>
  //     </section>
  //
  //     <section>
  //       <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(296px,100%),1fr))] gap-5">
  //         {courses.map(course => {
  //           const { id, title, short_description, category, level } = course;
  //
  //           return (
  //             <li
  //               key={id}
  //               className="flex h-full flex-col rounded-lg border border-slate-300 bg-white shadow-md shadow-slate-300 transition-shadow duration-300 hover:shadow-lg"
  //             >
  //               <Link href={`/courses/${id}`} className="rounded-lg">
  //                 <div className="flex h-full flex-col p-4">
  //                   <div className="mb-4 flex justify-between">
  //                     <div
  //                       className={`${categoryColors[category] || 'bg-slate-600'} rounded-full px-3 py-1 text-xs font-medium text-white`}
  //                     >
  //                       <span className="sr-only">Categoria: </span>
  //                       {category}
  //                     </div>
  //
  //                     <div
  //                       className={`${levelColors[level] || 'bg-slate-100 text-gray-800'} rounded-full px-3 py-1 text-xs font-medium`}
  //                     >
  //                       <span className="sr-only">Nível de dificuldade:</span>
  //                       {difficultyLabels[level] || level}
  //                     </div>
  //                   </div>
  //
  //                   <h3 className="mb-2 text-xl font-bold text-slate-900">
  //                     {title}
  //                   </h3>
  //
  //                   <p className="flex-grow text-slate-600">
  //                     {short_description}
  //                   </p>
  //                 </div>
  //               </Link>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </section>
  //   </>
  // );
}
