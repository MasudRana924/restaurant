import React from 'react';
import useAuth from '../../hooks/useAuth';
import Carts from './Carts';
import { Container, Row, Col } from 'react-bootstrap';
import { removeFromDb } from '../../hooks/fakeDB';
const Cart = () => {
    const { cart, setCart } = useAuth()
    const handleRemove = _id => {
        const newCart = cart.filter(product => product._id !== _id);
        setCart(newCart);
        removeFromDb(_id);
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
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <Container fluid className="mt-3">
            {
                cart.map(product => <Carts
                    product={product}
                    key={product._id}
                    handleRemove={handleRemove}
                ></Carts>)
            }

            <Row xs={1} md={3}>
                <Col md={3}></Col>
                <Col md={6} >
                    <div className=" mt-1">
                        <div className="cart-total">
                            <h5>Order Summary</h5>
                            <div className="price-rating ms-3 me-5">
                                <p >Total items ordered : {totalQuantity}</p>
                                <p>Total : ${total.toFixed(2)}</p>
                            </div>
                            <div className="price-rating ms-3 me-5">
                                <p >Tax : ${tax.toFixed(2)}</p>
                                <p>Shipping : ${shipping.toFixed(2)}</p>
                                <p>GrandTotal : ${grandTotal.toFixed(2)}</p>
                            </div>
                            <button className=" checkOut-btn">CheckOut</button>

                        </div>
                    </div>

                </Col>
                <Col md={3}>

                </Col>
            </Row>
        </Container>
    );
};
export default Cart;