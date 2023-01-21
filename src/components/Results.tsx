import * as React from "react";
import Pet from "./Pet";
import { Pet as IPet } from "../common/types/APIResponsesTypes";
import ResultsPlaceholder from "./Results.placeholder.";

const Results = ({ pets }: { pets: IPet[] }) => {
  return (
    <div
      className={
        "m-auto mb-4 flex h-auto flex-col justify-center rounded-lg bg-red-100 px-4 py-4 shadow-xl lg:w-[60rem]"
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
