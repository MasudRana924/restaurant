import React from 'react';
import useAuth from '../../hooks/useAuth';
import Carts from './Carts';
import { Container} from 'react-bootstrap';
import { removeFromDb } from '../../hooks/fakeDB';
import { Link } from 'react-router-dom';
import All from './../Menu/All/All';
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
    const shipping = total > 0 ? 75 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <Container fluid className="mt-3">
            <div className="w-100 mx-auto d-flex">
                <div className="w-50 mx-auto">
                    {
                        cart.map(product => <Carts
                            product={product}
                            key={product._id}
                            handleRemove={handleRemove}
                        ></Carts>)
                    }
                </div>
                <div className="w-25 mx-auto mt-1">
                    <div className="cart-total">
                        <h5>Order Summary</h5>
                        <div >
                            <p className="text-start ms-1">Total items ordered : {totalQuantity}</p>
                            <p className="text-start ms-1">Total : ${total.toFixed(2)}</p>
                        </div>
                        <div >
                            <p  className="text-start ms-1">Tax : ${tax.toFixed(2)}</p>
                            <p  className="text-start ms-1">Shipping : ${shipping.toFixed(2)}</p>
                            <p  className="text-start ms-1">GrandTotal : ${grandTotal.toFixed(2)}</p>
                        </div>
                        <Link to="/checkout">
                        <button className="checkOut-btn">CheckOut</button>
                        </Link>
                       
                    </div>
                </div>
            </div>
            <div>
                <h5 className="text-start ms-3 mt-3">OTHER FOODS YOU MAY LIKE</h5>
                <All></All>
            </div>
        </Container>
    );
};
export default Cart;