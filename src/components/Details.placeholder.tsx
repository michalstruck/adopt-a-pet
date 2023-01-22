import * as React from "react";
import CarouselPlaceholder from "./Carousel.placeholder";
import Skeleton from "./Skeleton";
const DetailsPlaceholder = () => (
  <div className="mx-auto w-10/12 rounded-lg bg-red-100 p-4 shadow-lg">
    <CarouselPlaceholder />
    <div className="flex flex-col items-center justify-center">
      <Skeleton tailwindStyle="mt-8 items-center h-[3.75rem] w-96 rounded-full" />
      <div className="mt-6 flex flex-row">
        <Skeleton tailwindStyle="h-[2.25rem] w-24 rounded-full " />
        <Skeleton tailwindStyle="h-[2.25rem] ml-4 w-24 rounded-full" />
        <Skeleton tailwindStyle="h-[2.25rem] ml-4 w-24 rounded-full" />
      </div>
      <Skeleton tailwindStyle="my-8 h-12 w-20 rounded-md px-6 py-1" />
      <div className="flex flex-row flex-wrap justify-center pr-4">
        <Skeleton tailwindStyle="mt-3 h-5 w-64 rounded-full mr-2" />
        <Skeleton tailwindStyle="mt-3 h-5 w-48 rounded-full mr-2" />
        <Skeleton tailwindStyle="mt-3 h-5 w-56 rounded-full mr-2" />
        <Skeleton tailwindStyle="mt-3 h-5 w-56 rounded-full mr-2" />
        <Skeleton tailwindStyle="mt-3 h-5 w-64 rounded-full mr-2" />
        <Skeleton tailwindStyle="mt-3 h-5 w-48 rounded-full mr-2" />
        <Skeleton tailwindStyle="mt-3 h-5 w-56 rounded-full mr-2" />
        <Skeleton tailwindStyle="mt-3 h-5 w-64 rounded-full mr-2" />
        <Skeleton tailwindStyle="mt-3 h-5 w-48 rounded-full mr-2" />
        <Skeleton tailwindStyle="mt-3 h-5 w-32 rounded-full mr-2" />
        <Skeleton tailwindStyle="mt-3 h-5 w-56 rounded-full mr-2" />
        <Skeleton tailwindStyle="mt-3 h-5 w-64 rounded-full mr-2" />
        <Skeleton tailwindStyle="mt-3 h-5 w-48 rounded-full mr-2" />
        <Skeleton tailwindStyle="mt-3 h-5 w-56 rounded-full mr-2" />
        <Skeleton tailwindStyle="mt-3 h-5 w-48 rounded-full mr-2" />
        <Skeleton tailwindStyle="mt-3 h-5 w-64 rounded-full mr-2" />
        <Skeleton tailwindStyle="mt-3 h-5 w-32 rounded-full" />
      </div>
    </div>
  </div>
);

export default DetailsPlaceholder;
