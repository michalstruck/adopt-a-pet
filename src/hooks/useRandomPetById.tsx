import { useState } from "react";
import { Animal } from "../common/types/APIResponsesTypes";
import useBreedList from "./useBreedList";
import useRequestPets from "./useRequestPets";

const animalsArray: Animal[] = ["dog", "cat", "bird", "reptile", "rabbit"];

const getRandomIndex = (randomNumber: number, arrayLength: number) =>
  Math.floor(randomNumber * arrayLength);

const useRandomPetById = () => {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([
    Math.random(),
    Math.random(),
    Math.random(),
  ]);

  const randomize = () =>
    setRandomNumbers([Math.random(), Math.random(), Math.random()]);

  const randomAnimal =
    // TODO: fix randomNumbers being possibly undefined type error
    animalsArray[getRandomIndex(randomNumbers[0] ?? 0.54, animalsArray.length)];

  const { breeds, animal, isSuccess } = useBreedList(randomAnimal);

  const randomBreed = breeds
    ? breeds[getRandomIndex(randomNumbers[1] ?? 0.37, breeds.length)]
    : "";

  const { data, isLoading, isError } = useRequestPets(
    animal,
    "",
    randomBreed,
    isSuccess
  );

  return {
    isLoading,
    isError,
    randomPetId:
      data?.[getRandomIndex(randomNumbers[2] ?? 0.86, data.length)]?.id,
    randomize,
  };
};

export default useRandomPetById;
