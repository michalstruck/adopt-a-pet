import * as React from "react";

type SkeletonProps = {
  tailwindStyle?: string;
};

export const Skeleton = ({ tailwindStyle }: SkeletonProps) => {
  return (
    <div className="animate-pulse">
      <div className={`${tailwindStyle} bg-rose-300 opacity-70`} />
    </div>
  );
};
