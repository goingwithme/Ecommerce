import React, { useState } from 'react';
import '../Cssfile/Cart.css';
import { MdDelete } from "react-icons/md";
import { useContext } from 'react';
import { FaFaceSmileWink } from "react-icons/fa6";
import { CartContext } from '../navcompo/CartContext';
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";


function Cart() {
    // const cartitem = localStorage.getItem('cartItems');
    const { cartItems, itemdelete, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    // const [data, setData] = useState(JSON.parse(cartitem) || []);
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {'★'.repeat(fullStars)}
                {halfStar && '½'}
                {'☆'.repeat(emptyStars)}
            </>
        );
    };




    return (
        <div className="cart-wrapper">
            {cartItems.length === 0 ? (
                <div>
                    <p><FaFaceSmileWink className='smil_icon' /></p>
                    <h3 className="empty-cart">Your cart is empty.</h3>
                </div>
            ) : (
                cartItems.map((item, index) => (
                    <div className="cart-box" key={index}>
                        <div className="left-column">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="product-img"
                            />
                        </div>
                        <div className="right-column">
                            <div className="delete">
                                <span className='delete_btn'
                                    onClick={() => itemdelete(item.id)}><MdDelete /></span>

                            </div>
                            <h4 className="product-title">{item.title}</h4>
                            <div className="rating">
                                Rating: {renderStars(item.rating?.rate || 0)} ({item.rating?.rate || 'N/A'})
                            </div>
                            <p>{item.description}</p>
                            <div className="btn_group">
                                quantity: {item.quantity || 1}
                                <span onClick={() => increaseQuantity(item.id)}><CiCirclePlus /></span>
                                <span onClick={() => decreaseQuantity(item.id)}><CiCircleMinus /></span>
                            </div>
                            <h2>${(item.price * item.quantity)}</h2>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;
