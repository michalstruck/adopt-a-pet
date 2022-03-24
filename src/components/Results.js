import Pet from "./Pet";
import React from "react";

const Results = ({ pets }) => {
  return (
    <div
      className="h-auto w-[60rem] m-auto px-8 py-4 flex
      rounded-lg flex-col
      bg-red-100 
      shadow-xl
      justify-center mb-4"
    >
      {!pets.length ? (
        <div className="text-xl">no pets</div>
      ) : (
        <div className="">
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
      )}
    </div>
  );
};
export default Results;
