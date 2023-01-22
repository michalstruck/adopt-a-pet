import * as React from "react";
import Pet from "./Pet";
import { Pet as IPet } from "../common/types/APIResponsesTypes";
import ResultsPlaceholder from "./Results.placeholder.";

type ResultsProps = {
  pets: IPet[] | undefined;
  isLoadingPets: boolean;
};

const Results = ({ pets, isLoadingPets }: ResultsProps) => {
  if (isLoadingPets || !pets)
    return (
      <div className="m-auto mb-4 flex h-auto flex-col justify-center rounded-lg bg-red-100 px-4 py-4 shadow-xl lg:w-[60rem]">
        <ResultsPlaceholder />
        <ResultsPlaceholder />
        <ResultsPlaceholder />
      </div>
    );

  if (pets.length === 0)
    return (
      <div className="m-auto mb-4 flex h-auto flex-col justify-center rounded-lg bg-red-100 px-4 py-4 shadow-xl lg:w-[60rem]">
        <h1 className="text-center text-3xl">
          Ooops...no pets match your criteria. Try some other!
        </h1>
      </div>
    );

  return (
    <div
      className={
        "m-auto mb-4 flex h-auto flex-col justify-center rounded-lg bg-red-100 px-4 py-4 shadow-xl lg:w-[60rem]"
      }
    >
      <div>
        {pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Results;
