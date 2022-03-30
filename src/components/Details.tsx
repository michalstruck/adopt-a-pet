import React from "react";
import { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "../common/ErrorBoundary";
import ThemeContext from "../common/ThemeContext";
import Modal from "../common/Modal";
import { PetAPIResponse } from "../common/APIResponsesTypes";

class Details extends Component<RouteComponentProps<{ id: string }>> {
  state = {
    loading: true,
    showModal: false,
    animal: "",
    breed: "",
    city: "",
    state: "",
    description: "",
    name: "",
    images: [] as string[],
  };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = (await res.json()) as PetAPIResponse;
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  adopt = () => (window.location.href = "http://bit.ly/pet-adopt");

  render() {
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;
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
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
                className="rounded-md border
         border-black h-10 w-24 
         text-white container my-8"
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p className="text-2xl pr-4">{description}</p>

          {showModal ? (
            <Modal>
              <div className="bg-red-200 rounded-lg grid place-items-center">
                <h1 className="text-2xl mt-6">
                  Would you like to adopt {name}?
                </h1>
                <div>
                  <ThemeContext.Consumer>
                    {(theme) => (
                      <button
                        style={{ backgroundColor: theme }}
                        className="rounded-md border 
                    border-black h-10 w-24 
                    text-white container mx-36 my-8"
                        onClick={this.adopt}
                      >
                        Yes
                      </button>
                    )}
                  </ThemeContext.Consumer>
                  <ThemeContext.Consumer>
                    {(theme) => (
                      <button
                        style={{ backgroundColor: theme }}
                        className="rounded-md border
                    border-black h-10 w-24 
                    text-white container mx-36 my-8"
                        onClick={this.toggleModal}
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
  }
}

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
