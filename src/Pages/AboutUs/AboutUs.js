import React from "react";
import { Col, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
      <div className="container my-5">
        <h1 className="text-center my-5">About us</h1>

        <Row xs={1} sm={1} md={1} lg={2} className="gy-5">
          <Col>
            <img
              className="w-100"
              src="https://course.cv-library.co.uk/wp-content/uploads/2016/10/travel.jpg"
              alt=""
            />
          </Col>
          <Col>
            <h3>Who we are?</h3>
            <p>
              MDNHS Travel Agency is the country’s first and leading online travel
              aggregator. Initially started with the name Travel Booking BD, we
              had a dream to make travel easier for people. And that is what we
              did since our inception. And now with our new, innovative, easy to
              use app, travel services are on your palm. The dynamic app lets
              you book your flight, find your perfect holiday from our thousands
              of holiday packages around the globe.
            </p>
          </Col>
        </Row>

        <Row xs={1} sm={1} md={1} lg={2} className="gy-5 my-5">
          <Col>
            <h3>Why you should come to us?</h3>
            <p>
              MDNHS Travel Agency is revolutionizing the way we book travel services. With
              MDNHS Travel Agency’s website and mobile app, booking your flight, hotel or
              holiday become more fun that you would think. With exciting games
              and real rewards like free trips and air ticket makes MDNHS Travel Agency
              more fun to use! You can also win TripCoin by playing games and
              booking service from MDNHS Travel Agency, that you can use to avail
              discount.
            </p>
          </Col>
          <Col>
            <img
              className="w-100"
              src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/images/large/Yf_GrrZK0SsRKJ7CyFzRugIizl04CK0D.jpg"
              alt=""
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
