import React, { MouseEvent, useState } from "react";

export const Carousel = ({ images }: { images: string[] }) => {
  const [active, setActive] = useState(0);

  const handleIndexClick = (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    setActive(+event.target.dataset.index!);
  };

  return (
    <div className="flex items-center justify-center flex-col sm:flex-row sm:justify-start">
      <img
        data-testid="hero"
        src={images[active]}
        className="aspect-square w-52 xl:w-96 lg:w-80 md:w-72 rounded-md shadow-lg "
        alt="animal"
      />
      <div className="flex flex-wrap flex-row justify-center sm:justify-start">
        {images.map((photo: string | undefined, i: number) => (
          <img
            data-testid={`thumbnail${i}`}
            alt="img"
            data-index={i}
            onClick={handleIndexClick}
            key={photo}
            src={photo}
            className={
              "xl:w-44 xl:h-44 lg:w-32 lg:h-32 w-24 h-24 min-width-24 rounded-full m-2 cursor-pointer transition-all duration-[50]" +
              (i === active
                ? "shadow-2xl outline-4 outline-black outline"
                : "shadow-lg opacity-70")
            }
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
