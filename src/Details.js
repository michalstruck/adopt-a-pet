import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";

class Details extends Component {
  constructor() {
    super();

    this.state = { loading: true };
  }
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }
  render() {
    const { animal, breed, city, state, description, name, images } =
      this.state;
    return (
      <div
        className="w-10/12 m-auto p-4 
      bg-red-100 
      shadow-lg 
      rounded-lg 
      text-center "
      >
        <Carousel images={images} />
        <div>
          <h1 className="text-4xl font-bold">{name}</h1>
          <h2 className="text-lg font-bold">
            {animal} - {breed} - {city} - {state}{" "}
          </h2>
          <button
            className="rounded-md border
         border-black h-10 w-24 
         bg-red-800 text-white container my-8"
          >
            Adopt {name}
          </button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
