import { useState, useEffect, useCallback } from "react";

const localCache = {};

export default function useBreedList(animalInput) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  const requestBreedList = useCallback(async () => {
    setBreedList([]);
    setStatus("loading");
    const res = await fetch(
      `http://pets-v2.dev-apis.com/breeds?animal=${animalInput}`
    );
    const json = await res.json();
    localCache[animalInput] = json.breeds || [];
    setBreedList(localCache[animalInput]);
    setStatus("loaded");
  }, [animalInput]);

  useEffect(() => {
    if (!animalInput) {
      setBreedList([]);
    } else if (localCache[animalInput]) {
      setBreedList(localCache[animalInput]);
    } else {
      requestBreedList();
    }
  }, [animalInput, requestBreedList]);

  return [breedList, status];
}
