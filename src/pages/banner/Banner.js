import React from 'react';
import { Col, Container, Row, Nav } from 'react-bootstrap';
import banner from '../images/banner.jpg'
import { HashLink } from 'react-router-hash-link';
import './banner.css'

const Banner = () => {
    return (
        <Container fluid >
            <Row xs={1} md={2} className="banner-section ">
                <Col md={4} >

                    <h4 className="text-start mt-5 pt-5">Meet , Eat & Enjoy</h4>

                    <p className="text-start ">Making a reservation is very easy and takes some few minutes.</p>
                    <div className="d-flex ">
                        <Nav.Link as={HashLink} to="/home#menu">
                            <button className="banner-btn">Our Menu</button> </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#reserve">
                            <button className="book-btn ms-1">Book a Table</button>
                        </Nav.Link>
                    </div>






                </Col>
                <Col md={8}>
                    <img src={banner} className="banner-image" alt="" />
                </Col>
            </Row>

        </Container>
    );
};

export default Banner;
