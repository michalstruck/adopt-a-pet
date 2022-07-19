import React, { MouseEvent, useEffect, useState } from "react";

export const Carousel = () => {
  const [highlight, setHighlight] = useState({ active: 0 });
  const [images, setImages] = useState([""]);

  useEffect(() => {
    const fetchRand = async () => {
      fetch("https://dog.ceo/api/breeds/image/random/6")
        .then((res) => res.json())
        .then((data) => {
          setImages(() => data.message);
        });
    };
    fetchRand();
  }, []);

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
        className="max-w-[45%] aspect-square max-h-96 rounded-md shadow-lg "
        alt="animal"
      />
      <div className="flex flex-wrap flex-row">
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
                ? "float-left aspect-square h-6/12 w-3/12 rounded-full shadow-2xl m-2 cursor-pointer transition-all duration-75 border-2 box-border border-solid border-black"
                : "float-left aspect-square h-6/12 w-3/12 rounded-full shadow-lg m-2 cursor-pointer transition-all duration-75 opacity-70"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
