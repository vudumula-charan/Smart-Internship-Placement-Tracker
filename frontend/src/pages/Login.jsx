import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await API.post("/users/login", {
                email,
                password,
            });

            if (response.data) {
                alert("Login Successful!");

                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data)
                );

                navigate("/dashboard");
            } else {
                alert("Invalid Email or Password");
            }
        } catch (error) {
            console.log(error);
            alert("Login Failed");
        }
    };

    return (
        <div className="login-container">
            <h1>Smart Internship Tracker</h1>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">
                    Login
                </button>
            </form>

            <p>
                Don't have an account?{" "}
                <Link to="/register">
                    Register
                </Link>
            </p>
        </div>
    );
}

export default Login;