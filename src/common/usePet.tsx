import React, { useState, useCallback } from "react";
import { PetAPIResponse, Pet } from "./APIResponsesTypes";

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

  return { pets, requestPets };
};

export default usePet;
