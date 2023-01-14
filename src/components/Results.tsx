import Pet from "./Pet";
import * as React from "react";
import { Pet as PetType } from "../common/types/APIResponsesTypes";
import ResultsPlaceholder from "./Results.placeholder.";

const Results = ({ pets }: { pets: PetType[] }) => {
  return (
    <div
      className={
        "flex flex-col h-auto m-auto px-4 lg:w-[60rem] py-4 rounded-lg bg-red-100 shadow-xl justify-center mb-4"
      }
    >
      {pets.length ? (
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
      ) : (
        <>
          <ResultsPlaceholder />
          <ResultsPlaceholder />
          <ResultsPlaceholder />
        </>
      )}
    </div>
  );
};
export default Results;
