import React, { createContext, useState } from 'react';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false);

    const login = (email, password) => {
        if(email === 'admin@sky.com' && password === 'password') {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    };

    const logout = () => {
        setAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{authenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};