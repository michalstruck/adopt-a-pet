import * as React from "react";
import { useContext, useState } from "react";
import useBreedList from "../hooks/useBreedList";
import Results from "./Results";
import ThemeContext from "../common/ThemeContext";
import { Animal } from "../common/types/APIResponsesTypes";
import { useForm } from "react-hook-form";
import useRequestPets from "../hooks/useRequestPets";

interface FormValues {
  location: string;
  animal?: Animal | "";
  breed: string;
}

const animalsArray: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const { register, watch, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      animal: "",
      location: "",
      breed: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const [submitData, setSubmitData] = useState<FormValues>({
    location: "",
    animal: "",
    breed: "",
  });

  const { data, isLoading, isError } = useRequestPets(
    submitData.location,
    submitData.animal,
    submitData.breed
  );

  const { breeds } = useBreedList(watch("animal") as Animal);
  const [theme, setTheme] = useContext(ThemeContext);

  // TODO: create screens for these cases

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error!</h1>;
  }

  if (!data) {
    return <h1>Something went wrong</h1>;
  }

  const onSubmit = (submitData: FormValues) => {
    setSubmitData(submitData);
  };

  return (
    <div className="my-0 mx-auto flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-10 flex flex-col items-start justify-center rounded-lg 
        bg-red-100 px-9 shadow-xl"
      >
        <label
          htmlFor="location"
          className="mx-8 my-4 flex flex-col self-stretch"
        >
          Location
          <input
            {...register("location")}
            type="text"
            className="rounded-md shadow-lg focus:border-blue-100"
          />
        </label>
        <label
          htmlFor="animal"
          className="mx-8 my-4 flex flex-col self-stretch"
        >
          Animal
          <select
            className="rounded-md shadow-lg focus:border-blue-100 "
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
        <label htmlFor="breed" className="mx-8 my-4 flex flex-col self-stretch">
          Breed
          <select
            className="rounded-md shadow-lg focus:border-blue-100 disabled:border-gray-400 "
            disabled={!breeds?.length || undefined}
            {...register("breed")}
          >
            <option />
            {breeds?.map((breed: string) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme" className="mx-8 my-4 flex flex-col self-stretch">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
            className="rounded-md shadow-lg focus:border-blue-100 "
          >
            <option value="rgb(153 27 27)">kororek kororowy</option>
            <option value="peru">Peru reru</option>
            <option value="mediumorchid">Medium Orchid łełe</option>
          </select>
        </label>
        <button
          style={{ backgroundColor: theme }}
          className="container my-8 w-auto self-center rounded-md py-2 
          px-8 text-white shadow-lg shadow-stone-500 
          transition-all duration-75 
          active:translate-y-1 active:hue-rotate-15"
        >
          Submit
        </button>
      </form>
      <Results pets={data} />
    </div>
  );
};
export default SearchParams;
