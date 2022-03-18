import React from "react";
import { useEffect, useState, useCallback } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [animal, updateAnimal] = useState("");
  const [location, updateLocation] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  const requestPets = useCallback(async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }, [animal, location, breed]);

  useEffect(() => {
    requestPets();
  }, [animal, location, breed, requestPets]);

  return (
    <main>
      <div
        className="flex
      justify-center items-center h-screen"
      >
        <img
          alt="logo"
          className="absolute top-2 left-2"
          src="http://static.frontendmasters.com/resources/2019-05-02-complete-intro-react-v5/image-logo.png"
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            requestPets();
          }}
          className="h-auto w-96
        rounded-lg flex-row
        bg-red-100 
        shadow-lg
        justify-center 
        items-center
        "
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
              {ANIMALS.map((animal) => (
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
          <button
            className="rounded-md border
         border-black h-10 w-24 
         bg-red-800 text-white container mx-36 my-8"
          >
            Submit
          </button>
        </form>
      </div>
      <Results pets={pets} />{" "}
    </main>
  );
};
export default SearchParams;
