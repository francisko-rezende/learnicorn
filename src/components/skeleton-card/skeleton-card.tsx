import { SkeletonElement } from '../skeleton-element';

type SkeletonCardProps = {
  className?: string;
};

export const SkeletonCard = ({ className = '' }: SkeletonCardProps) => {
  return (
    <div
      className={`bg-neutral-white border-primary-lighter overflow-hidden rounded-lg border shadow-sm ${className}`}
    >
      <div className="border-primary-lighter border-b p-3">
        <div className="mb-3 flex flex-wrap gap-2">
          <SkeletonElement
            width="w-16 sm:w-20"
            height="h-5 sm:h-6"
            rounded="rounded-full"
          />
          <SkeletonElement
            width="w-20 sm:w-24"
            height="h-5 sm:h-6"
            rounded="rounded-full"
          />
        </div>

        <SkeletonElement width="w-full" height="h-6 sm:h-7" className="mb-3" />

        <SkeletonElement width="w-full" height="h-3 sm:h-4" className="mb-2" />
        <SkeletonElement width="w-3/4" height="h-3 sm:h-4" />
      </div>
    </div>
  );
};
