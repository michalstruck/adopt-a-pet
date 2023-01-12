import { useEffect, useContext } from "react";
import useBreedList from "../common/useBreedList";
import usePet from "../common/hooks";
import Results from "./Results";
import ThemeContext from "../common/ThemeContext";
import { Animal } from "../common/types/APIResponsesTypes";
import { useForm } from "react-hook-form";

interface FormValues {
  location: string | undefined;
  animal?: Animal;
  breed: string | undefined;
}

const animalsArray: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const { register, handleSubmit: submitForm, watch } = useForm<FormValues>({});
  const { pets, requestPets } = usePet();
  const { breeds } = useBreedList(watch("animal") as Animal);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => void requestPets(), []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = submitForm((data: FormValues) =>
    requestPets(data.animal, data.location, data.breed)
  );

  return (
    <div className="flex flex-col items-center justify-center my-0 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-start mb-10 px-12 
        rounded-lg bg-red-100 shadow-xl"
      >
        <label
          htmlFor="location"
          className="flex flex-col self-stretch mx-8 my-4"
        >
          Location
          <input
            {...register("location")}
            type="text"
            className="shadow-lg rounded-md focus:border-blue-100"
          />
        </label>
        <label
          htmlFor="animal"
          className="flex flex-col self-stretch mx-8 my-4"
        >
          Animal
          <select
            className="shadow-lg rounded-md focus:border-blue-100 "
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
        <label htmlFor="breed" className="flex flex-col self-stretch mx-8 my-4">
          Breed
          <select
            className="shadow-lg rounded-md focus:border-blue-100 disabled:border-gray-400 "
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
        <label htmlFor="theme" className="flex flex-col self-stretch mx-8 my-4">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
            className="shadow-lg rounded-md focus:border-blue-100 "
          >
            <option value="rgb(153 27 27)">kororek kororowy</option>
            <option value="peru">Peru reru</option>
            <option value="mediumorchid">Medium Orchid łełe</option>
          </select>
        </label>
        <button
          style={{ backgroundColor: theme }}
          className="w-auto rounded-md my-8 py-2 px-8 self-center 
          shadow-lg shadow-stone-500 text-white container 
          transition-all duration-75 
          active:translate-y-1 active:hue-rotate-15"
        >
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
export default SearchParams;
