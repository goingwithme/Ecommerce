import React from 'react'

import Navbar from '../navcompo/Navbar';

function Header() {
    return (
        <header style={styles.header}>
            <h5>Online Store</h5>
            <div>
                <Navbar />
                
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
