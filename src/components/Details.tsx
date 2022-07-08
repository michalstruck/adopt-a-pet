import React, { useState, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "../common/ErrorBoundary";
import ThemeContext from "../common/ThemeContext";
import Modal from "../common/Modal";
import { PetAPIResponse, Pet, Animal } from "../common/APIResponsesTypes";

interface Pet1 extends Pet {
  loading: boolean;
  showModal: boolean;
}

export const Details = (props: RouteComponentProps<{ id: string }>) => {
  const [info, setInfo] = useState<Pet1>({
    loading: true,
    showModal: false,
    animal: "" as Animal,
    breed: "",
    city: "",
    state: "",
    description: "",
    name: "",
    images: [] as string[],
  });

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchPetAPI() {
      try {
        const res = await fetch(
          `http://pets-v2.dev-apis.com/pets?id=${props.match.params.id}`
        );
        const json = (await res.json()) as PetAPIResponse;
        const loading = { loading: false, showModal: false };
        setInfo(Object.assign(loading, json.pets[0]));
      } catch (e) {
        console.error(e);
      }
      return () => {
        abortController.abort();
      };
    }
    fetchPetAPI();
  }, [props.match.params.id]);

  const toggleModal = () => setInfo({ ...info, showModal: !info.showModal });

  const adopt = () => (window.location.href = "http://bit.ly/pet-adopt");

  const { animal, breed, city, state, description, name, images, showModal } =
    info;
  return (
    <div
      className="w-10/12 p-4 
      bg-red-100 
      shadow-lg 
      rounded-lg 
      text-center mx-auto"
    >
      <Carousel images={images} />
      <div>
        <h1 className="text-6xl font-bold text-center mt-8">{name}</h1>
        <h2 className="text-3xl font-bold mt-6">
          {animal} - {breed} - {city} - {state}{" "}
        </h2>
        <ThemeContext.Consumer>
          {(theme) => (
            <button
              onClick={toggleModal}
              style={{ backgroundColor: theme[0] }}
              className="rounded-md h-auto w-auto px-6 py-1
              shadow-lg shadow-stone-500 text-white container my-8"
            >
              Adopt <br /> {name}
            </button>
          )}
        </ThemeContext.Consumer>
        <p className="text-2xl pr-4">{description}</p>

        {showModal ? (
          <Modal>
            <div className="bg-red-200 rounded-lg grid place-items-center">
              <h1 className="text-2xl mt-6">Would you like to adopt {name}?</h1>
              <div>
                <ThemeContext.Consumer>
                  {(theme) => (
                    <button
                      style={{ backgroundColor: theme[0] }}
                      className="rounded-md border 
                    border-black h-10 w-24 
                    text-white container mx-36 my-8"
                      onClick={adopt}
                    >
                      Yes
                    </button>
                  )}
                </ThemeContext.Consumer>
                <ThemeContext.Consumer>
                  {(theme) => (
                    <button
                      style={{ backgroundColor: theme[0] }}
                      className="rounded-md border
                    border-black h-10 w-24 
                    text-white container mx-36 my-8"
                      onClick={toggleModal}
                    >
                      No!!
                    </button>
                  )}
                </ThemeContext.Consumer>
              </div>
            </div>
          </Modal>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

// const DetailsWithRouter = withRouter(Details);

const DetailsWithRouter = withRouter(Details);

const DetailsErrorBoundary: React.FunctionComponent =
  function DetailsErrorBoundary() {
    return (
      <ErrorBoundary>
        <DetailsWithRouter />
      </ErrorBoundary>
    );
  };

export default DetailsErrorBoundary;
