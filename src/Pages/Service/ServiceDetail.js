import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  Col,
  Row,
  Button,
  Card,
  Badge,
  Form,
  FormControl,
} from "react-bootstrap";
import { useParams, Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './Service.css'

const ServiceDetail = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  const { user } = useAuth();
  const history = useHistory();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("https://serene-spire-88063.herokuapp.com/services")
      .then((res) => res.json())
      .then((result) => setServices(result));
  }, []);

  const selectedService = services.find(
    (service) => service._id === id
  );

  const onSubmit = (data, e) => {
    e.preventDefault();

    console.log(e.defaultPrevented);
    selectedService.status = 0;
    selectedService.id = id;
    selectedService._id = null;
    selectedService.user = data;
    selectedService.user.photoURL = user.photoURL;

    fetch("https://serene-spire-88063.herokuapp.com/booking", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedService),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(selectedService);
        history.push("/myorder");
        alert("A new booking is added successfully!");
      });
    reset();
  };
  return (
    <div
      style={{
        maxWidth: "auto",
        border: "none",
        borderRadius: "10px",
      }}
      className="card my-2 mx-2"
    >
      <div className="row g-2">
        <Col xl={6} lg={6} md={12} sm={12}>
          <Card
            id="card"
            className="border-0"
            style={{
              maxWidth: "100%",
              border: "none",
              borderRadius: "10px",
            }}
          >
            <div style={{ margin: "10px" }}>
              <Card.Img
                id="card-img"
                className="w-100% img-fluid"
                variant="top"
                style={{ borderRadius: "10px" }}
                src={selectedService?.img}
              />
            </div>
            <Card.Text className="ms-2 mb-0">
              <Badge pill bg="primary" className="px-3 me-2" text="white">
                Day: {selectedService?.day}
              </Badge>
              <Badge pill bg="dark" className="px-3 me-2" text="light">
                Night: {selectedService?.night}
              </Badge>
            </Card.Text>
            <Card.Body className="card-body">
              <Card.Title className="card-title">
                {selectedService?.name}
              </Card.Title>
              <Card.Text className="card-info">
                {selectedService?.description}
              </Card.Text>

              <Card.Title style={{ color: "green" }} className="card-title">
                ${selectedService?.price}
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6} md={12} sm={12}>
          <Row className="d-flex justify-content-center text-center">
            <Col style={{ maxWidth: "400px" }}>
              <h3 className="py-3">Add Shipping</h3>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormControl
                  {...register("displayName")}
                  className="input-field mb-3"
                  placeholder="Name"
                  aria-label="name"
                  value={user.displayName}
                  defaultValues={user.displayName}
                  aria-describedby="basic-addon2"
                />

                <FormControl
                  {...register("email")}
                  className="input-field mb-3"
                  placeholder="Email"
                  aria-label="email"
                  value={user.email}
                  defaultValues={user.email}
                  type="email"
                  aria-describedby="basic-addon2"
                />
                <FormControl
                  {...register("phone", { required: true })}
                  className="input-field mb-3"
                  placeholder="Phone"
                  aria-label="phone"
                  aria-describedby="basic-addon2"
                />
                <FormControl
                  {...register("address", { required: true })}
                  className="input-field mb-3"
                  placeholder="Address"
                  aria-label="address"
                  aria-describedby="basic-addon2"
                />
                <FormControl
                  {...register("number", { required: true })}
                  className="input-field mb-3"
                  placeholder="Ticket Number"
                  aria-label="ticket"
                  type="number"
                  aria-describedby="basic-addon2"
                />

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Text className="text-danger"></Form.Text>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                ></Form.Group>
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="d-grid">
                  <Button
                    variant="dark"
                    type="submit"
                    style={{
                      background: "#2196F3",
                      border: "none",
                      borderRadius: "10px",
                    }}
                    className="btn common-btn3 py-3"
                  >
                    Book Now
                  </Button>
                </div>
              </Form>

              <Link to="/services">
                <Button
                  style={{
                    border: "none",
                    borderRadius: "10px",
                  }}
                  variant="light"
                  className=" mt-4 ms-3"
                >
                  Back
                </Button>
              </Link>
              <Link to="/myorder">
                <Button
                  style={{
                    border: "none",
                    borderRadius: "10px",
                  }}
                  variant="light"
                  className=" mt-4 ms-3"
                >
                  See all of your orders
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default ServiceDetail;
