import React, { useState, useContext } from 'react'
import { IoIosCart } from "react-icons/io";
import Navbar from '../navcompo/Navbar';
import '../Cssfile/Compo.css'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../navcompo/CartContext';

function Header() {
    const { cartItems } = useContext(CartContext);
    let cartitems = localStorage.getItem('cartItems')

    const [data, setdata] = useState(JSON.parse(cartitems) || [])

    return (
        <header style={styles.header}>
            <h5>Online Store</h5>
            <div>
                <div className="row">
                    <div className="col-lg-12 d-flex">
                        <div className="col-lg-3">logo</div>
                        <div className="col-lg-6"><Navbar /></div>
                        <div className="col-lg-3">
                            <div style={{ position: 'relative' }}>
                                <NavLink to="/Cart">
                                    <IoIosCart />
                                    {cartItems.length > 0 && (
                                        <span style={{
                                            position: 'absolute',
                                            top: '-4px',
                                            right: '144px',
                                            background: 'red',
                                            borderRadius: '50%',
                                            color: 'white',
                                            padding: '1px 7px',
                                            fontSize: '11px'
                                        }}>
                                            {cartItems.length}
                                        </span>
                                    )}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

const styles = {
    header: {
        background: "#333",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
    },

};

export default Header;
