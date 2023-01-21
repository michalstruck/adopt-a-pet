import React, { MouseEvent, useState } from "react";
import CarouselPlaceholder from "./Carousel.placeholder";

export const Carousel = ({ images }: { images: string[] | undefined }) => {
  const [active, setActive] = useState(0);

  const handleIndexClick = (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    setActive(+event.target.dataset.index!);
  };

  // TODO: add placeholder
  if (!images) return <CarouselPlaceholder />;

  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-start">
      <img
        data-testid="hero"
        src={images[active]}
        className="aspect-square w-52 rounded-md shadow-lg md:w-72 lg:w-80 xl:w-96 "
        alt="animal"
      />
      <div className="flex flex-row flex-wrap justify-center sm:justify-start">
        {images.map((photo: string | undefined, i: number) => (
          <img
            data-testid={`thumbnail${i}`}
            alt="img"
            data-index={i}
            onClick={handleIndexClick}
            key={photo}
            src={photo}
            className={
              "min-width-24 m-2 h-24 w-24 cursor-pointer rounded-full transition-all duration-[50] lg:h-32 lg:w-32 xl:h-44 xl:w-44 " +
              (i === active
                ? "shadow-2xl outline outline-4 outline-black"
                : "opacity-70 shadow-lg")
            }
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
