import React, { useEffect, useState, useContext, useCallback } from "react";
import useBreedList from "../common/useBreedList";
import Results from "./Results";
import ThemeContext from "../common/ThemeContext";
import { Animal, Pet, PetAPIResponse } from "../common/APIResponsesTypes";
import { useForm } from "react-hook-form";

interface FormValues {
  location: string | undefined;
  animal?: Animal;
  breed: string | undefined;
}

const animalsArray: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];
const defaultValues = { location: "", breed: "" }; // default to empty obj and evaluate in??

const SearchParams = () => {
  const { register, handleSubmit, watch } = useForm<FormValues>({
    defaultValues,
  });
  const [pets, setPets] = useState<Pet[]>([]);
  const [breeds] = useBreedList(watch("animal"));
  const [theme, setTheme] = useContext(ThemeContext);
  const requestPets = useCallback(
    async (data: FormValues) => {
      const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${
          data.animal || ""
        }&location=${data.location || ""}&breed=${data.breed || ""}`
      );
      const json = (await res.json()) as PetAPIResponse;

      setPets(json.pets);
    },
    [setPets]
  );

  useEffect(() => void requestPets(defaultValues), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="my-0 mx-auto w-11/12 flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit((data: FormValues) => requestPets(data))}
        className="flex flex-col
        justify-center items-center w-96 mb-10 rounded-lg bg-red-100 shadow-xl"
      >
        <label htmlFor="location" className="block mx-8 my-4">
          Location{" "}
          <input
            {...register("location")}
            type="text"
            className="block w-80 shadow-lg rounded-md focus:border-blue-100"
          />
        </label>
        <label htmlFor="animal" className="block mx-8 my-4">
          Animal
          <select
            className="block w-80 shadow-lg rounded-md focus:border-blue-100 "
            {...register("animal")}
          >
            <option />
            {animalsArray.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed" className="block mx-8 my-4">
          Breed
          <select
            className="block w-80 shadow-lg rounded-md focus:border-blue-100 disabled:border-gray-400 "
            disabled={!breeds.length}
            {...register("breed")}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme" className="block mx-8 my-4">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
            className="block w-80 shadow-lg rounded-md focus:border-blue-100 "
          >
            <option value="rgb(153 27 27)">adasiunia34</option>
            <option value="peru">Peru</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button
          style={{ backgroundColor: theme }}
          className="rounded-md 
         shadow-lg shadow-stone-500 h-10 w-24 
         text-white container mx-36 my-8"
        >
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
export default SearchParams;
