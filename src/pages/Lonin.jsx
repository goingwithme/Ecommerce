import React, { useState } from "react";
import "../Cssfile/Login.css"; // ✅ Import external CSS for styling
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [username, setusername] = useState('johnd')
    const [password, setPassword] = useState("m38rmF$");
    const [Token, setToken] = useState('')
    const navigate = useNavigate();
    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await response.json();
            if (data.token) {
                setToken(data.token);
                alert("Login successful!");
                console.log("Token:", data.token);
                sessionStorage.setItem('Token', data.token)
             

                navigate("/")
            } else {
                alert("Login failed!");
            }

            // let response = await axios.post('https://fakestoreapi.com/auth/login',{
            //     username: "username",
            //     password: "password"
            // })
            // console.log("Token:", response.data.token);
        } catch (error) {
            alert('error', error)
        }




    }


    return (
        <div className="login-container">
            <h2>Login Page</h2>
            <form className="login-form" onSubmit={handlesubmit}>
                <label>Email:</label>
                <input type="text" placeholder="email" value={username} onChange={() => setusername(e.target.value)} required />

                <label>Password:</label>
                <input type="text" placeholder="password" value={password} onChange={() => setPassword(e.target.value)} required />

                <button type="submit" >Login</button>
                <p className="signup-link">
                    Don't have an account? <Link to="/">Sign Up</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
