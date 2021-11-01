import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "../Service/Service";
const ServicesForHome = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://serene-spire-88063.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Container className="text-center my-5">
        <h1 className="my-5 pt-5">Our Services</h1>
        <div className=" container mx-auto">
          <Row xs={1} md={3} className="g-4">
            {services.map(
              (service) =>
                service.key <= 6 && (
                  <Col key={service.key}>
                    <Service service={service}></Service>
                  </Col>
                )
            )}
          </Row>
        </div>
        <Link to="/services">
          <Button
            className="mt-4"
            style={{
              background: "#2196F3",
              border: "none",
              borderRadius: "10px",
            }}
          >
            See All the Services
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default ServicesForHome;
