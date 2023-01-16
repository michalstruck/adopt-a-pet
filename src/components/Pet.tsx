import * as React from "react";
import { Link } from "react-router-dom";
import { Pet as PetType } from "../common/types/APIResponsesTypes";

const Pet = ({ name, animal, breed, images = [], location, id }: PetType) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0]!;
  }

  return (
    <>
      <Link to={`/details/${id}`} className=" flex flex-row mt-7 pb-8">
        <img
          data-testid="thumbnail"
          src={hero}
          alt={name}
          className="w-48 h-48 rounded-full shadow-md shadow-stone-500"
        />
        <div className="ml-4 flex flex-col">
          <h1 className="text-3xl font-bold flex flex-shrink flex-wrap break-all">
            {name}
          </h1>
          <h1 className="text-lg flex flex-shrink">
            {animal} - {breed} - {location}
          </h1>
        </div>
      </Link>
      <div className=" border-b-black border-b-2" />
    </>
  );
};
export default Pet;
