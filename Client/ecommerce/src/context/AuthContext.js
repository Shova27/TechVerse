 
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (token) {
            const decodedUser = JSON.parse(atob(token.split(".")[1]));
            setUser(decodedUser);
        } else {
            setUser(null);
        }
    }, [token]);

    const login = (jwtToken) => {
        localStorage.setItem("token", jwtToken);
        setToken(jwtToken);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};