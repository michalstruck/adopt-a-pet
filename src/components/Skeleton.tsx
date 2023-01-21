import * as React from "react";

type SkeletonProps = {
  tailwindStyle?: string;
};

const Skeleton = ({ tailwindStyle }: SkeletonProps) => {
  return (
    <div className="animate-pulse">
      <div
        className={`${tailwindStyle} bg-zinc-200 opacity-70 dark:bg-zinc-300`}
      />
    </div>
  );
};

export default Skeleton;
