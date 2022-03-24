import React, { Component } from "react";

export class Carousel extends Component {
  constructor() {
    super();
    this.state = { active: 0 };
  }

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: parseInt(event.target.dataset.index, 10),
    });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div
        className="flex
      justify-center items-center "
      >
        <div
          className="flex 
      items-center 
      h-96 mt-2 
      "
        >
          <img
            src={images[active]}
            className="max-w-[45%] max-h-96 rounded-md mt-8"
            alt="animal"
          />
          <div className="w-6/12">
            {images.map((photo, index) => (
              <img
                alt="img"
                data-index={index}
                onClick={this.handleIndexClick}
                key={photo}
                src={photo}
                className={
                  index === active
                    ? "w-28 h-28 rounded-full inline-block m-4 cursor-pointer border-2 border-solid border-black"
                    : "w-28 h-28 rounded-full inline-block m-4 cursor-pointer border-solid border-black opacity-60"
                }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
