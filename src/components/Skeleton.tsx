type SkeletonProps = {
  height: string;
  width: string;
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
};

const Skeleton = ({ height, width, rounded = "full" }: SkeletonProps) => {
  return (
    <div className="animate-pulse">
      <div
        className={`h-${height} rounded-${rounded} w-${width} bg-gray-200 dark:bg-gray-700`}
      />
    </div>
  );
};

export default Skeleton;
