import { useQuery } from "react-query";

const requestPets = async (location: string, animal: string, breed: string) => {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed.replace(
      " ",
      "+"
    )}`
  );
  const json = await res.json();
  return json;
};

const useRequestPets = (
  animal = "",
  location = "",
  breed = "",
  enabled = false
) => {
  const query = useQuery(
    ["requestPets", location, animal, breed],
    () => requestPets(location, animal, breed),
    { enabled }
  );
  return query;
};

export default useRequestPets;
