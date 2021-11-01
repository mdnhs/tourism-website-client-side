import React from "react";
import { Card, Button, Badge, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, description, img, day, night, price } = service;
  return (
    <section>
      <Col className="d-flex justify-content-center">
        <Card
          id="card"
          className="border-0"
          style={{
            maxWidth: "fit-content",
            height: "fit-content",
            border: "none",
            borderRadius: "10px",
          }}
        >
          <div style={{ margin: "10px" }}>
            <Card.Img
              id="card-img"
              className="w-100% img-fluid"
              variant="top"
              style={{ height: "8rem", borderRadius: "10px" }}
              src={img}
            />
          </div>
          <Card.Text className="ms-2 mb-0">
            <Badge pill bg="primary" className="px-3 me-2" text="white">
              Day: {day}
            </Badge>
            <Badge pill bg="dark" className="px-3 me-2" text="light">
              Night: {night}
            </Badge>
          </Card.Text>
          <Card.Body className="card-body">
            <Card.Title className="card-title">{name}</Card.Title>
            <Card.Text className="card-info">{description}</Card.Text>

            <Card.Title style={{ color: "green" }} className="card-title">
              ${price}
            </Card.Title>

            <Link to={`/service/${_id}`}>
              <Button
                className="w-100 common-btn mt-3"
                id="btn"
                style={{
                  background: "#2196F3",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                Book Now
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </section>
  );
};

export default Service;
