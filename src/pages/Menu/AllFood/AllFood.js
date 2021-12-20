import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './AllFood.css'

const AllFood = (props) => {
    const { name, img, price, rating ,desc} = props.food
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
                <button className="menu-btn">Order Now</button>
             

            </div>

        </Col>
    );
};

export default AllFood;