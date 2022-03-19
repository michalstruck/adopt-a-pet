import React from "react";
import { Component } from "react";
import { withRouter, Link } from "react-router-dom";
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
      <div className="bg-img py-24">
        <div
          className="w-10/12 p-4 
      bg-red-100 
      shadow-lg 
      rounded-lg 
      text-center mx-auto"
        >
          <Link to="/">
            <img
              alt="logo"
              className="absolute top-2 left-2"
              src="http://static.frontendmasters.com/resources/2019-05-02-complete-intro-react-v5/image-logo.png"
            />
          </Link>
          <Carousel images={images} />
          <div>
            <h1 className="text-6xl font-bold text-center mt-1">{name}</h1>
            <h2 className="text-3xl font-bold mt-6">
              {animal} - {breed} - {city} - {state}{" "}
            </h2>
            <button
              className="rounded-md border
         border-black h-10 w-24 
         bg-red-800 text-white container my-8"
            >
              Adopt {name}
            </button>
            <p className="text-2xl pr-4">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
