import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartPlus, faHeart, faUtensils } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../../hooks/useAuth';


const Header = () => {
    const { foods, setDisplayFoods, cart } = useAuth()
    const search = <FontAwesomeIcon icon={faSearch} />
    const cartt = <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
    const heart = <FontAwesomeIcon icon={faHeart} className="heart-icon" />
    const logo = <FontAwesomeIcon icon={faUtensils} className="heart-icon" />
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = foods.filter(food => food.title.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayFoods(matchedProducts);
    }
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }


    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container >
                    <Navbar.Brand href="#home" className="text-danger fw-bold fs-3">{logo} FoodHurry</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-white" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-5 ">
                            <Nav.Link as={HashLink} to="/home" className="nav-name">Home</Nav.Link>
                            <Nav.Link className="nav-name">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact" className="nav-name ">Contact </Nav.Link>


                        </Nav>
                        <Nav className="mx-auto ">
                            <span>
                                <span className="search">{search}</span>
                                <input type="text" placeholder="search a product here" className="input-panel ps-5" onChange={handleSearch} />
                            </span>
                        </Nav>
                        <Nav>
                            <Link to="/" className="icon-panel "> <button className="iconbtn">
                                {heart}</button>
                            </Link>
                            <Link to="/cart">
                                <button className="iconbtn ">
                                    {cartt} <span className="cart-item">{totalQuantity} </span>
                                </button>
                            </Link>


                        </Nav>
                        <Nav>
                            <Link to="/login">
                                <button className="login-btn ms-3">Log-in</button> </Link>

                            <Link to="/signup">
                                <button className="login-btn ms-1">Sign-up</button> </Link>



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;