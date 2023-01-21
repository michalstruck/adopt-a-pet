import * as React from "react";
import Divider from "./Divider";
import Skeleton from "./Skeleton";

const ResultsPlaceholder = () => {
  return (
    <>
      <div className="my-4 flex flex-col items-center sm:mx-8 sm:flex-row sm:items-start">
        {/* Image */}
        <Skeleton tailwindStyle="w-36 h-36 sm:w-48 sm:h-48 rounded-full" />
        <div className="flex flex-col items-center sm:ml-4 sm:items-start">
          {/* Pet name */}
          <Skeleton tailwindStyle="w-64 h-8 mt-2 rounded-full" />
          <div className="flex flex-row items-center">
            {/* Pet localization etc */}
            <Skeleton tailwindStyle="w-24 h-4 mt-2 rounded-full" />
            <Skeleton tailwindStyle="w-24 h-4 mt-2 rounded-full ml-2" />
            <Skeleton tailwindStyle="w-24 h-4 mt-2 rounded-full ml-2" />
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default ResultsPlaceholder;
