import React, { MouseEvent, useState } from "react";

interface State {
  active: number;
}

interface Props {
  images: string[];
}
export const Carousel = ({
  images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}) => {
  const [highlight, setHighlight] = useState<State>({ active: 0 });

  const handleIndexClick = (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    setHighlight({
      active: parseInt(event.target.dataset.index!, 10), //! tells ts im sure that dataset.value is present, ?? "" makes ts fall back to a default - "" - if dataset.index in undef/null
    });
  };
  const { active } = highlight;

  return (
    <div
      className="flex 
      items-center 
      h-96"
    >
      <img
        src={images[active]}
        className="max-w-[45%] max-h-96 rounded-md  "
        alt="animal"
      />
      <div className="w-6/12">
        {images.map((photo: string | undefined, index: number) => (
          <img
            alt="img"
            data-index={index}
            onClick={handleIndexClick}
            key={photo}
            src={photo}
            className={
              index === active
                ? "float-left w-28 h-28 rounded-full inline-block m-4 cursor-pointer border-2 border-solid border-black"
                : "float-left w-28 h-28 rounded-full inline-block m-4 cursor-pointer border-solid border-black opacity-60"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
