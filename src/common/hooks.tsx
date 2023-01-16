import { useState, useCallback } from "react";
import { PetAPIResponse, Pet, Animal } from "./types/APIResponsesTypes";
import useBreedList from "./useBreedList";
import useRequestPets from "./useRequestPets";

const animalsArray: Animal[] = ["dog", "cat", "bird", "reptile", "rabbit"];

export const useRandomPetId = () => {
  const [randomNums, setRandomNums] = useState([
    Math.random(),
    Math.random(),
    Math.random(),
  ]);

  const randomize = () =>
    setRandomNums([Math.random(), Math.random(), Math.random()]);

  const randomAnimal =
    // TODO: fix randomNums being possibly undefined type error
    animalsArray[Math.floor(randomNums[0] ?? 0.54 * animalsArray.length)];

  const { breeds, animal, isSuccess } = useBreedList(randomAnimal);

  const randomBreed = breeds
    ? breeds[Math.floor(randomNums[1] ?? 0.37 * breeds.length)]
    : "";

  const query = useRequestPets(animal, "", randomBreed, isSuccess);

  return {
    ...query,
    randomPetId:
      query.data?.pets[
        Math.floor(randomNums[2] ?? 0.72 * query.data.pets.length)
      ].id ?? Math.floor(Math.random() * 23), //the fallback Math.random()*23 is this value because I admire Michael Jordan.
    randomize,
  };
};

const usePet = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  const requestPets = useCallback(
    async (animal = "", location = "", breed = "") => {
      const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
      );
      const json: PetAPIResponse = await res.json();

      setPets(json.pets);
    },
    [setPets]
  );
  return {
    pets,
    requestPets,
  };
};

export default usePet;
