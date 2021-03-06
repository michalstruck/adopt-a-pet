import React from "react";
import { Link } from "react-router-dom";
import { Pet as PetType } from "../common/APIResponsesTypes";

const Pet = ({ name, animal, breed, images = [], location, id }: PetType) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link
      to={`/details/${id}`}
      className="w-100% flex 
        overflow-hidden 
        mt-7 pb-8 border-b-black border-b-2"
    >
      <img
        data-testid="thumbnail"
        src={hero}
        alt={name}
        className="w-48 h-48 rounded-full shadow-md shadow-stone-500 "
      />
      <div className="pl-4">
        <h1 className="text-3xl font-bold">{name}</h1>
        <h1 className="text-lg">
          {animal} - {breed} - {location}
        </h1>
      </div>
    </Link>
  );
};
export default Pet;
