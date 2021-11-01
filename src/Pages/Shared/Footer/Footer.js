import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoFooter from "../../../img/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-light">
      <Container className="py-5 footer-text">
        <Row className="gy-5">
          <Col md={3}>
            <div>
              <img style={{ width: "90%" }} src={logoFooter} alt="logo"></img>
            </div>
          </Col>
          <Col md={3}>
            <h4 className="mb-4">Recent Posts</h4>
            <div className="d-flex">
              <div className="d-flex flex-row flex-md-column flex-lg-row">
                <img
                  className="footer-img"
                  style={{ height: "70px", marginRight: "15px" }}
                  src=""
                  alt=""
                />
                <div>
                  <p
                    style={{
                      color: "#999",
                      fontSize: ".8rem",
                      marginBottom: "5px",
                    }}
                  >
                    2nd May, 2021
                  </p>
                  <h6>MDNHS services is the best..</h6>
                </div>
              </div>
            </div>
            <div className="d-flex my-3">
              <div className="d-flex flex-row flex-md-column flex-lg-row">
                <img
                  style={{ height: "70px", marginRight: "15px" }}
                  src=""
                  alt=""
                />
                <div>
                  <p
                    style={{
                      color: "#999",
                      fontSize: ".8rem",
                      marginBottom: "5px",
                    }}
                  >
                    3rd Sep, 2021
                  </p>
                  <h6>Check out your ticket ASAP!</h6>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-row flex-md-column flex-lg-row">
                <img
                  style={{ height: "70px", marginRight: "15px" }}
                  src=""
                  alt=""
                />
                <div>
                  <p
                    style={{
                      color: "#999",
                      fontSize: ".8rem",
                      marginBottom: "5px",
                    }}
                  >
                    1st Oct, 2021
                  </p>
                  <h6>Keep your travel safety!</h6>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="footer-links">
              <div>
                <h4 className="mb-4">Quick Links</h4>
              </div>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/doctors">Airway</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <div>
                <h4 className="mb-4">Contact Us</h4>
              </div>
              <div className="mb-3">
                <p>Address:</p>
                <p>Sector 1, Uttara, Dhaka - 1230, Bangladesh</p>
              </div>
              <div className="mb-3">
                <p>Phone:</p>
                <p>+880176099**69</p>
              </div>
              <div className="mb-3">
                <p>Email:</p>
                <p>
                  <a href="mdnhs.cse@gmail.com">mdnhs.cse@gmail.com</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bg">
        <Container className="my-1">
          <Row>
            <Col className="d-flex justify-content-center my-3">
              <li>
                <Link to="/home">
                  <i className="fab fa-facebook-f px-3"></i>
                </Link>
              </li>
              <li>
                <Link to="/home">
                  <i className="fab fa-twitter px-3"></i>
                </Link>
              </li>
              <li>
                <Link to="/home">
                  <i className="fab fa-linkedin-in px-3"></i>
                </Link>
              </li>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-center">
                <p style={{ fontSize: "14px", color: "#999" }}>
                  Copyright by MDNHS 2021. All rights reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
