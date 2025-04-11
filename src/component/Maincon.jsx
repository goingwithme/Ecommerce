import React from 'react'
import Woman from '../pages/Woman';
import Product from '../pages/Product';
import Contact from '../pages/Contact';
import Cart from '../pages/Cart';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from '../navcompo/Navbar';
import Mens from '../pages/Mens';

const Login = React.lazy(() => import("../pages/Lonin")); 


function Maincon() {
    return (
        <div>
            <Routes> {/* ✅ Use Routes here */}
                <Route path="/mens" element={<Mens />} />
                <Route path="/Woman" element={<Woman />} />
                <Route path="/" element={<Product />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>

        </div>
    );
}

const styles = {
    main: {
        padding: "20px",
        textAlign: "center",
        display: "block",
    },
};

export default Maincon;
