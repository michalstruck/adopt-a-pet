import React, { Component } from "react";

export class Carousel extends Component {
  constructor() {
    super();
    this.state = { active: 0 };
  }

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="flex justify-around items-center h-96 mt-2">
        <img src={images[active]} className="w-96 h-96" alt="animal" />
        <div className="w-6/12">
          {images.map((photo, index) => (
            <img
              alt="img"
              key={photo}
              src={photo}
              className={
                index === active
                  ? "rounded-full inline-block m-4 cursor-pointer border-solid border-2"
                  : "w-28 h-28 rounded-full opacity-60"
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
