import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
const Login = () => {
    const { handleGoogleSignin, setIsLoading, handleLogin } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home";

    const googleSignin = () => {
        handleGoogleSignin().then(() => {
            history.push(redirect_url);
            setIsLoading(false);
        });
    };

    return (
        <div>
            <Container className="justify-content-center my-5">
                <Row className="d-flex justify-content-center text-center">
                    <Col style={{ maxWidth: "400px" }} className="my-5 py-5">
                        <h3 className="py-3">Login</h3>

                        <Form onSubmit={handleLogin}>
                            <div className="d-grid py-5">
                                <Button onClick={googleSignin} className="btn btn-primary py-3">
                                    Login With Google
                                </Button>
                                {/* <Button className="btn btn-dark text-white py-3">Github</Button>
                <Button className="btn btn-primary py-3">Facebook</Button> */}
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
