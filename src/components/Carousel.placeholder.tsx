import * as React from "react";
import Skeleton from "./Skeleton";

const CarouselPlaceholder = () => (
  <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-start">
    <Skeleton tailwindStyle="aspect-square w-52 rounded-md shadow-lg md:w-72 lg:w-80 xl:w-96 " />
    <div className="flex flex-row flex-wrap justify-center sm:justify-start">
      <Skeleton tailwindStyle="min-width-24 m-2 h-24 w-24 cursor-pointer rounded-full transition-all duration-[50] lg:h-32 lg:w-32 xl:h-44 xl:w-44 " />
      <Skeleton tailwindStyle="min-width-24 m-2 h-24 w-24 cursor-pointer rounded-full transition-all duration-[50] lg:h-32 lg:w-32 xl:h-44 xl:w-44 " />
      <Skeleton tailwindStyle="min-width-24 m-2 h-24 w-24 cursor-pointer rounded-full transition-all duration-[50] lg:h-32 lg:w-32 xl:h-44 xl:w-44 " />
      <Skeleton tailwindStyle="min-width-24 m-2 h-24 w-24 cursor-pointer rounded-full transition-all duration-[50] lg:h-32 lg:w-32 xl:h-44 xl:w-44 " />
      <Skeleton tailwindStyle="min-width-24 m-2 h-24 w-24 cursor-pointer rounded-full transition-all duration-[50] lg:h-32 lg:w-32 xl:h-44 xl:w-44 " />
    </div>
  </div>
);
export default CarouselPlaceholder;
