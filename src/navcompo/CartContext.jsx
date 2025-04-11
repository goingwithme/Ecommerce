
// src/context/CartContext.jsx
import React from 'react';
import { createContext, useState, useEffect } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCart);
    }, []);

    const addToCart = (item) => {
        const updatedCart = [...cartItems, item];
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const itemdelete = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // <- this was missing
    };



    return (
        <CartContext.Provider value={{ cartItems, addToCart, itemdelete }}>
            {children}
        </CartContext.Provider>
    );
};
