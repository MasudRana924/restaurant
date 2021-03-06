import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Foods.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudMeatball, faHamburger, faIceCream } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Foods = () => {
    const healthy = <FontAwesomeIcon icon={faCloudMeatball} className="food-icon" />
    const fast = <FontAwesomeIcon icon={faHamburger} className="food-icon" />
    const drinks = <FontAwesomeIcon icon={faIceCream} className="food-icon" />
   
    return (
        <Container fluid className="mt-5 pt-5 pb-5">
            <h3 className="text-center fw-bold">Our Services</h3>
            <Row xs={1} md={3}>
                <Col className="mt-1">
                    <div className="food-container" >
                        <p className="mt-5">{healthy}</p>
                        <Link to="" className="text-decoration-none">
                            <h3 className="food">Healthy Food</h3>
                        </Link>
                    </div>

                </Col>
                <Col className="mt-1">
                    <div className="food-container" data-aos="zoom-in">
                        <p className="mt-5">{fast}</p>
                        <Link to=""  className="text-decoration-none">
                            <h3  className="food">Fast Food</h3>
                        </Link>
                    </div>
                </Col>
                <Col className="mt-1">
                    <div className="food-container">
                        <p className="mt-5">{drinks}</p>
                        <Link to=""  className="text-decoration-none">
                            <h3  className="food">Ice-Cream</h3>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Foods;