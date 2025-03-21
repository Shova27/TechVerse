import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AuthPage from "./components/authPage";
import Home from "./components/home";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<AuthPage />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};
export default App;
