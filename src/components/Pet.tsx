import * as React from "react";
import { Link } from "react-router-dom";
import { Pet as IPet } from "../common/types/APIResponsesTypes";
import Divider from "./Divider";

type PetProps = Omit<IPet, "description" | "city" | "state">;

const Pet = ({ name, animal, breed, images = [], location, id }: PetProps) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0]!;
  }

  return (
    <>
      <Link
        to={`/details/${id}`}
        className="my-4 flex flex-col items-center sm:mx-8 sm:flex-row sm:items-start"
      >
        <img
          data-testid="thumbnail"
          src={hero}
          alt={name}
          className="h-36 w-36 rounded-full shadow-md shadow-stone-500 sm:h-48 sm:w-48"
        />
        <div className="flex flex-col items-center sm:ml-4 sm:items-start">
          <h1 className="mt-1 flex flex-shrink flex-wrap break-all text-3xl font-bold">
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
