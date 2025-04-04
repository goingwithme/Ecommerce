import React from 'react'
import Woman from '../pages/Woman';
import Product from '../pages/Product';
import Contact from '../pages/Contact';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from '../navcompo/Navbar';
import Mens from '../pages/Mens';

const Login = React.lazy(() => import("../pages/Lonin")); // ✅ Lazy load Login page


function Maincon() {
    return (
        <div>
            <Routes> {/* ✅ Use Routes here */}
                <Route path="/mens" element={<Mens />} />
                <Route path="/Woman" element={<Woman />} />
                <Route path="/product" element={<Product />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
            </Routes>

        </div>
    );
}

const styles = {
    main: {
        padding: "20px",
        textAlign: "center",
    },
};

export default Maincon;
