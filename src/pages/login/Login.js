import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <Container fluid className="mt-5 pt-5">
            <Row xs={1} md={3}>
                <Col md={4}></Col>
                <Col md={4}>
                    <div className="login-card">

                        <Button type="submit" className="w-75 mx-auto text-center fs-6 mt-3" size="sm" variant="dark">
                            Google Login
                        </Button>
                        <Button type="submit" className="w-75 mx-auto text-center fs-6 mt-3" size="sm" variant="dark">
                            Facebook Login
                        </Button>
                        <p>-----OR----</p>
                        <Form className="w-75 mx-auto mt-3">
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                                <p className="text-start text-white">Email </p>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="formBasicPassword">
                                <p className="text-start text-white">Password</p>
                                <Form.Control type="password" placeholder="Enter your password" />
                                <p className="text-start text-danger"></p>
                            </Form.Group>
                            <p className="text-start text-white">Already have an account ? <Link to="/signup" className="text-decoration-none text-white">SignUp </Link></p>
                            <div className=" pb-3">

                                <Button type="submit" className="w-100 text-center fs-6 mt-3 " size="sm" variant="dark">
                                    Log-in
                                </Button>
                            </div>
                        </Form>
                    </div>

                </Col>
                <Col md={4}></Col>
            </Row>
        </Container>
    );
};

export default Login;