import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Button,
} from "react-bootstrap";

const AddService = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    //data fecth for service
    fetch("https://serene-spire-88063.herokuapp.com/services", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("A new service is added successfully!");
        console.log(result);
      });
    reset();
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Container className="justify-content-center my-5">
        {/* input field for add service */}
        <Row className="d-flex justify-content-center text-center">
          <Col style={{ maxWidth: "400px" }}>
            <h3 className="py-3">Add Service</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormControl
                {...register("name", { required: true })}
                className="input-field mb-3"
                placeholder="Name"
                aria-label="name"
                aria-describedby="basic-addon2"
              />
              <FormControl
                {...register("price", { required: true })}
                className="input-field mb-3"
                placeholder="Price"
                aria-label="price"
                type="number"
                aria-describedby="basic-addon2"
              />
              <FormControl
                {...register("day", { required: true })}
                className="input-field mb-3"
                placeholder="Day"
                aria-label="day"
                type="text"
                aria-describedby="basic-addon2"
              />
              <FormControl
                {...register("night", { required: true })}
                className="input-field mb-3"
                placeholder="Night"
                aria-label="night"
                type="text"
                aria-describedby="basic-addon2"
              />
              <FormControl
                {...register("img", { required: true })}
                className="input-field mb-3"
                placeholder="Image URL"
                aria-label="img"
                type="text"
                aria-describedby="basic-addon2"
              />

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  {...register("description")}
                  as="textarea"
                  rows={4}
                  className="input-field mb-3"
                  placeholder="Description"
                />
              </Form.Group>
              {errors.exampleRequired && <span>This field is required</span>}
              <div className="d-grid">
                <Button
                  variant="dark"
                  type="submit"
                  className="btn common-btn3 py-3"
                  style={{
                    background: "#2196F3",
                    border: "none",
                    borderRadius: "10px",
                  }}
                >
                  Add
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddService;
