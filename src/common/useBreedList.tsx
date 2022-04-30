import { useState, useEffect, useCallback } from "react";
import { Animal, BreedListAPIResponse } from "./APIResponsesTypes";

type Status = "unloaded" | "loaded" | "loading";

const localCache: {
  [index: string]: string[];
} = {};

const useBreedList = (animalInput?: Animal): [string[], Status] => {
  const [breedList, setBreedList] = useState([] as string[]);
  const [status, setStatus] = useState("unloaded" as Status);

  const requestBreedList = useCallback(async () => {
    setBreedList([]);
    setStatus("loading");
    const res = await fetch(
      `http://pets-v2.dev-apis.com/breeds?animal=${animalInput}`
    );
    const json = (await res.json()) as BreedListAPIResponse;
    if (animalInput) {
      localCache[animalInput] = json.breeds || [];
    }
    setBreedList(json.breeds || []);
    setStatus("loaded");
  }, [animalInput]);

  useEffect(() => {
    if (!animalInput) {
      setBreedList([]);
    } else if (localCache[animalInput]) {
      setBreedList(localCache[animalInput]);
    } else {
      void requestBreedList();
    }
  }, [animalInput, requestBreedList]);

  return [breedList, status];
};

export default useBreedList;
