import React, { MouseEvent, useState } from "react";

interface State {
  active: number;
}

export const Carousel = ({
  images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}) => {
  const [highlight, setHighlight] = useState<State>({ active: 0 });

  const handleIndexClick = (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    setHighlight({
      active: +event.target.dataset.index!,
    });
  };
  const { active } = highlight;

  return (
    <div
      className="flex 
      items-center"
    >
      <img
        data-testid="hero"
        src={images[active]}
        className="max-w-[45%] max-h-96 rounded-md shadow-lg "
        alt="animal"
      />
      <div className="w-6/12">
        {images.map((photo: string | undefined, i: number) => (
          <img
            data-testid={`thumbnail${i}`}
            alt="img"
            data-index={i}
            onClick={handleIndexClick}
            key={photo}
            src={photo}
            className={
              i === active
                ? "float-left h-6/12 w-3/12 rounded-full shadow-2xl m-2 cursor-pointer border-2 border-solid border-black"
                : "float-left h-6/12 w-3/12 rounded-full shadow-lg m-2 cursor-pointer opacity-60"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
