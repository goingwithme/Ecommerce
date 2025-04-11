import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer style={styles.footer}>
            <p>© 2025 My Website. All rights reserved.</p>
            <Link to="/login">login</Link>
        </footer>
    );
}

const styles = {
    footer: {
        background: "#333",
        color: "#fff",
        textAlign: "center",
        bottom: "0",
        width: "100%",
        position:"fixed"
    },
};

export default Footer;
