import { useQuery } from "react-query";
import { Animal, BreedListAPIResponse } from "./APIResponsesTypes";

const useBreedList = (animalInput?: Animal) => {
  const query = useQuery<BreedListAPIResponse>(["breedList", animalInput], () =>
    fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animalInput}`).then(
      (res) => res.json()
    )
  );

  return {
    breeds: query.data?.breeds ?? [],
    animal: query.data?.animal,
    ...query,
  };
};

export default useBreedList;
