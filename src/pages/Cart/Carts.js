import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from './../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Carts.css'
import { removeFromDb } from '../../hooks/fakeDB';

const Carts = (props) => {
    const { _id, name, img, quantity, price } = props.product
    const { cart } = useAuth()
    const { handleRemove } = props;
    const del = <FontAwesomeIcon icon={faTrashAlt} className="delete-icon" />
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const pricee = price * quantity

    return (
        <>
            <Row xs={1} md={3}>
                <Col md={3}></Col>
                <Col md={6} >
                    <div className="cart-card d-flex mt-3">
                        <div className="w-25 mx-auto ">
                            <img src={img} className="cart-image" alt="" />

                        </div>
                        <div className="w-75 mx-auto">
                            <div className="price-rating mt-3">
                                <h5 className="text-start ms-5">{name}</h5>
                                <button onClick={() => handleRemove(_id)} className="me-3 del-button">{del}</button>
                            </div>

                            <div className="price-rating ms-5 me-5 mt-3">
                                <p >Quantity : {quantity}</p>
                                <p >Price : ${pricee.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col md={3}>

                </Col>
            </Row>


        </>

    );
};

export default Carts;