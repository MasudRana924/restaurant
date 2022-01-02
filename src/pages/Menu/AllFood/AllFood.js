import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { addToDb } from '../../../hooks/fakeDB';
import useAuth from '../../../hooks/useAuth';
import useCart from '../../../hooks/useCart'
import './AllFood.css'

const AllFood = (props) => {
    const { name, img, price, rating } = props.food
    const {cart,setCart,foods}=useAuth()
    const handleAddToCart = () => {
        const exists = cart.find(pd => pd._id === props.food._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id!== props.food._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, props.food];
        }
        else {
            foods.quantity = 1;
            newCart = [...cart, props.food];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(props.food._id);
        console.log(foods)

    }
    return (
        <Col className="mt-3">
            <div className="food-card">
                <img src={img} className="card-img" alt="" />
                <p className="text-center fw-bold">{name}</p>
                <div className="price-rating me-3">
                    <p className="ms-3">price : ${price}</p>
                   
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star rating"
                        fullSymbol="fas fa-star rating"
                        readonly >

                    </Rating>
                </div>
            <button className="menu-btn"  onClick={handleAddToCart}>Order Now</button>
            </div>

        </Col>
    );
};

export default AllFood;