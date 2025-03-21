import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
    const { token, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!token) {
        navigate("/");
        return null;
    }

    return (
        <div className="container mt-5">
            <h1>Welcome to the Home Page 🎉</h1>
            <button className="btn btn-danger" onClick={() => {
                logout();
                navigate("/");
            }}>Logout</button>
        </div>
    );
};

export default Home;
