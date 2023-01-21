// import * as React from "react";
import { useQuery } from "react-query";
import { PetAPIResponse } from "../common/types/APIResponsesTypes";

async function fetchPetById(id: string) {
  const res = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
  const json: PetAPIResponse = await res.json();
  return json;
}

const usePetDetails = (id: string) => {
  const query = useQuery(["petDetails", id], () => fetchPetById(id), {
    refetchOnWindowFocus: false,
    select: (data) => ({
      ...data.pets[0],
      images:
        data.pets[0] &&
        data.pets[0].images.map((image: string) =>
          image.replace("http", "https")
        ),
    }),
  });
  console.log(query);
  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
export default usePetDetails;
