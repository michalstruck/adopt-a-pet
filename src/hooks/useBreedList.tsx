import { useQuery } from "react-query";
import {
  Animal,
  BreedListAPIResponse,
} from "../common/types/APIResponsesTypes";

const useBreedList = (animalInput?: Animal) => {
  const query = useQuery<BreedListAPIResponse>(["breedList", animalInput], () =>
    fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animalInput}`, {
      headers: {
        mode: "cors",
      },
    }).then((res) => res.json())
  );
  const { isLoading, isError, isSuccess, data } = query;
  return {
    breeds: data?.breeds,
    animal: data?.animal,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useBreedList;
