import { SkeletonCard } from '../skeleton-card';
import { SkeletonElement } from '../skeleton-element';

type CourseListScreenLoaderProps = {
  cardCount?: number;
};

export const CourseListScreenLoader = ({
  cardCount = 8,
}: CourseListScreenLoaderProps) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
      <main className="mx-auto w-full px-3 py-6 sm:px-4 sm:py-8">
        <SkeletonElement
          width="w-36 sm:w-48"
          height="h-8 sm:h-10"
          className="mb-2 sm:mb-3"
        />
        <SkeletonElement
          width="w-full sm:w-96"
          height="h-4 sm:h-5"
          className="mb-6 sm:mb-8"
        />

        <div className="mb-6 flex w-full flex-wrap justify-start gap-3 sm:mb-8">
          <div className="flex w-full flex-wrap gap-3 sm:w-auto">
            <SkeletonElement
              width="w-full sm:w-40"
              height="h-10"
              className="max-w-xs"
            />
            <SkeletonElement
              width="w-full sm:w-40"
              height="h-10"
              className="max-w-xs"
            />
          </div>

          <div className="mt-3 ml-auto flex flex-wrap items-center gap-3 sm:mt-0">
            <SkeletonElement width="w-32 sm:w-40" height="h-5" />
            <SkeletonElement width="w-24 sm:w-28" height="h-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {Array(cardCount)
            .fill('')
            .map((_, i) => (
              <SkeletonCard key={i} />
            ))}
        </div>
      </main>
    </div>
  );
};
