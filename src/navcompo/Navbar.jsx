import React from 'react'
import { Link } from 'react-router-dom'
import '../Cssfile/Navbar.css'
function Navbar() {
    return (
        <div className='d-flex justify-content-last'>
            <div className='NavLine d-flex justify-content-start'>
                <Link to="/Product">Product</Link>
                <Link to="/mens">Men</Link>
                <Link to="/woman">Woman</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar