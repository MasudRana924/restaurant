import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet,Link } from 'react-router-dom';
import './Menu.css'
const Menu = () => {
    
    return (
        <div id="menu">
            <Container fluid className="mt-5">
                <Row xs={1} md={3} className="mb-5">
                    <Col md={2}></Col>
                    <Col md={8}>
                        <div className="d-flex justify-content-center">
                            <Link to="/" className="text-decoration-none"><button className="menu-btn">All</button>
                            </Link>
                            <Link to="burger" className="text-decoration-none"><button className="menu-btn ms-3">Burger</button>
                            </Link>
                            <Link to="" className="text-decoration-none"><button className="menu-btn ms-3">Pizza</button>
                            </Link>
                            <Link to="" className="text-decoration-none"><button className="menu-btn ms-3">Pasta</button>
                            </Link>
                            <Link to="" className="text-decoration-none"><button className="menu-btn ms-3">Drinks</button>
                            </Link>

                        </div>

                    </Col>
                    <Col md={2}>

                    </Col>
                </Row>
                
                 <Outlet />
               
            

            </Container>
        </div>
    );
};

export default Menu;