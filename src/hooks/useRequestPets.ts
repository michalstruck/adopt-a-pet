import { useQuery, useQueryClient } from "react-query";
import { Animal, PetAPIResponse } from "../common/types/APIResponsesTypes";

async function requestPets(
  location: string,
  animal: Animal | "",
  breed: string
) {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed.replace(
      " ",
      "+"
    )}`
  );
  const json: PetAPIResponse = await res.json();
  return json;
}

/**
 * Leave params empty to get 10 first pets
 */
const useRequestPets = (
  location = "",
  animal: Animal | "" = "",
  breed = "",
  enabled = true
) => {
  const queryClient = useQueryClient();
  const query = useQuery(
    ["requestPets", location, animal, breed],
    () => requestPets(location, animal, breed),
    { enabled, select: (data) => data.pets, refetchOnWindowFocus: false }
  );
  const { data, isLoading, isError } = query;
  return {
    data,
    isLoading,
    isError,
    refetchData: () => queryClient.invalidateQueries("requestPets"),
  };
};

export default useRequestPets;
