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
      "xl:w-44 xl:h-44 lg:w-32 lg:h-32 w-24 h-24 min-width-24 rounded-full m-2 cursor-pointer transition-all duration-[50] shadow-2xl outline-4 outline-black outline"
    );
  }
});
