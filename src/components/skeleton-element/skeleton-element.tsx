type SkeletonElementProps = {
  className?: string;
  width?: string;
  height?: string;
  rounded?: string;
  animate?: boolean;
};

export const SkeletonElement = ({
  className = '',
  width = 'w-full',
  height = 'h-4',
  rounded = 'rounded',
  animate = true,
}: SkeletonElementProps) => {
  const animationClass = animate ? 'animate-pulse' : '';

  return (
    <div
      className={`bg-gray-200 ${width} ${height} ${rounded} ${animationClass} ${className}`}
    ></div>
  );
};
