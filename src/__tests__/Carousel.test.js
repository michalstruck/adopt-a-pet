/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { expect, test } from "@jest/globals";
import { act, render } from "@testing-library/react";
import Carousel from "../components/Carousel";

test("lets users click on thumbnails to make them the hero", async () => {
  const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
  const carousel = render(<Carousel images={images} />);

  const hero = await carousel.findByTestId("hero");
  expect(hero.src).toContain(images[0]);
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const thumb = await carousel.findByTestId(`thumbnail${i}`);

    act(() => thumb.click());

    expect(hero.src).toContain(image);

    expect(thumb.classList.value).toBe(
      "min-width-24 m-2 h-24 w-24 cursor-pointer rounded-full transition-all duration-[50] lg:h-32 lg:w-32 xl:h-44 xl:w-44 shadow-2xl outline outline-4 outline-black"
    );
  }
});
