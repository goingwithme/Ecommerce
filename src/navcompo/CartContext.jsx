
// src/context/CartContext.jsx
import React from 'react';
import { createContext, useState, useEffect } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // useEffect(() => {
    //     const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    //     setCartItems(storedCart);
    // }, []);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        // Ensure quantity is at least 1
        const updatedCart = storedCart.map(item => ({
            ...item,
            quantity: item.quantity || 1
        }));
        setCartItems(updatedCart);
    }, []);


    // const addToCart = (item) => {
    //     const updatedCart = [...cartItems, item];
    //     setCartItems(updatedCart);
    //     localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    // };

    const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

        let updatedCart;
        if (existingItem) {
            updatedCart = cartItems.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
        } else {
            updatedCart = [...cartItems, { ...item, quantity: 1 }];
        }

        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };



    const itemdelete = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // <- this was missing
    };

    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cartItems.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };



    return (
        <CartContext.Provider value={{ cartItems, addToCart, itemdelete, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
