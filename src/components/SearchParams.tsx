import React from "react";
import { useEffect, useState, useCallback, useContext } from "react";
import useBreedList from "../common/useBreedList";
import Results from "./Results";
import ThemeContext from "../common/ThemeContext";
import { Animal, Pet, PetAPIResponse } from "../common/APIResponsesTypes";

const animalsArray: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [animal, updateAnimal] = useState("");
  const [location, updateLocation] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([] as Pet[]);
  const [breeds] = useBreedList(animal as Animal);
  const [theme, setTheme] = useContext(ThemeContext);

  const requestPets = useCallback(async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = (await res.json()) as PetAPIResponse;

    setPets(json.pets);
  }, [animal, location, breed]);

  useEffect(() => {
    void requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="my-0 mx-auto w-11/12 flex flex-col items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
        className="flex flex-col
        justify-center items-center w-96 mb-10 rounded-lg bg-red-100 shadow-xl"
      >
        <label htmlFor="location" className="block mx-8 my-4">
          Location{" "}
          <input
            type="text"
            className="block w-80 rounded-md focus:border-blue-100"
            id="location"
            value={location}
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal" className="block mx-8 my-4">
          Animal
          <select
            className="block w-80 rounded-md focus:border-blue-100 "
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value)}
            onBlur={(e) => updateAnimal(e.target.value)}
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
            className="block w-80 rounded-md focus:border-blue-100 "
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
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
            className="block w-80 rounded-md focus:border-blue-100 "
          >
            <option value="rgb(153 27 27)">Bloody Red</option>
            <option value="peru">Peru</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button
          style={{ backgroundColor: theme }}
          className="rounded-md border
         border-black h-10 w-24 
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
