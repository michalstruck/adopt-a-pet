import { useState, useCallback } from "react";
import { useQuery } from "react-query";
import { PetAPIResponse, Pet, Animal } from "./APIResponsesTypes";
import useBreedList from "./useBreedList";

const animalsArray: Animal[] = ["dog", "cat", "bird", "reptile", "rabbit"];

const useRequestPets = (
  animal = "",
  location = "",
  breed = "",
  enabled = false
) => {
  const query = useQuery(
    ["requestPets", location, animal, breed],
    () =>
      fetch(
        `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed.replace(
          " ",
          "+"
        )}`
      ).then((res) => res.json()),
    { enabled }
  );
  return query;
};

//fix returning undefined pet id
export const useRandomPetId = () => {
  const [randNums, setRandNums] = useState(() => [
    Math.random(),
    Math.random(),
    Math.random(),
  ]);
  const randAnimal =
    animalsArray[Math.floor(randNums[0] * animalsArray.length)];
  const { breeds, animal, isSuccess } = useBreedList(randAnimal);
  const randomize = useCallback(
    () => setRandNums([Math.random(), Math.random(), Math.random()]),
    []
  );
  const randBreed = breeds
    ? breeds[Math.floor(randNums[1] * breeds.length)]
    : "";
  const query = useRequestPets(animal, "", randBreed, isSuccess);
  return {
    ...query,
    randomPetId: query.data?.pets?.[
      Math.floor(randNums[2] * query.data.pets.length)
    ]?.id
      ? query.data?.pets?.[Math.floor(randNums[2] * query.data.pets.length)]?.id
      : Math.floor(Math.random() * 23),
    randomize,
  };
};

const usePet = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  const requestPets = useCallback(
    async (animal = "", location = "", breed = "") => {
      const res = await fetch(
        `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
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
