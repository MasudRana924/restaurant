import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../images/banner.jpg'
import './banner.css'

const Banner = () => {
    return (
        <Container fluid >
            <Row xs={1} md={2} className="banner-section ">
                <Col md={4} >
                
                        <h4 className="text-start mt-5 pt-5">Meet , Eat & Enjoy</h4>
                       
                        <p className="text-start ">Making a reservation is very easy and takes some few minutes.</p>
                        <button className="banner-btn">Our Menu</button> 
                        <button className="book-btn ms-1">Book a Table</button>

                      
                    
                </Col>
                <Col  md={8}>
                    <img src={banner} className="banner-image" alt="" />
                </Col>
            </Row>

        </Container>
    );
};

export default Banner;
