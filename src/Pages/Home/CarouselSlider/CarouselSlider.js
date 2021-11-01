import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../../img/slider1.jpg";
import slider2 from "../../../img/slider2.jpg";
import slider3 from "../../../img/slider3.jpg";
import "./CarouselSlider.css";

const CarouselSlider = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
