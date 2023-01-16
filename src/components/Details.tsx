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

  if (isLoading || isError) return <></>;

  if (!data) return <DetailsPlaceholder />;

  const { animal, breed, city, state, description, name, images } = data;

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
              className="rounded-md transition-all duration-75 active:translate-y-1 h-auto w-auto px-6 py-1
               text-white container my-8"
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
                      className="rounded-md transition-all duration-75 active:translate-y-1 h-10 w-24 
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
                      className="rounded-md transition-all duration-75 active:translate-y-1 h-10 w-24 
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
