import { useQuery } from "react-query";
import { PetAPIResponse } from "../common/types/APIResponsesTypes";

async function fetchPetById(id: string) {
  const res = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
  const json = await res.json();
  return json as PetAPIResponse;
}

const usePetDetails = (id: string) => {
  const query = useQuery(["petDetails", id], () => fetchPetById(id), {
    refetchOnWindowFocus: false,
    select: (data) => ({
      ...data.pets[0],
      images: data.pets[0]?.images.map((image: string) =>
        image.replace("http", "https")
      ),
    }),
  });
  const { isLoading, isError, data } = query;
  return {
    data,
    isLoading,
    isError,
  };
};
export default usePetDetails;
