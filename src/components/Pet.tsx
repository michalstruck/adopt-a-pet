import * as React from "react";
import { Link } from "react-router-dom";
import { Pet as PetType } from "../common/types/APIResponsesTypes";
import Divider from "./Divider";

const Pet = ({ name, animal, breed, images = [], location, id }: PetType) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0]!;
  }

  return (
    <>
      <Link
        to={`/details/${id}`}
        className="flex flex-col items-center my-4 sm:items-start sm:flex-row sm:mx-8"
      >
        <img
          data-testid="thumbnail"
          src={hero}
          alt={name}
          className="w-36 h-36 sm:w-48 sm:h-48 rounded-full shadow-md shadow-stone-500"
        />
        <div className="flex flex-col items-center sm:items-start sm:ml-4">
          <h1 className="flex flex-shrink flex-wrap text-3xl font-bold break-all mt-1">
            {name}
          </h1>
          <h1 className="flex flex-shrink text-lg">
            {animal} - {breed} - {location}
          </h1>
        </div>
      </Link>
      <Divider />
    </>
  );
};
export default Pet;
