import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            setUser(token);
        } else {
            setUser(null);
            router.push('./login');
        }
    }, [user]);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
