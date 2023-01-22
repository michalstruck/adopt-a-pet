import * as React from "react";
import { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "../common/ErrorBoundary";
import ThemeContext from "../common/ThemeContext";
import Modal from "../common/Modal";
import usePetDetails from "../hooks/usePetDetails";
import DetailsPlaceholder from "./Details.placeholder";

export const Details = (props: RouteComponentProps<{ id: string }>) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);
  const adopt = () => (window.location.href = "http://bit.ly/pet-adopt");

  const { data, isLoading, isError } = usePetDetails(props.match.params.id);

  if (isLoading) return <DetailsPlaceholder />;

  if (isError || !data) return <h1>ERROR</h1>;

  const { animal, breed, city, state, description, name, images } = data;

  return (
    <div className="mx-auto w-10/12 rounded-lg bg-red-100 p-4 text-center shadow-lg">
      <Carousel images={images} />
      <div>
        <h1 className="mt-8 text-center text-6xl font-bold">{name}</h1>
        <h2 className="mt-6 text-3xl font-bold">
          {animal} - {breed} - {city} - {state}{" "}
        </h2>
        <ThemeContext.Consumer>
          {(theme) => (
            <button
              onClick={toggleModal}
              style={{ backgroundColor: theme[0] }}
              className="container my-8 h-auto w-auto rounded-md px-6 py-1 text-white
               transition-all duration-75 active:translate-y-1"
            >
              Adopt <br /> {name}
            </button>
          )}
        </ThemeContext.Consumer>
        <p className="pr-4 text-2xl">{description}</p>

        {showModal ? (
          <Modal>
            <div className="grid place-items-center rounded-lg bg-red-200">
              <h1 className="mt-6 text-2xl">Would you like to adopt {name}?</h1>
              <div>
                <ThemeContext.Consumer>
                  {(theme) => (
                    <button
                      style={{ backgroundColor: theme[0] }}
                      className="container mx-36 my-8 h-10 w-24 rounded-md 
                    text-white transition-all duration-75 active:translate-y-1"
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
                      className="container mx-36 my-8 h-10 w-24 rounded-md 
                    text-white transition-all duration-75 active:translate-y-1"
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
