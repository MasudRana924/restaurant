import { useState, useEffect } from 'react';
import {getStoredCart} from './fakeDB'

const useCart = foods => {
    const [cart, setCart] = useState([]);

    useEffect(() => {

        if (foods.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const id in savedCart) {
                const addedProduct = foods.find(product => product.id === id);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }

    }, [foods]);

    return [cart, setCart];
}

export default useCart;