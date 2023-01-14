type SkeletonProps = {
  tailwindStyle?: string;
};

const Skeleton = ({ tailwindStyle }: SkeletonProps) => {
  return (
    <div className="animate-pulse">
      <div
        className={`${tailwindStyle} bg-zinc-200 dark:bg-zinc-300 opacity-70`}
      />
    </div>
  );
};

export default Skeleton;
